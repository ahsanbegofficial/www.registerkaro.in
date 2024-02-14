import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            let { id, dep, ph } = req.body
            const userData = await prisma.user.update({
                where: {
                    userId: id
                },
                data: {
                    authenticated: 'true',
                    department: dep,
                    phone: ph
                },
            })
            await prisma.$disconnect();
            res.status(200).json({ success: true, message: 'Data stored successfully' });
        } catch (error) {
            console.error('Error storing data:', error);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    }
    if (req.method === 'GET') {
        try {
            const userData = await prisma.user.findMany({});
            await prisma.$disconnect();
            const data = userData.filter(e => e.authenticated === 'false');
            res.status(200).json(data);
        } catch (error) {
            console.error('Error storing data:', error);
            res.status(500).json({ success: false, message: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }
}