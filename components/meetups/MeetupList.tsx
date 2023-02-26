import MeetupItem, { MeetupItemProps } from "./MeetupItem";
import classes from "./MeetupList.module.css";

interface MeetupListProps {
  meetups: MeetupItemProps[];
}

function MeetupList(props: MeetupListProps) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
