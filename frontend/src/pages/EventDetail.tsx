import React from "react";
import {
  LoaderFunction,
  LoaderFunctionArgs,
  json,
  useLoaderData,
} from "react-router-dom";
import EventItem, { Event } from "../components/EventItem";

const EventDetail = () => {
  const event = useLoaderData() as ReturnType<typeof loader> as {
    event: Event;
  };

  return <EventItem event={event.event} />;
};

export default EventDetail;

export const loader: LoaderFunction = async ({
  params,
}: LoaderFunctionArgs) => {
  const res = await fetch(`http://localhost:8080/events/${params.eventId}`);

  if (!res.ok) {
    throw json(
      { message: `Could not get event with id: ${params.eventId}` },
      { status: 500 }
    );
  }

  return res;
};