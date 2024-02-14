import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            let { Id } = req.query
            const paymentLinksData = await prisma.paymentLinks.findUnique({
                where: {
                    paymentId: (Id as string)
                }
            });
            await prisma.$disconnect();
            res.status(200).json(paymentLinksData);

        } catch (error) {
            console.error('Error storing data:', error);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    }
    if (req.method === 'POST') {
        try {
            let { Id, merchantTransactionId } = req.body
            let st=String(Id)
            let st2=String(merchantTransactionId)
            const transactionData = await prisma.transaction.create({
                data: {
                    paymentId: st,
                    merchantTransactionId: st2,
                    status : "PENDING"
                }
            });
            await prisma.$disconnect();
            res.status(200).json({ success: true });
        } catch (error) {
            console.error('Error storing data:', error);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    }
    else {
        res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }
}