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
  const [invalidPageEntered, setInvalidPageEntered] = useState(false);

  // Update the search data shown whenever the user enters in a new search
  useEffect(() => {
    const fetchShowData = async () => {
      if (currentPage > 0) {
        const response = await fetch(
          `${props.baseURL}search/tv?api_key=${
            props.apiKey
          }&query=${showQuery}&page=${+currentPage}`
        );
        const data = await response.json();
        const totalPages = data["total_pages"];
        setTotalPages(totalPages);

        if (currentPage > totalPages) {
          setInvalidPageEntered(true);
        } else {
          setShowsData(data.results);
        }
      } else {
        setInvalidPageEntered(true);
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
        invalidPageEntered={invalidPageEntered}
      />
    </>
  );
}
