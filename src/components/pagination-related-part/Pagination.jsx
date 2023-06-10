import { useEffect, useState } from "react";
import "./pagination.css";

export default function Pagination(props) {
  const [pages, setPages] = useState([]);
  useEffect(() => {
    const pages = [];
    for (let i = 1; i <= props.totalPages; i++) {
      pages.push(i);
    }
    setPages(pages);
  }, [props.totalPages]);

  return (
    <div className="pagination-container">
      {pages.map((page, index) => {
        return <button key={index}>{page}</button>;
      })}
    </div>
  );
}
