import { useState, useEffect } from "react";
import Moviecard from "./Moviecard";

const Tvrow = (props) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/tv/${props.category}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
        );

        const data = await response.json();
        console.log(data.results);

        setMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    getMovies();
  }, []);
  return (
    <div>
      <h2 className="list-heading">{props.title}</h2>
      <ul className="movielist">
        {movies.map((movie,idx)=>{
          return <li key={idx}><Moviecard src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/></li>
        })}
        
      </ul>
    </div>
  );
};

export default Tvrow;
