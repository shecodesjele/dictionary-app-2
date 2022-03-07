/** @format */
import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [word, setWord] = useState("");
  let [results, setResults] = useState("");

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleChangeWord(event) {
    setWord(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form type="search" onSubmit={search}>
        <input type="search" onChange={handleChangeWord} />
      </form>
      <Results results={results} />
    </div>
  );
}
