import Show from "./Show";

export default function TitleList(props) {
  return (
    <div className="titleList">
      <div className="title">
        <h1>{props.heading}</h1>
        <div className="titles-wrapper">
          {props.shows.map((show, index) => {
            return (
              <Show
                showInfo={show}
                key={show.id}
                handleWatchListToggle={props.handleWatchListToggle}
                inWatchList={props.watchList.includes(show.id)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
