import MeetupDetail from "@/components/meetups/MeetupDetail";

const MeetupDetails = () => {
  const meetup = {
    id: "m1",
    title: "A First Meetup",
    address: "Address 1",
    description: "This is a first meetup!",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Am_Strand_von_Ko_Tao.jpg/1920px-Am_Strand_von_Ko_Tao.jpg",
  };
  return <MeetupDetail {...meetup} />;
};

export default MeetupDetails;
