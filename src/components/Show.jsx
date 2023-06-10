import { Link } from "react-router-dom";

export default function Show(props) {
  return (
    <div className="movie">
      <Link to={`/details/${props.id}`}>
        <img src={props.poster} alt="Movie poster" />
        <div className="overlay">
          <div className="title">{props.title}</div>
          <div className="rating">{props.rating}/10</div>
          <div className="plot">{props.plot}</div>
        </div>
      </Link>
      <div data-toggled="false" className="listToggle">
        <div>
          <i className="fa fa-fw fa-plus"></i>
          <i className="fa fa-fw fa-check"></i>
        </div>
      </div>
    </div>
  );
}
