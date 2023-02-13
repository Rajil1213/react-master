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

// typeguard for events API
const isEvents = (object: unknown): object is { events: Event[] } => {
  if (object !== null && typeof object === "object") return "events" in object;
  return false;
};

export const loader = async () => {
  const response = await fetch('http://localhost:8080/events')

  if (!response.ok) {
    // ...
  } else {
    const resData = await response.json();
    if (isEvents(resData)) return resData.events;

    return { events: []};
  }
}
