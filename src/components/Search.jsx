import { useEffect, useState } from "react";
import TitleList from "./TitleList";
import { useSearchParams } from "react-router-dom";
import Pagination from "./pagination-related-part/Pagination";

export default function Search(props) {
  const [showsData, setShowsData] = useState([]);
  const [searchParams] = useSearchParams();
  const showQuery = searchParams.get("show");

  // Pagination
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(searchParams.get("page") ?? 1);
  const checkInvalidPageEntered = () => {
    return Math.floor(currentPage) > totalPages;
  };

  // Update the search data shown whenever the user enters in a new search
  useEffect(() => {
    const fetchShowData = async () => {
      // invalidPageEntered = currentPage > totalPages && currentPage > 0;
      if (currentPage > 0 && currentPage < 500) {
        const response = await fetch(
          `${props.baseURL}search/tv?api_key=${
            props.apiKey
          }&query=${showQuery}&page=${+currentPage}`
        );

        const data = await response.json();
        const totalPages = data["total_pages"];
        setTotalPages(totalPages);

        data.results && setShowsData(data.results);
      }
    };

    fetchShowData();
  }, [showQuery, currentPage]);

  return (
    <>
      <TitleList
        heading={"Results"}
        shows={showsData}
        handleWatchListToggle={props.handleWatchListToggle}
        watchList={props.watchList}
      />
      <Pagination
        totalPages={totalPages}
        currentPage={+currentPage}
        setCurrentPage={setCurrentPage}
        showQuery={showQuery}
        searchParams={searchParams}
        invalidPageEntered={
          checkInvalidPageEntered() || currentPage <= 0 || currentPage > 500
        }
      />
    </>
  );
}
