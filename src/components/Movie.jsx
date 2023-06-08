export default function Movie(props) {
  return (
    <div className="movie">
      <a href="/details/1668">
        <img
          src="https://image.tmdb.org/t/p/w500/f496cm9enuEsZkSPzCwnTESEK5s.jpg"
          alt="Movie poster"
        />
        <div className="overlay">
          <div className="title">{props.movieTitle}</div>
          <div className="rating">{props.movieRating}/10</div>
          <div className="plot">{props.moviePlot}</div>
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
