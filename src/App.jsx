import "./styles/reset.css";
import "./styles/style.css";
import "font-awesome/css/font-awesome.min.css";
import Main from "./components/Main";
import Header from "./components/Header";
import Search from "./components/Search";
import ShowDetails from "./components/ShowDetails";
import { Route, Routes } from "react-router-dom";

const apiKey = process.env.REACT_APP_API_KEY;
const baseURL = "https://api.themoviedb.org/3/";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main baseURL={baseURL} apiKey={apiKey} />} />
        <Route path="/search" element={<Search apiKey={apiKey} />} />
        <Route
          path="/details/:showID"
          element={<ShowDetails apiKey={apiKey} />}
        />
      </Routes>
    </div>
  );
}

export default App;
