import MeetupDetail from "@/components/meetups/MeetupDetail";
import { MeetupItemProps } from "@/components/meetups/MeetupItem";
import { MongoClient, ObjectId } from "mongodb";
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";

const MeetupDetails = (
  props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  return <MeetupDetail {...props.meetupData} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  // fetch from API
  const username = process.env.DB_USERNAME ?? "";
  const password = process.env.DB_PASSWORD ?? "";

  const client = await MongoClient.connect(
    `mongodb+srv://${username}:${password}@cluster0.wpfjobs.mongodb.net/meetups?retryWrites=true&w=majority`
  );
  const db = client.db();
  const meetupsCol = db.collection("meetups");
  const result = await meetupsCol.find().project({ _id: 1 }).toArray();

  client.close();

  return {
    fallback: "blocking",
    paths: result.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
  };
};

export const getStaticProps: GetStaticProps<{
  meetupData: MeetupItemProps;
}> = async (context: GetStaticPropsContext) => {
  const meetupId = context.params?.meetupId as string;

  const username = process.env.DB_USERNAME ?? "";
  const password = process.env.DB_PASSWORD ?? "";

  const client = await MongoClient.connect(
    `mongodb+srv://${username}:${password}@cluster0.wpfjobs.mongodb.net/meetups?retryWrites=true&w=majority`
  );
  const db = client.db();
  const meetupsCol = db.collection("meetups");
  const result = await meetupsCol.findOne({ _id: new ObjectId(meetupId) });

  client.close();

  return {
    props: {
      meetupData: {
        id: result?._id.toString() ?? "",
        title: (result?.title as string) ?? "",
        address: (result?.address as string) ?? "",
        description: (result?.description as string) ?? "",
        image: (result?.image as string) ?? "",
      },
    },
  };
};

export default MeetupDetails;
