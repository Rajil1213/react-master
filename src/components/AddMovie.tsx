import React, { SyntheticEvent, useRef } from "react";

import classes from "./AddMovie.module.css";
import { Movie as MovieModel } from "../models/Movie";

interface AddMovieProps {
  onAddMovie: (movie: MovieModel) => void;
}

function AddMovie(props: AddMovieProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const openingTextRef = useRef<HTMLTextAreaElement>(null);
  const releaseDateRef = useRef<HTMLInputElement>(null);

  function submitHandler(event: SyntheticEvent) {
    event.preventDefault();

    // could add validation here...

    const movie = {
      title: (titleRef.current as HTMLInputElement).value,
      openingText:
        (openingTextRef.current as HTMLTextAreaElement).value.toString() || "",
      releaseDate: (releaseDateRef.current as HTMLInputElement).value,
    };

    props.onAddMovie(movie);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          ref={titleRef}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="opening-text">Opening Text</label>
        <textarea
          rows={5}
          id="opening-text"
          ref={openingTextRef}
        ></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor="date">Release Date</label>
        <input
          type="text"
          id="date"
          ref={releaseDateRef}
        />
      </div>
      <button>Add Movie</button>
    </form>
  );
}

export default AddMovie;
