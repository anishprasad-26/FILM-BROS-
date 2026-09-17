import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MovieDetails.css";

const MovieDetails = () => {
  const { type, id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/${type}/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
        );

        const data = await response.json();

        setMovie(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMovieDetails();
  }, [type, id]);

  if (!movie) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <div className="hero-bg">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title || movie.name}
        />

        <div className="hero-overlay2"></div>

        <div className="details-hero-content">
          <h1>{movie.title || movie.name}</h1>

          <div className="movie-meta">
            <span>⭐ {movie.vote_average.toFixed(1)}</span>

            <span>
              {(movie.release_date || movie.first_air_date)?.split("-")[0]}
            </span>

            <span>
              ⏱️{" "}
              {movie.runtime
                ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m`
                : "N/A"}
            </span>
          </div>

          <div className="movie-genres">
            {movie.genres?.map((genre) => (
              <span key={genre.id}>{genre.name}</span>
            ))}
          </div>

          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
