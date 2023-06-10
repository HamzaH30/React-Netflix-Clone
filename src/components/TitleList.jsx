import Show from "./Show";
import imgNotFound from "../image-not-available.jpg";

export default function TitleList(props) {
  return (
    <div className="titleList">
      <div className="title">
        <h1>{props.heading}</h1>
        <div className="titles-wrapper">
          {props.shows.map((show) => {
            let img = imgNotFound;
            if (show["poster_path"] !== null) {
              img = `https://image.tmdb.org/t/p/w500${show["poster_path"]}`;
            }

            return (
              <Show
                id={show.id}
                poster={img}
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
