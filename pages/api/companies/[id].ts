import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

const url =
  'mongodb+srv://BMICalculator:BMICalculator1234@cluster0.mqnnwti.mongodb.net/webBMI?retryWrites=true&w=majority';
const dbName = 'newregisterkaro';
const collectionName = 'companies';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let { id } = req.query;
  if (!id) {
    res.status(400).json({ error: 'Invalid request. Missing id parameter.' });
    return;
  }

  id = id.toString();

  try {
    const client = new MongoClient(url);
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    if (id) {
      const data = await collection.findOne({ CIN: id });
      await client.close();
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ error: 'Data not found' });
      }
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}