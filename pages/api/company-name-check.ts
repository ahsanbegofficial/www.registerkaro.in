import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const url = "https://www.mca.gov.in/bin/mca-gov/newSpiceA";
  console.log('s',req.body.formData)
  try {
    const response = await axios.post(url, req.body.formData, {
      headers: {
        authority: "www.mca.gov.in",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
    });
    const responseData = response.data;
    res.status(200).json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}