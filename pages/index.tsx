import { MongoClient } from "mongodb";
import { MeetupItemProps } from "@/components/meetups/MeetupItem";
import MeetupList from "@/components/meetups/MeetupList";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";

const HomePage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse highly reactive meetups"
        />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </>
  );
};

export const getStaticProps: GetStaticProps<{
  meetups: MeetupItemProps[];
}> = async () => {
  // fetch from API
  const username = process.env.DB_USERNAME ?? "";
  const password = process.env.DB_PASSWORD ?? "";

  const client = await MongoClient.connect(
    `mongodb+srv://${username}:${password}@cluster0.wpfjobs.mongodb.net/meetups?retryWrites=true&w=majority`
  );
  const db = client.db();
  const meetupsCol = db.collection("meetups");
  const result = await meetupsCol.find().toArray();

  console.log(result);
  client.close();

  return {
    props: {
      meetups: result.map((meetup) => ({
        title: meetup.title as string,
        address: meetup.address as string,
        description: meetup.description as string,
        image: meetup.image as string,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
};

export default HomePage;
