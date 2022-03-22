import styles from "./Movie.module.css";
import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";

const API_BASE_URL = "https://www.omdbapi.com";
const API_KEY = "12423aa9";


export const Movies = (props) => {
  const [movies, setMovies] = useState([]);
  const movieText = "Harry";

  async function getMovies() {
    const response = await fetch(`${API_BASE_URL}?apiKey=${API_KEY}&s=${movieText}&type=movie`);
    const result = await response.json();
    // console.log(result.Search)
    return result.Search;
  }

  useEffect(() => {
    let mounted = true;
    // console.log('nneoma');

    getMovies().then((movies) => {
      if (mounted) {
        setMovies(movies);
        // console.log(movies);
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

 

  return (
    <div className={styles.movieBox}>
      {movies.map((movie, index) => {
        return (
          <div className={styles.box} key={index}>
            <Cards name={movie.Title} imgSrc={movie.Poster} />
          </div>
        );
      })}
    </div>
  );
};
