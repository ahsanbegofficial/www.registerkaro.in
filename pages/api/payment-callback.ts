import { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';
import { PrismaClient } from '@prisma/client';
import axios from 'axios';

const prisma = new PrismaClient();
const saltKey = '87eaf8dd-fd45-4362-860d-c8c77df8b2ea';
const saltIndex = 1;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const callbackData = req.body;

            const receivedXVerifyHeader = req.headers['x-verify'];
            const calculatedXVerifyHeader = crypto.createHash('sha256').update(callbackData.response + saltKey).digest('hex') + '###' + saltIndex;

            if (receivedXVerifyHeader !== calculatedXVerifyHeader) {
                return res.status(403).json({ success: false, error: 'Callback verification failed' });
            }

            const decodedResponse = Buffer.from(callbackData.response, 'base64').toString('utf-8');
            const parsedResponse = JSON.parse(decodedResponse);
            const { merchantTransactionId, state } = parsedResponse.data;

            const Status = state === 'COMPLETED' ? 'COMPLETED' : 'FAILED'

            const transactionData = await prisma.transaction.update({
                where: {
                    merchantTransactionId: (merchantTransactionId as string)
                },
                data: {
                    status: Status
                }
            })

            const paymentID = transactionData.paymentId
            const existingPaymentData = await prisma.paymentLinks.findUnique({
                where: {
                    paymentId: paymentID
                }
            });

            if (existingPaymentData && existingPaymentData.status !== 'COMPLETED') {
                const paymentData = await prisma.paymentLinks.update({
                    where: {
                        paymentId: paymentID
                    },
                    data: {
                        status: Status
                    }
                });
            }

            const userPaymentCreator = existingPaymentData?.paymentCreatorID
            const userData = await prisma.user.findFirst({
                where: {
                    userId: userPaymentCreator
                }
            })
            const username = userData?.username
            const department = userData?.department

            const url = 'https://flow.zoho.in/60012180367/flow/webhook/incoming?zapikey=1001.f8ba6c401c954df489545db64f9db866.2b0263c858d31c4d4155900b8ed8e69a&isdebug=false';
            const headers = {
                'Content-Type': 'application/json',
            };
            const dataToSend = {
                "Customer Name": existingPaymentData?.name,
                "Email": existingPaymentData?.email,
                "Phone": existingPaymentData?.phone,
                "Service": existingPaymentData?.service,
                "Amount": existingPaymentData?.amount,
                "Spoc": username,
                "Status": Status,
                "Department": department,
                "Reason": parsedResponse.data.responseCode,
                "merchantTransactionId": merchantTransactionId
            };
            const result = await axios.post(url, dataToSend, { headers });


            res.status(200).json({ success: true });
            await prisma.$disconnect();

        } catch (error) {
            console.error('Error updating payment status:', error);
            res.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    }
    if (req.method === 'GET') {
        res.status(200).json({ success: true, message: 'msg' });
    } else {
        res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }
}
