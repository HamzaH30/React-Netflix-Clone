import Show from "./Show";

export default function TitleList(props) {
  return (
    <div className="titleList">
      <div className="title">
        <h1>{props.provider}</h1>
        <div className="titles-wrapper">
          {props.shows.map((show) => {
            return (
              <Show
                id={show.id}
                poster={`https://image.tmdb.org/t/p/w500${show["poster_path"]}`}
                title={show.name}
                rating={show["vote_average"]}
                plot={show.overview}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
