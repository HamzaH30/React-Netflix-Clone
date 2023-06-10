import "./styles/reset.css";
import "./styles/style.css";
import "font-awesome/css/font-awesome.min.css";
import Main from "./components/Main";
import Header from "./components/Header";
import Search from "./components/Search";
import ShowDetails from "./components/ShowDetails";
import WatchList from "./components/WatchList";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

// Using environment variables for the api key
const apiKey = process.env.REACT_APP_API_KEY;
const baseURL = "https://api.themoviedb.org/3/";

function App() {
  // Includes all the tv shows from each provider.
  const [tvShows, setTvShows] = useState([]);
  const [watchList, setWatchList] = useState(
    JSON.parse(localStorage.getItem("watchList")) ?? []
  );

  /**
   * This function will add or remove a show from the watch list.
   */
  function handleWatchListToggle(showIDSelected) {
    let copyWatchList = [...watchList];
    const showAlreadyAdded = copyWatchList.includes(showIDSelected);

    if (showAlreadyAdded) {
      // Remove from watch list
      copyWatchList = copyWatchList.filter(
        (showID) => showID !== showIDSelected
      );
    } else {
      // Add to watch list
      copyWatchList.push(showIDSelected);
    }

    // Update useState & persist local storage
    setWatchList(copyWatchList);
    localStorage.setItem("watchList", JSON.stringify(copyWatchList));
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Main
              baseURL={baseURL}
              apiKey={apiKey}
              handleWatchListToggle={handleWatchListToggle}
              watchList={watchList}
              tvShows={tvShows}
              setTvShows={setTvShows}
            />
          }
        />
        <Route
          path="/search"
          element={
            <Search
              apiKey={apiKey}
              baseURL={baseURL}
              handleWatchListToggle={handleWatchListToggle}
              watchList={watchList}
            />
          }
        />
        <Route
          path="/details/:showID"
          element={
            <ShowDetails
              apiKey={apiKey}
              baseURL={baseURL}
              handleWatchListToggle={handleWatchListToggle}
              watchList={watchList}
            />
          }
        />
        <Route
          path="/my-watch-list"
          element={
            <WatchList
              watchList={watchList}
              tvShows={tvShows}
              apiKey={apiKey}
              baseURL={baseURL}
              handleWatchListToggle={handleWatchListToggle}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
