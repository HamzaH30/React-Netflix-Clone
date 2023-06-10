import "./styles/reset.css";
import "./styles/style.css";
import "font-awesome/css/font-awesome.min.css";
import Main from "./components/Main";
import Header from "./components/Header";
import Search from "./components/Search";
import ShowDetails from "./components/ShowDetails";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

const apiKey = process.env.REACT_APP_API_KEY;
const baseURL = "https://api.themoviedb.org/3/";

function App() {
  const [watchList, setWatchList] = useState(
    JSON.parse(localStorage.getItem("watchList")) ?? []
  );

  function handleWatchListToggle(showIDSelected) {
    let copyWatchList = [...watchList];
    const showAlreadyAdded = copyWatchList.includes(showIDSelected);
    console.log(showAlreadyAdded);

    if (showAlreadyAdded) {
      copyWatchList = copyWatchList.filter(
        (showID) => showID !== showIDSelected
      );
    } else {
      copyWatchList.push(showIDSelected);
    }

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
            />
          }
        />
        <Route
          path="/search"
          element={
            <Search
              apiKey={apiKey}
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
              handleWatchListToggle={handleWatchListToggle}
              watchList={watchList}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
