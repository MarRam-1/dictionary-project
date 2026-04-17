import React, { useState } from "react";
import axios from "axios";

export default function Dictionary({ setResults, setPhotos }) {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    setResults(response.data);
  }

  function handlePexels(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "e439o7e5c26cc43ac0tef7fd04f093b8";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    const pexelApiKey =
      "IoXWJXVFApdQU1jgT2n2Hztb8izQzbUbw4OGKd3yPKPLRxPidOdg59fy";
    let pexelApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=3`;
    let headers = { Authorization: pexelApiKey };
    axios.get(pexelApiUrl, { headers: headers }).then(handlePexels);
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
