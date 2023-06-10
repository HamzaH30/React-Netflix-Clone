import { useEffect, useState } from "react";
import TitleList from "./TitleList";

export default function Main(props) {
  const [tvShows, setTvShows] = useState([]);
  const watchProviders = {
    Netflix: 8,
    Crave: 230,
    Disney: 337,
    "Apple Plus": 350,
  };

  useEffect(() => {
    const fetchShows = async (watchProviderID) => {
      const response = await fetch(
        `${props.baseURL}discover/tv?api_key=${props.apiKey}&sort_by=popularity.desc&watch_region=CA&with_watch_providers=${watchProviderID}`
      );
      const data = await response.json();
      return data.results;
    };

    const fetchPromises = [];

    for (let watchProvider in watchProviders) {
      fetchPromises.push(fetchShows(watchProviders[watchProvider]));
    }

    Promise.all(fetchPromises).then((showsData) => setTvShows(showsData));
  }, []);

  return (
    <>
      {tvShows.map((providerTvShows, index) => {
        const provider = Object.keys(watchProviders)[index];
        return (
          <TitleList
            shows={providerTvShows}
            heading={provider}
            key={index}
            handleWatchListToggle={props.handleWatchListToggle}
          />
        );
      })}
    </>
  );
}
