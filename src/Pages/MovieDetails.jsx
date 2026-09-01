import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Movie Details Page</h1>
      <h2>Movie ID: {id}</h2>
    </div>
  );
};

export default MovieDetails;