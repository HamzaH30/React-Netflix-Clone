import "./styles/reset.css";
import "./styles/style.css";
import Main from "./components/Main";
import Header from "./components/Header";

const apiKey = process.env.REACT_APP_API_KEY;
const baseURL = "https://api.themoviedb.org/3/";

function App() {
  return (
    <div className="App">
      <Header />
      <Main baseURL={baseURL} apiKey={apiKey} />
    </div>
  );
}

export default App;
