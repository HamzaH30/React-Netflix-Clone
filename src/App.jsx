import "./styles/reset.css";
import "./styles/style.css";
import Main from "./components/Main";
import Header from "./components/Header";
import Search from "./components/Search";
import { Route, Routes } from "react-router-dom";

const apiKey = process.env.REACT_APP_API_KEY;
const baseURL = "https://api.themoviedb.org/3/";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main baseURL={baseURL} apiKey={apiKey} />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
