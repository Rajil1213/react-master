import EventsList from "../components/EventsList";
import {
  LoaderFunction,
  defer,
  json,
  useLoaderData,
  Await,
} from "react-router-dom";
import { Event } from "../components/EventItem";
import { Suspense } from "react";

function EventsPage() {
  const { deferredEvents } = useLoaderData() as ReturnType<typeof loader>;

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={deferredEvents}>
        {(loadedEvents) => {
          return <EventsList events={loadedEvents} />;
        }}
      </Await>
    </Suspense>
  );
}

export default EventsPage;

// typeguard for events API
const isEvents = (object: unknown): object is { events: Event[] } => {
  if (object !== null && typeof object === "object") return "events" in object;
  return false;
};

const loadEvents = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw json({ message: "Could not fetch events!" }, { status: 500 });
  } else {
    const resData = await response.json();
    if (isEvents(resData)) return resData.events;
  }
};

export const loader: LoaderFunction = () => {
  return defer({
    deferredEvents: loadEvents(),
  });
};
