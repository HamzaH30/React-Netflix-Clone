import { useEffect, useState } from "react";
import Header from "./Header";
import TitleList from "./TitleList";

export default function Main(props) {
  const [tvShows, setTvShows] = useState();

  useEffect(() => {
    const fetchShows = async (watchProviderID) => {
      const response = await fetch(
        `${props.baseURL}discover/tv?api_key=${props.apiKey}&sort_by=popularity.desc&watch_region=CA&with_watch_providers=${watchProviderID}`
      );
      const data = await response.json();
      return data.results;
    };

    const watchProviders = {
      netflix: 8,
      crave: 230,
      disney: 337,
      applePlus: 350,
    };

    const fetchPromises = [];

    for (let watchProvider in watchProviders) {
      fetchPromises.push(fetchShows(watchProviders[watchProvider]));
    }

    Promise.all(fetchPromises).then((showsData) => setTvShows(showsData));
  }, []);

  return (
    <div>
      <Header />
      <TitleList />
    </div>
  );
}
