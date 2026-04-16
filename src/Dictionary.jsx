import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
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
