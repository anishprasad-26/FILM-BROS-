import { useNavigate } from "react-router-dom";
import "./Moviecard.css";

const Moviecard = (props) => {
  const navigate = useNavigate();

  return (
    <div
      className="card-container"
      onClick={() => navigate(`/movie/${props.id}`)}
    >
      <img src={props.src} />
    </div>
  );
};

export default Moviecard;