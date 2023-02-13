import React from "react";
import EventForm from "../components/EventForm";
import { useRouteLoaderData } from "react-router-dom";
import { loader } from "./EventDetail";
import { Event } from "../components/EventItem";

const EditEvent = () => {
  const data = useRouteLoaderData("event-detail") as ReturnType<
    typeof loader
  > as {
    event: Event;
  };

  return <EventForm event={data.event} />;
};

export default EditEvent;
