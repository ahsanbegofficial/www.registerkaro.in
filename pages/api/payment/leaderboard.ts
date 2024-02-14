import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            let { userName } = req.query as any
            const data = await prisma.paymentLinks.groupBy({
                by: ['paymentCreatorID'],
                where: {
                    status: {
                        equals: "COMPLETED"
                    }
                },
                _sum: {
                    conversionValue: true
                }
            });
            const users = await prisma.user.findMany({});
            const userData = await prisma.user.findFirst({
                where: {
                    username: userName
                }
            })
            const department = userData?.department

            let arr = []
            let arr2 = []
            let total1 = 0
            let total2 = 0
            for (let i = 0; i < users.length; i++) {
                for (let j = 0; j < data.length; j++) {
                    if (users[i].userId === data[j].paymentCreatorID) {
                        if (department?.includes("sales")) {
                            if (users[i].department === "sales - incorporation" || users[i].department === "sales - compliance") {
                                const conversionValue = data[j]._sum.conversionValue as number | null;
                                if (conversionValue !== null) {
                                    total1 = total1 + conversionValue
                                }
                                arr.push(
                                    { name: users[i].name, dep: users[i].department, amount: data[j]._sum.conversionValue }
                                )
                            }
                        }
                        else {
                            if (users[i].department === "operations - compliance" || users[i].department === "operations - incorporation" || users[i].department === "operations - post incorporation") {
                                const conversionValue = data[j]._sum.conversionValue as number | null;
                                if (conversionValue !== null) {
                                    total2 = total2 + conversionValue
                                }
                                arr.push(
                                    { name: users[i].name, dep: users[i].department, amount: data[j]._sum.conversionValue }
                                )
                            }
                        }
                    }
                }
            }
            arr.sort((a, b) => {
                if (a.amount === null && b.amount === null) return 0;
                if (a.amount === null) return 1;
                if (b.amount === null) return -1;
                return b.amount - a.amount;
            });
            arr2.push({ total1: total1, total2: total2 })
            await prisma.$disconnect();
            res.status(200).json({ department, data: {arr,arr2} });
        } catch (error) {
            console.error('Error storing data:', error);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }
}