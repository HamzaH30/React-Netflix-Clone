import { useEffect, useState } from "react";
import TitleList from "./TitleList";

export default function WatchList(props) {
  // Collection of the shows (with all their info) that are in the watch list
  const [tvShowsSaved, setTvShowsSaved] = useState([]);

  // Every time the watch list changes, update the information about the saved shows
  useEffect(() => {
    const fetchShowInfo = async (showID) => {
      const response = await fetch(
        `${props.baseURL}tv/${showID}?api_key=${props.apiKey}`
      );
      const data = await response.json();
      return data;
    };

    Promise.all(props.watchList.map((showID) => fetchShowInfo(showID))).then(
      (data) => setTvShowsSaved(data)
    );
  }, [props.watchList]);

  return (
    <TitleList
      heading={"My Watch List"}
      shows={tvShowsSaved}
      watchList={props.watchList}
      handleWatchListToggle={props.handleWatchListToggle}
    />
  );
}
