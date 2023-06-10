import { useEffect, useState } from "react";
import TitleList from "./TitleList";
import { useSearchParams } from "react-router-dom";

export default function Search(props) {
  const [showData, setShowData] = useState([]);
  const [searchParams] = useSearchParams();
  const showQuery = searchParams.get("show");

  useEffect(() => {
    const fetchShowData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/tv?api_key=${props.apiKey}&query=${showQuery}`
      );
      const data = await response.json();
      setShowData(data.results);
    };

    fetchShowData();
  }, [showQuery]);

  // return <TitleList />;
}
