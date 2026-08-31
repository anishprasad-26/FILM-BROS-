import { useEffect, useState } from "react";

const Hero = () => {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
        );

        const data = await response.json();

        setMovies(data.results.slice(0, 7));
      } catch (error) {
        console.error(error);
      }
    };

    getMovies();
  }, []);

  useEffect(() => {
    if (movies.length === 0) return;

    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === movies.length - 1 ? 0 : prevIndex + 1,
        );

        setFade(true);
      }, 500);
    }, 7000);

    return () => clearInterval(interval);
  }, [movies]);

  if (movies.length === 0) {
    return <div>Loading...</div>;
  }

  const movie = movies[currentIndex];

  return (
    <section className={`hero ${fade ? "fade-in" : "fade-out"}`}>
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
  );
};

export default Hero;
