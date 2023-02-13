import EventsList from "../components/EventsList";
import { LoaderFunction, json, useLoaderData } from "react-router-dom";
import { Event } from "../components/EventItem";

function EventsPage() {
  const eventsResponse = useLoaderData() as ReturnType<typeof loader>;
  let fetchedEvents: Event[] = [];
  if (isEvents(eventsResponse)) fetchedEvents = eventsResponse.events;

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

export const loader: LoaderFunction = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw json({ message: "Could not fetch events!" }, { status: 500 });
  } else {
    return response;
  }
};
