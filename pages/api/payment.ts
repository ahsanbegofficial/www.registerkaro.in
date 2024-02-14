import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import crypto from 'crypto';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // const apiUrl = 'https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay';   //dummy
    const apiUrl = 'https://api.phonepe.com/apis/hermes/pg/v1/pay';
    // const saltKey = '099eb0cd-02cf-4e2a-8aca-3e6c6aff0399';  //dummy
    const saltKey = '87eaf8dd-fd45-4362-860d-c8c77df8b2ea';
    const saltIndex = '1';

    const payload = JSON.stringify(req.body);
    const base64Payload = Buffer.from(payload).toString('base64');
    const xVerify = crypto.createHash('sha256').update(base64Payload + '/pg/v1/pay' + saltKey).digest('hex') + '###' + saltIndex;

    const response = await axios.post(apiUrl, { request: base64Payload }, {
      headers: {
        'Content-Type': 'application/json',
        'X-VERIFY': xVerify,
      },
    });
    const responseData = response.data;
    res.status(200).json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
