import React from "react";
import WordResult from "./WordResult";
import ExtraResults from "./ExtraResults";

export default function Result({ results }) {
  if (results) {
    return (
      <div className="container mt-5">
        <div className="row mb-2">
          <div className="col-8 word-container rounded ">
            <WordResult results={results} />
          </div>
          <ExtraResults results={results} />
        </div>
        <div className="row justify-content-around gap-2">
          <div className="col-sm">image</div>
          <div className="col-sm ">image</div>
          <div className="col-sm">image</div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
