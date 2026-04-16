import React from "react";
import WordResult from "./WordResult";
import ExtraResults from "./ExtraResults";

export default function Result() {
  return (
    <div className="container mt-5">
      <div className="row mb-2">
        <div className="col-8 word-container rounded ">
          <WordResult />
        </div>
        <ExtraResults />
      </div>
      <div className="row justify-content-around gap-2">
        <div className="col-sm">image</div>
        <div className="col-sm ">image</div>
        <div className="col-sm">image</div>
      </div>
    </div>
  );
}
