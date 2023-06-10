import { useEffect, useState } from "react";
import TitleList from "./TitleList";
import { useSearchParams, useNavigate } from "react-router-dom";

export default function Search(props) {
  const [showsData, setShowsData] = useState([]);
  const [searchParams] = useSearchParams();
  const showQuery = searchParams.get("show");
  const pageQuery = searchParams.get("page") ?? 1;
  const navigate = useNavigate();

  // Update the search data shown whenever the user enters in a new search
  useEffect(() => {
    const fetchShowData = async () => {
      const response = await fetch(
        `${props.baseURL}search/tv?api_key=${
          props.apiKey
        }&query=${showQuery}&page=${+pageQuery}`
      );
      const data = await response.json();
      const totalPages = data["total_pages"];
      props.setTotalPages(totalPages);

      if (pageQuery <= totalPages) {
        setShowsData(data.results);
      } else {
        // TODO: Navigate to something like a 404 page, where you inform user that they have exceeded pages
        console.log(pageQuery);
        navigate(`/invalid-page`);
      }
    };

    fetchShowData();
  }, [showQuery]);

  return (
    <TitleList
      heading={"Results"}
      shows={showsData}
      handleWatchListToggle={props.handleWatchListToggle}
      watchList={props.watchList}
    />
  );
}
