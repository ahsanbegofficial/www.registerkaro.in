import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            let link = req.query.link as string
            let profile = req.query.profile as string
            if (profile === 'Super Admin' || profile === 'Sales Admin' || profile === 'Operations Admin') {
                const data = await prisma.paymentLinks.findFirst({
                    where: {
                        link: link,
                    },
                });
                let id = data?.paymentId
                let curStatus = data?.status

                if (curStatus !== "COMPLETED") {
                    const samp = await prisma.paymentLinks.update({
                        where: {
                            paymentId: id,
                        },
                        data: {
                            status: "CANCELLED"
                        }
                    });
                    res.status(200).json({ success: true, message: 'Successfully cancelled' });
                }
                res.status(200).json({ success: false, message: 'The transaction is already completed' });
            }
            else {
                res.status(200).json({ success: false, message: 'only admin can make a request' });
            }
            await prisma.$disconnect();
            res.status(200).json({ message: 'link cancelled successfully' });
        } catch (error) {
            console.error('Error storing data:', error);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    }
    else {
        res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }
}