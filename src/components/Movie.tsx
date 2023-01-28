import React from "react";

import classes from "./Movie.module.css";
import { Movie as MovieModel } from "../models/Movie";

interface MovieProps extends MovieModel {}

const Movie = ({ title, releaseDate, openingText }: MovieProps) => {
  return (
    <li className={classes.movie}>
      <h2>{title}</h2>
      <h3>{releaseDate}</h3>
      <p>{openingText}</p>
    </li>
  );
};

export default Movie;
