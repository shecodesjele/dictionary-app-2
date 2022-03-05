/** @format */
import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Govno je ${word}`);
  }

  function handleChangeWord(event) {
    setWord(event.target.value);
  }
  return (
    <form type="search" onSubmit={search}>
      <input type="search" onChange={handleChangeWord} />
    </form>
  );
}
