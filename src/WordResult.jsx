import React from "react";

export default function WordResult() {
  return (
    <div className="container py-3">
      <div className="main-result">
        <div className="category">noun</div>
        <div className="searched-word">wordextralarge</div>
        <div className="pronunciation">pro*nun*cia*tion</div>
      </div>
      <div className="meanings mt-3">
        <div className="meaning1">
          <div className="number">#1</div>
          <div className="meaning">
            Meaning yara meaning yara meaning yara yara.
          </div>
        </div>
        <div className="meaning2 mt-3">
          <div className="number">#2</div>
          <div className="meaning">
            Meaning yara meaning yara meaning yara yara.
          </div>
        </div>
      </div>
    </div>
  );
}
