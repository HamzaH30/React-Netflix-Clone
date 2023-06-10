import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ShowDetails(props) {
  const { showID } = useParams();
  const [showInfo, setShowInfo] = useState([]);

  useEffect(() => {
    const fetchShowInfo = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${showID}?api_key=${props.apiKey}`
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
        <button className="add-to-watchlist">+ Add to watch list</button>
      </div>
    </div>
  );
}
