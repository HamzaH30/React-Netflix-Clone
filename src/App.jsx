import Main from "./components/Main";

const apiKey = process.env.REACT_APP_API_KEY;
const apiURL = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}`;

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
