export default function Show(props) {
  return (
    <div className="movie">
      <a href={`/details/${props.id}`}>
        <img src={props.poster} alt="Movie poster" />
        <div className="overlay">
          <div className="title">{props.title}</div>
          <div className="rating">{props.rating}/10</div>
          <div className="plot">{props.plot}</div>
        </div>
      </a>
      <div data-toggled="false" className="listToggle">
        <div>
          <i className="fa fa-fw fa-plus"></i>
          <i className="fa fa-fw fa-check"></i>
        </div>
      </div>
    </div>
  );
}
