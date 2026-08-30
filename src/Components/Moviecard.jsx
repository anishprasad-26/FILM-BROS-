import "./Moviecard.css";
const Moviecard = (props) => {
  return(
  <div className="card-container">
    <img src={props.src}/>

  </div>
  );
};

export default Moviecard;
