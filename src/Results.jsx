import React from "react";
import WordResult from "./WordResult";
import ExtraResults from "./ExtraResults";
import Photos from "./Photos";

export default function Result({ results, photos }) {
  if (results) {
    return (
      <div className="container my-5 container-mainresult">
        <div className="row mb-2">
          <div className="col-8 word-container rounded ">
            <WordResult results={results} />
          </div>
          <ExtraResults results={results} />
        </div>
        <Photos photos={photos} />
      </div>
    );
  } else {
    return null;
  }
}
