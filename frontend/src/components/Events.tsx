import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";
import { Event } from "./EventItem";

function EventsPage() {
  const fetchedEvents = useLoaderData() as Event[];

  return (
    <>
      <EventsList events={fetchedEvents} />
    </>
  );
}

export default EventsPage;
