import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  return(
    <div>
      <h1>Movie details page...</h1>
    </div>
  );
 
};

export default MovieDetails;