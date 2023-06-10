import { useEffect, useState } from "react";
import TitleList from "./TitleList";

export default function WatchList(props) {
  const [tvShowsSaved, setTvShowsSaved] = useState([]);

  useEffect(() => {
    const getSavedShows = () => {
      const copyTvShows = JSON.parse(JSON.stringify(props.tvShows));
      const tvShowsSaved = [];
      copyTvShows.forEach((providerTvShows) =>
        providerTvShows.forEach((tvShow) => {
          props.watchList.includes(tvShow.id) && tvShowsSaved.push(tvShow);
        })
      );

      return tvShowsSaved;
    };

    setTvShowsSaved(getSavedShows());
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
