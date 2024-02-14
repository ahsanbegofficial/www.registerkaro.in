import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const { username, name } = req.body
            const existingUser = await prisma.user.findFirst({
                where: {
                    username,
                },
            });

            if (existingUser) {
                const { authenticated, userId, profile, name } = existingUser
                return res.status(200).json({ authenticated, userId, profile, name, message: 'Username already exists' });
            }

            const userData = await prisma.user.create({
                data: {
                    username,
                    name: name,
                    authenticated: "false",
                }
            });
            await prisma.$disconnect();
            res.status(200).json({ authenticated: 'false', message: 'Data stored successfully' });
        } catch (error) {
            console.error('Error storing data:', error);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    }
    if (req.method === 'GET') {
        try {
            let { profile } = req.query
            if (profile === 'Super Admin') {
                const paymentLinksData = await prisma.paymentLinks.findMany({});
                await prisma.$disconnect();
                res.status(200).json({ data: paymentLinksData });
            }
            if (profile === 'Sales Admin') {
                const paymentLinksData = await prisma.user.findMany({
                    where: {
                        OR: [
                            { department: 'sales - compliance' },
                            { department: 'sales - incorporation' }
                        ]
                    }
                });
                let salesData = [];
                for (let i = 0; i < paymentLinksData.length; i++) {
                    let id = paymentLinksData[i].userId
                    let username = paymentLinksData[i].username
                    let obj = await prisma.paymentLinks.findMany({
                        where: { paymentCreatorID: id }
                    })
                    for (let j = 0; j < obj.length; j++) {
                        let ob = obj[j] as any
                        ob["username"] = username
                    }
                    salesData.push(...obj)
                }
                await prisma.$disconnect();
                res.status(200).json({ data: salesData });
            }
            if (profile === 'Operations Admin') {
                const paymentLinksData = await prisma.user.findMany({
                    where: { department: 'operations' }
                });
                let operationsData = [];
                for (let i = 0; i < paymentLinksData.length; i++) {
                    let id = paymentLinksData[i].userId
                    let username = paymentLinksData[i].username
                    let obj = await prisma.paymentLinks.findMany({
                        where: { paymentCreatorID: id }
                    })
                    for (let j = 0; j < obj.length; j++) {
                        let ob = obj[j] as any
                        ob["username"] = username
                    }
                    operationsData.push(...obj)
                }
                await prisma.$disconnect();
                res.status(200).json({ data: operationsData });
            }
            else {
                res.status(200).json('Data not found');
            }
        } catch (error) {
            console.error('Error storing data:', error);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    }
    else {
        res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }
}