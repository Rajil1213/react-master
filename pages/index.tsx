import { MeetupItemProps } from "@/components/meetups/MeetupItem";
import MeetupList from "@/components/meetups/MeetupList";
import { GetStaticProps, InferGetStaticPropsType } from "next";

const DUMMY_MEETUPS: MeetupItemProps[] = [
  {
    id: "m1",
    title: "A First Meetup",
    address: "Address 1",
    description: "This is a first meetup!",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Am_Strand_von_Ko_Tao.jpg/1920px-Am_Strand_von_Ko_Tao.jpg",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    address: "Address 2",
    description: "This is a second meetup!",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Am_Strand_von_Ko_Tao.jpg/1920px-Am_Strand_von_Ko_Tao.jpg",
  },
  {
    id: "m3",
    title: "A Third Meetup",
    address: "Address 3",
    description: "This is a third meetup!",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Am_Strand_von_Ko_Tao.jpg/1920px-Am_Strand_von_Ko_Tao.jpg",
  },
];

const HomePage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <MeetupList meetups={props.meetups} />;
};

export const getStaticProps: GetStaticProps<{
  meetups: MeetupItemProps[];
}> = () => {
  // fetch from API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
};

export default HomePage;
