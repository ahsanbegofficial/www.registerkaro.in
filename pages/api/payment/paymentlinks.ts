import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            let { name, status, service, email, amount, phone, link, paymentId, paymentCreatorID, conversionValue } = req.body;
            let amt = parseInt(amount)
            let conv = parseInt(conversionValue)
            const userData = await prisma.paymentLinks.create({
                data: {
                    name, status, service, email, amount: amt, phone, link, paymentId, paymentCreatorID, conversionValue: conv
                }
            });
            await prisma.$disconnect();
            res.status(200).json({ success: true, message: 'Data stored successfully' });
        } catch (error) {
            console.error('Error storing data:', error);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    }
    if (req.method === 'GET') {
        try {
            let { paymentCreatorID } = req.query
            let st = String(paymentCreatorID)
            let integer = parseInt(st)
            const paymentLinksData = await prisma.paymentLinks.findMany({
                where: { UserRelation: { userId: integer } },
                include: {
                    UserRelation: true
                }
            });
            await prisma.$disconnect();
            res.status(200).json(paymentLinksData);
        } catch (error) {
            console.error('Error storing data:', error);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    }
    else {
        res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }
}