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
                key={index}
                handleWatchListToggle={props.handleWatchListToggle}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
