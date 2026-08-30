import { useEffect, useState } from "react";

const Hero = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
        );

        const data = await response.json();

        setMovie(data.results[0]);
      } catch (error) {
        console.error(error);
      }
    };

    getMovie();
  }, []);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <section className="hero">
      <img
        className="hero-image"
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
      />
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
      </div>
    </section>
    </>
  );
};

export default Hero;
