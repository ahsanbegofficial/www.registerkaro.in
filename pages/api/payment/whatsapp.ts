import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, phone,number, url, amount } = req.body
        try {
            const response = await axios.post(`https://live-server-106054.wati.io/api/v1/sendTemplateMessage?WhatsappNumber=${phone}`, {
                "template_name": "payment_link_viewed_v2",
                "broadcast_name": "payment_link_viewed",
                "parameters": [
                    {
                        "name": "customer_name",
                        "value": name
                    },
                    {
                        "name": "phone",
                        "value": number
                    },
                    {
                        "name": "dir3kyc_link",
                        "value": url
                    },
                    {
                        "name": "amount",
                        "value": amount
                    },
                ],
            }, {
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5NzlkMzYwYy1lZjc4LTQyM2YtYmEyMC1jNjYyYzRkNDk5NjciLCJ1bmlxdWVfbmFtZSI6InNyaWhhcmlAUmVnaXN0ZXJLYXJvLmluIiwibmFtZWlkIjoic3JpaGFyaUBSZWdpc3Rlckthcm8uaW4iLCJlbWFpbCI6InNyaWhhcmlAUmVnaXN0ZXJLYXJvLmluIiwiYXV0aF90aW1lIjoiMDkvMzAvMjAyMyAxMjo0NDoxMiIsImRiX25hbWUiOiIxMDYwNTQiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBRE1JTklTVFJBVE9SIiwiZXhwIjoyNTM0MDIzMDA4MDAsImlzcyI6IkNsYXJlX0FJIiwiYXVkIjoiQ2xhcmVfQUkifQ.CuUneXWxYDO11-99zJfuoGfK54mQSv0-Kbq9NCoRlBs'
                }
            });
        } catch (error) {
            console.error('Error fetching initial data:', error);
        }
    } else {
        res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }
}
