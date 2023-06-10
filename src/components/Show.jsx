import { Link } from "react-router-dom";
import imgNotFound from "../image-not-available.jpg";

export default function Show(props) {
  function getImgSrc() {
    let img = imgNotFound;
    if (props.showInfo["poster_path"] !== null) {
      img = `https://image.tmdb.org/t/p/w500${props.showInfo["poster_path"]}`;
    }
    return img;
  }

  return (
    <div className="movie">
      <Link to={`/details/${props.showInfo.id}`}>
        <img src={getImgSrc()} alt="Movie poster" />
        <div className="overlay">
          <div className="title">{props.showInfo.name}</div>
          <div className="rating">{props.showInfo["vote_average"]}/10</div>
          <div className="plot">{props.showInfo.overview}</div>
        </div>
      </Link>
      <div data-toggled="false" className="listToggle">
        <div onClick={() => props.handleWatchListToggle(props.showInfo.id)}>
          <i className="fa fa-fw fa-plus"></i>
          <i className="fa fa-fw fa-check"></i>
        </div>
      </div>
    </div>
  );
}
