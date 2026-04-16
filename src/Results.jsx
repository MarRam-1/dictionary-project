import React from "react";

export default function Result() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8 bg-primary ">Big space</div>
        <div className="col-4 d-flex flex-column ">
          <div className="row1 flex-fill bg-secondary mb-2">small space</div>
          <div className="row2 flex-fill bg-success mb-2">small space</div>
          <div className="row3 flex-fill bg-danger">small space</div>
        </div>
      </div>
    </div>
  );
}
