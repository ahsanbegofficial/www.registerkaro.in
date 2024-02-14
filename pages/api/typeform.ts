import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const bodyData = req.body;
      const url = 'https://flow.zoho.in/60012180367/flow/webhook/incoming?zapikey=1001.da469caf73442fb1d02a0d19a68a1070.b921f09a8e55f3e0a5aa2812daedb2d1&isdebug=false';
      const formData = {
        'Proposed Name Of Business': bodyData.ProposedNameOfTheBusiness,
        'Number of Partners': bodyData.NoOfPartners,
        'State of Incorporation': bodyData.state,
        'Name': bodyData.name,
        'Email': bodyData.email,
        'Phone': bodyData.number
      }
      const result = await axios.post(url, formData);
      res.status(200).json({ success: true, data: 'Data stored successFully' });
    } catch (error) {
      console.error('Error updating payment status:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  }
  else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
