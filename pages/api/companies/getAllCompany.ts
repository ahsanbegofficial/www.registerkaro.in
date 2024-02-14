import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

const url = 'mongodb+srv://BMICalculator:BMICalculator1234@cluster0.mqnnwti.mongodb.net/webBMI?retryWrites=true&w=majority'
const dbName = 'newregisterkaro';
const collectionName = 'companies';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const client = new MongoClient(url);
      await client.connect();
      const db = client.db(dbName);
      const collection = db.collection(collectionName);
      const data = await collection.find({}).toArray();
      await client.close();
      res.status(200).json(data);
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}