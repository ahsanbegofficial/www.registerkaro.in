import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

const url = 'mongodb+srv://BMICalculator:BMICalculator1234@cluster0.mqnnwti.mongodb.net/webBMI?retryWrites=true&w=majority';
const dbName = 'newregisterkaro';
const collectionName = 'ads-registration';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const Query = req.query.id
    
    try {
        const client = new MongoClient(url);
        await client.connect();

        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const data = await collection.findOne({});

        if (data) {
            const finalData = data[Query as string];
            res.status(200).json(finalData);
        } else {
            res.status(404).json({ error: 'Data not found' });
        }
        await client.close();

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}