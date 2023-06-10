import { useEffect, useState } from "react";
import "./pagination.css";
import { useNavigate } from "react-router-dom";

// TODO: NEED TO ASK ABOUT CSS MODULES!! Not exactly sure if I have met that requirement

export default function Pagination(props) {
  const [pages, setPages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const pages = [];
    for (let i = 1; i <= props.totalPages; i++) {
      pages.push(i);
    }
    setPages(pages);
  }, [props.totalPages]);

  function handleNavigationClick(pageOffset) {
    const newPage = props.currentPage + pageOffset;
    props.searchParams.set("page", newPage);
    props.setCurrentPage(newPage);

    // Show change in URL
    navigate(`/search?show=${props.showQuery}&page=${newPage}`);
  }

  return (
    <>
      {props.invalidPageEntered ? (
        <>
          <p>Invalid Page Entered!</p>
          {props.totalPages === 1 ? (
            <p>There is only 1 page. Please only enter page 1.</p>
          ) : (
            <p>Pages must be between 1 - {props.totalPages}.</p>
          )}
        </>
      ) : (
        <div className="pagination-container">
          {props.totalPages > 1 && props.currentPage > 1 && (
            <button
              className="navigate-pages"
              onClick={() => handleNavigationClick(-1)}
            >
              Previous Page
            </button>
          )}
          {props.totalPages > 1 && (
            <div className="buttons">
              {pages.map((page, index) => {
                return (
                  <button
                    className="page-btn"
                    onClick={() => {
                      props.setCurrentPage(page);
                      props.searchParams.set("page", page);
                      navigate(`/search?show=${props.showQuery}&page=${page}`);
                    }}
                    key={index}
                  >
                    {page}
                  </button>
                );
              })}
            </div>
          )}
          {props.currentPage < props.totalPages ? (
            <button
              className="navigate-pages"
              onClick={() => handleNavigationClick(1)}
            >
              Next Page
            </button>
          ) : (
            <p>End of Results!</p>
          )}
        </div>
      )}
    </>
  );
}
