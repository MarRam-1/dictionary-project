import React from "react";

export default function ExtraResults({ results }) {
  if (!results) return null;

  const meaning0 = results.meanings?.[0];
  const meaning1 = results.meanings?.[1];

  const synonym1 = meaning0?.synonyms?.[0];
  const synonym2 = meaning1?.synonyms?.[0] ?? meaning0?.synonyms?.[1];

  const example = meaning0?.example;

  return (
    <div className="col-12 col-md-4 d-flex flex-column extra-resultscontainer pr-0 ">
      <div className="flex-fill synonyms-container rounded mb-2 pl-2 d-flex flex-column justify-content-center">
        <div className="container ">
          <div className="extra-title font-weight-bold">Synonyms</div>
          <div className="row justify-content-around m-1 synonym-list">
            {synonym1 || synonym2 ? (
              <>
                {synonym1 && (
                  <div className="col-sm rounded mr-2 extra-content bg2">
                    {synonym1}
                  </div>
                )}
                {synonym2 && (
                  <div className="col-sm rounded mr-2 extra-content bg2">
                    {synonym2}
                  </div>
                )}
              </>
            ) : (
              <div className="col-sm rounded mr-2 extra-content bg2">
                No synonyms found.
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex-fill utilities-container rounded mb-2 pl-2 d-flex flex-column justify-content-center">
        <div className="container">
          <div className="extra-title font-weight-bold">Usage</div>
          <div className="row justify-content-around m-1">
            <div className="col-sm rounded mr-2 extra-content bg3">
              {example
                ? example.charAt(0).toUpperCase() + example.slice(1) + "."
                : "No usage found."}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
