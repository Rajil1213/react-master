import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

import { Movie as MovieModel } from "./models/Movie";
import AddMovie from "./components/AddMovie";

const App = () => {
  const [movies, setMovies] = useState<MovieModel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);

  const fetchMovieHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch(
        "https://learn-react-57b3c-default-rtdb.firebaseio.com/movies.json"
      );
      if (!res.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await res.json();
      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }
      const transformedMovies = loadedMovies.map((movieData: any) => {
        return {
          id: movieData.id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
      setIsLoading(false);
    } catch (err: any) {
      setError(err.message);
    }
  }, []);

  useEffect(() => {
    fetchMovieHandler();
  }, [fetchMovieHandler]);

  const addMovieHandler = async (movie: MovieModel) => {
    const res = await fetch(
      "https://learn-react-57b3c-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = res.json();
    console.log(data);
  };

  // default content at start; data not being fetched and there are no movies
  let content = <p>Found no movies</p>;

  // if data has been fetched successfully
  if (!isLoading && movies && movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  // if data is being fetchd and encountered an error
  if (isLoading && error) {
    content = <p>{error}</p>;
  }

  // if data is being fetched and no error has been encountered
  if (isLoading && !error) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
};

export default App;
