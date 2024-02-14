import { NextApiRequest, NextApiResponse } from 'next';
import { Client } from 'pg';

const databaseConfig = {
  host: '167.71.224.136',
  port: 5432,
  user: 'test',
  password: 'RegisterKaro@123',
  database: 'registerkaro',
};

export default async function handler(req: NextApiRequest,res: NextApiResponse) {
  const { query, name, directorDIN } = req.query;

  if (req.method === 'GET') {
    try {
      const db = new Client(databaseConfig);
      await db.connect();

      if (query) {
        const queryString = `
          SELECT "CompanyName"
          FROM "CompanyData"
          WHERE "CompanyName" ILIKE $1
          LIMIT 10;
        `;
        const values = [`%${query}%`];
        const result = await db.query(queryString, values);
        const companyNames = result.rows.map((row) => row.CompanyName);
        res.status(200).json(companyNames);
      } else if (name) {
        const query = `
      SELECT
        "CompanyData".*,
        "Director_data"."DIN",
        "Director_data"."nameFirst",
        "Director_data"."nameLast"
      FROM
        "CompanyData"
      LEFT JOIN
        "directorToCompany" ON "CompanyData"."CIN" = "directorToCompany"."CIN"
      LEFT JOIN
        "Director_data" ON "directorToCompany"."DIN" = "Director_data"."DIN"
      WHERE
        "CompanyData"."CompanyName" = $1
        `;
        const values = [name as string];
        const result = await db.query(query, values);
        const rows = result.rows;
        if (rows.length > 0) {
          const companyDetails = {
            ...rows[0],
            directors: rows.map((row) => ({
              nameFirst: row.nameFirst,
              nameLast: row.nameLast,
              DIN: row.DIN,
            })),
          };

          res.status(200).json(companyDetails);
        } else {
          res.status(404).json({ error: 'Company not found' });
        }
      } else if (directorDIN) {
        const query = `
        SELECT
          "CompanyData".*
        FROM
          "CompanyData"
        INNER JOIN
          "directorToCompany" ON "CompanyData"."CIN" = "directorToCompany"."CIN"
        WHERE
          "directorToCompany"."DIN" = $1
      `;    
        const values = [directorDIN as string];
        const result = await db.query(query, values);
        const companyList = result.rows;
        res.status(200).json(companyList);
      }
      else {
        res.status(400).json({ error: 'Invalid request' });
      }

      await db.end();
    } catch (error) {
      console.error('Error connecting to PostgreSQL:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
