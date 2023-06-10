import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ShowDetails(props) {
  const { showID } = useParams();
  const [showInfo, setShowInfo] = useState([]);

  // Get the specific information about this show
  useEffect(() => {
    const fetchShowInfo = async () => {
      const response = await fetch(
        `${props.baseURL}tv/${showID}?api_key=${props.apiKey}`
      );
      const data = await response.json();
      setShowInfo(data);
    };

    fetchShowInfo();
  }, []);

  function getImgSrc() {
    if (showInfo["backdrop_path"] !== undefined) {
      return `https://image.tmdb.org/t/p/original/${showInfo["backdrop_path"]}`;
    }
    return "";
  }

  return (
    <div className="show-details">
      <img src={getImgSrc()} alt="" />
      <div className="show-details-inner">
        <h1>{showInfo.name}</h1>
        <div className="description">{showInfo.overview}</div>
        <button
          className={
            props.watchList.includes(+showID)
              ? "remove-to-watchlist"
              : "add-to-watchlist"
          }
          onClick={() => props.handleWatchListToggle(+showID)}
        >
          {props.watchList.includes(+showID)
            ? "- Remove from watch list"
            : "+ Add to watch list"}
        </button>
      </div>
    </div>
  );
}
