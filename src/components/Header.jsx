import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [inputValue, setInputValue] = useState("");
  const [showToSearch, setShowToSearch] = useState("");

  function handleInputChange(newText) {
    setInputValue(newText);
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    setShowToSearch(inputValue);
  }

  return (
    <header className="header">
      <Link to="/">
        <img
          src="https://fontmeme.com/permalink/190707/fd4735271a0d997cbe19a04408c896fc.png"
          alt="netflix-font"
          border="0"
        />
      </Link>
      <div id="navigation" className="navigation">
        <nav>
          <ul>
            <li>
              <Link to="/my-watch-list">Watch List</Link>
            </li>
          </ul>
        </nav>
      </div>
      <form id="search" className="search" onSubmit={handleFormSubmission}>
        <input
          type="search"
          placeholder="Search for a title..."
          value={inputValue}
          onChange={(event) => handleInputChange(event.target.value)}
        />
        <div className="searchResults"></div>
      </form>
    </header>
  );
}
