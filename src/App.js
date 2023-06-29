import "./App.css";
import GitHubLink from "./GitHubLink";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather />
        <footer>
          <GitHubLink />
        </footer>
      </div>
    </div>
  );
}

export default App;
