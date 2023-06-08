import Header from "./components/Header";
import { Route, Routes, Link, NavLink } from "react-router-dom";

// const apiExample = process.env;
// console.log(apiExample);

function App() {
  return (
    <div className="App">
      <Routes>
        {/* TODO: My Watch List is a child of Header */}
        <Route path="/" element={<Header />} />
        <Route path="/my-watch-list" element={<Header />} />
      </Routes>
    </div>
  );
}

export default App;
