import React from "react";
import { Event } from "./EventItem";
import { Link } from "react-router-dom";

const dummyEvents: Event[] = [
  {
    id: "e1",
    image: "",
    date: new Date().toLocaleDateString(),
    description: "",
    title: "Event 1",
  },
  {
    id: "e2",
    image: "",
    date: new Date().toLocaleDateString(),
    description: "",
    title: "Event 2",
  },
  {
    id: "e3",
    image: "",
    date: new Date().toLocaleDateString(),
    description: "",
    title: "Event 3",
  },
  {
    id: "e4",
    image: "",
    date: new Date().toLocaleDateString(),
    description: "",
    title: "Event 4",
  },
  {
    id: "e5",
    image: "",
    date: new Date().toLocaleDateString(),
    description: "",
    title: "Event 5",
  },
  {
    id: "e6",
    image: "",
    date: new Date().toLocaleDateString(),
    description: "",
    title: "Event 6",
  },
];

const Events = () => {
  return (
    <ul>
      {dummyEvents.map((event) => {
        return (
          <li key={event.id}>
            <Link to={`/events/${event.id}`}>{event.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Events;
