import { useEffect, useState } from "react";
import TitleList from "./TitleList";
import { useSearchParams, useNavigate } from "react-router-dom";
import Pagination from "./pagination-related-part/Pagination";

export default function Search(props) {
  const [showsData, setShowsData] = useState([]);
  const [searchParams] = useSearchParams();
  const showQuery = searchParams.get("show");
  const navigate = useNavigate();

  // Pagination
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const pageQuery = searchParams.get("page") ?? 1;

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
      setTotalPages(totalPages);
      setCurrentPage(pageQuery);
      setShowsData(data.results);
    };

    fetchShowData();
  }, [showQuery, pageQuery]);

  return (
    <>
      <TitleList
        heading={"Results"}
        shows={showsData}
        handleWatchListToggle={props.handleWatchListToggle}
        watchList={props.watchList}
      />
      <Pagination totalPages={totalPages} currentPage={+currentPage} />
    </>
  );
}
