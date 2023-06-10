import { useEffect, useState } from "react";
import TitleList from "./TitleList";
import { useSearchParams } from "react-router-dom";

export default function Search(props) {
  const [showsData, setShowsData] = useState([]);
  const [searchParams] = useSearchParams();
  const showQuery = searchParams.get("show");

  useEffect(() => {
    const fetchShowData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/tv?api_key=${props.apiKey}&query=${showQuery}`
      );
      const data = await response.json();
      setShowsData(data.results);
    };

    fetchShowData();
  }, [showQuery]);

  return (
    <TitleList
      heading={"Results"}
      shows={showsData}
      handleWatchListToggle={props.handleWatchListToggle}
    />
  );
}
