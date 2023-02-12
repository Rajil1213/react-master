import classes from "./EventItem.module.css";

export type Event = {
  id: string;
  image: string;
  title: string;
  date: string;
  description: string;
};

function EventItem(event: Event) {
  function startDeleteHandler() {
    // ...
  }

  return (
    <article className={classes.event}>
      <img
        src={event.image}
        alt={event.title}
      />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <a href="edit">Edit</a>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
