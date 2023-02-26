import MeetupDetail from "@/components/meetups/MeetupDetail";
import { MeetupItemProps } from "@/components/meetups/MeetupItem";
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

export const getStaticPaths: GetStaticPaths = () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
};

export const getStaticProps: GetStaticProps<{
  meetupData: MeetupItemProps;
}> = (context: GetStaticPropsContext) => {
  const meetupId = context.params?.meetupId as string;

  return {
    props: {
      meetupData: {
        id: meetupId,
        title: "A First Meetup",
        address: "Address 1",
        description: "This is a first meetup!",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Am_Strand_von_Ko_Tao.jpg/1920px-Am_Strand_von_Ko_Tao.jpg",
      },
    },
  };
};

export default MeetupDetails;
