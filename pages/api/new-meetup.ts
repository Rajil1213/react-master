// /api/new-meetup
import { MongoClient } from "mongodb";

import { MeetupItemProps } from "@/components/meetups/MeetupItem";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === "POST") {
    const data = req.body as MeetupItemProps;

    const username = process.env.DB_USERNAME ?? "";
    const password = process.env.DB_PASSWORD ?? "";

    const client = await MongoClient.connect(
      `mongodb+srv://${username}:${password}@cluster0.wpfjobs.mongodb.net/meetups?retryWrites=true&w=majority`
    );
    const db = client.db();
    const meetupsCol = db.collection("meetups");
    const result = await meetupsCol.insertOne(data);

    console.log(result);
    client.close();

    res.status(201).json({ message: "Meetup Inserted" });
  }
};

export default handler;
