import React from "react";
import EventForm from "../components/EventForm";
import { ActionFunction, json, redirect } from "react-router-dom";

const NewEvent = () => {
  return <EventForm />;
};

export default NewEvent;

export const action: ActionFunction = async ({ request }) => {
  const data = await request.formData();

  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  const res = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  if (!res.ok) {
    throw json({ message: "Could not save event." }, { status: 500 });
  }

  return redirect("/events");
};