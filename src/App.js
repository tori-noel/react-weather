import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather />
        <footer>
          Coded by Tori Ernst and{" "}
          <a
            href="https://github.com/tori-noel/react-weather"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Open Sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
