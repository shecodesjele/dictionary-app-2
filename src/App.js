/** @format */

import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictiontary</h1>
          <h2>Be smarter</h2>
        </header>
        <main>
          <Dictionary defaultKeyword="beach" />
        </main>
        <footer className="App-footer">
          <small>
            {" "}
            <a
              href="https://github.com/shecodesjele/dictionary-app-2"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>
            , by Jelena
          </small>
        </footer>
      </div>
    </div>
  );
}
