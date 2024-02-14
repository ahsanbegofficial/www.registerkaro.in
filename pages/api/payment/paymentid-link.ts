import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const Id = req.query.Id as string
            const payemntdata = await prisma.paymentLinks.findFirst({
                where: {
                    paymentId: Id
                }
            });
            let userID = payemntdata?.paymentCreatorID
            const userData = await prisma.user.findFirst({
                where: {
                    userId: userID
                }
            });

            await prisma.$disconnect();
            res.status(200).json({ data: userData });
        } catch (error) {
            console.error('Error storing data:', error);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }
}