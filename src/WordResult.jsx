import React from "react";

export default function WordResult({ results }) {
  if (!results) return null;

  const definition = results.meanings?.[0]?.definition;

  return (
    <div className="container py-3">
      <div className="main-result">
        <div className="category">noun</div>
        <div className="searched-word">{results.word}</div>
        <div className="pronunciation">{results.phonetic}</div>
      </div>
      <div className="meanings mt-3">
        <div className="meaning1">
          <div className="number">
            <span className="material-symbols-outlined">search_check</span>
          </div>
          <div className="meaning">
            {definition
              ? definition.charAt(0).toUpperCase() + definition.slice(1) + "."
              : "No definition found."}
          </div>
        </div>
      </div>
    </div>
  );
}
