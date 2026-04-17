import React, { useState } from "react";
import axios from "axios";

export default function Dictionary({ setResults }) {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "e439o7e5c26cc43ac0tef7fd04f093b8";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <form onSubmit={search} className="form-inline ">
      <input
        type="search"
        id="DictionaryForm"
        className="form-control form-control-lg mr-sm-2 "
        placeholder="Enter a word"
        onChange={handleKeywordChange}
      ></input>
      <button type="submit" className="btn ">
        <span className="material-symbols-outlined">search</span>
      </button>
    </form>
  );
}
