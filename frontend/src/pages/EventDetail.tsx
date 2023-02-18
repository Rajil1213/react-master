import React from "react";
import {
  ActionFunction,
  LoaderFunction,
  LoaderFunctionArgs,
  json,
  redirect,
  useRouteLoaderData,
} from "react-router-dom";
import EventItem, { Event } from "../components/EventItem";

const EventDetail = () => {
  const event = useRouteLoaderData("event-detail") as ReturnType<
    typeof loader
  > as {
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

export const action: ActionFunction = async ({ request, params }) => {
  const eventId = params.eventId;

  const response = await fetch(`http://localhost:8080/events/${eventId}`, {
    method: request.method,
  });

  if (!response.ok) {
    throw json({ message: "Could not delete event." }, { status: 500 });
  }

  return redirect("/events");
};