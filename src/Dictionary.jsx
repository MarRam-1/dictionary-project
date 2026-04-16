import React from "react";

export default function Dictionary() {
  return (
    <form className="form-inline ">
      <label className="sr-only " for="inlineFormInputName2">
        Name
      </label>
      <input
        type="text"
        className="form-control form-control-lg mr-sm-2 "
        id="inlineFormInputName2"
        placeholder="Enter a word"
      ></input>
      <button type="submit" className="btn ">
        <span className="material-symbols-outlined">search</span>
      </button>
    </form>
  );
}
