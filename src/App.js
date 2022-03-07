/** @format */

import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Dictionary</h1>
        <h2>Be smarter</h2>
        <Dictionary />
        <footer>
          <a
            href="https://github.com/shecodesjele/dictionary-app-2"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          , by Jelena
        </footer>
      </div>
    </div>
  );
}
