import {
  Form,
  useNavigate,
  useNavigation,
  ActionFunction,
  redirect,
  json,
} from "react-router-dom";

import classes from "./EventForm.module.css";
import { Event } from "./EventItem";

type EventFormProps = {
  method?: "patch" | "post";
  event?: Event;
};

const EventForm = ({ method, event }: EventFormProps) => {
  const navigate = useNavigate();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  function cancelHandler() {
    navigate("..");
  }

  return (
    <Form
      method={method || "post"}
      className={classes.form}
    >
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          defaultValue={event && event.title}
          required
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          defaultValue={event && event.image}
          required
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          defaultValue={event && event.date}
          required
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows={5}
          defaultValue={event && event.description}
          required
        />
      </p>
      <div className={classes.actions}>
        <button
          type="button"
          onClick={cancelHandler}
        >
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? "Submitting" : "Save"}
        </button>
      </div>
    </Form>
  );
};

export default EventForm;

export const action: ActionFunction = async ({ request, params }) => {
  const data = await request.formData();
  const method = request.method;

  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  let url = "http://localhost:8080/events";

  if (method === "PATCH") {
    const eventId = params.eventId;
    url += `/${eventId}`;
  }

  const res = await fetch(url, {
    method: method,
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
