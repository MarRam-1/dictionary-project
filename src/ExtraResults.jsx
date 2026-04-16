import React from "react";

export default function ExtraResults() {
  return (
    <div className="col-4 d-flex flex-column ">
      <div className="row1 flex-fill synonyms-container mb-2 pl-2 rounded">
        <div className="extra-title font-weight-bold">Yara Sub</div>
        <div className="container">
          <div className="row justify-content-around m-1 ">
            <div className="col-sm rounded mr-2 extra-content bg1">col-sm</div>
            <div className="col-sm rounded mr-2 extra-content bg1">col-sm</div>
            <div className="col-sm rounded extra-content bg1">col-sm</div>
          </div>
          <div className="row justify-content-around m-1 ">
            <div className="col-sm rounded mr-2 extra-content bg1">col-sm</div>
            <div className="col-sm rounded mr-2 extra-content bg1">col-sm</div>
            <div className="col-sm rounded extra-content bg1">col-sm</div>
          </div>
        </div>
      </div>
      <div className="row2 flex-fill antonyms-container rounded mb-2 pl-2">
        <div className="extra-title font-weight-bold">Yara Sub</div>
        <div className="container">
          <div className="row justify-content-around m-1 ">
            <div className="col-sm rounded mr-2 extra-content bg2">col-sm</div>
            <div className="col-sm rounded mr-2 extra-content bg2">col-sm</div>
            <div className="col-sm rounded extra-content bg2">col-sm</div>
          </div>
          <div className="row justify-content-around m-1 ">
            <div className="col-sm rounded mr-2 extra-content bg2">col-sm</div>
            <div className="col-sm rounded mr-2 extra-content bg2">col-sm</div>
            <div className="col-sm rounded extra-content bg2">col-sm</div>
          </div>
        </div>
      </div>
      <div className="row3 flex-fill utilities-container rounded pl-2">
        <div className="extra-title font-weight-bold">Yara Sub</div>
        <div className="container">
          <div className="row justify-content-around m-1 ">
            <div className="col-sm rounded mr-2 extra-content bg3">
              Col-sm sentence, yara raya.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
