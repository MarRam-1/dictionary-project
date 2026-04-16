import React from "react";

export default function Footer() {
  return (
    <div className="footer container fixed-bottom ">
      <div className="row">
        <div className="col-sm">
          <strong>About this page</strong> <br />
          This dictionary app helps users find definitions, synonyms and
          antonyms quickly. <br />
          Built with React and API integration.
          <br />
          Open source on <a href="/">GitHub</a>
        </div>
        <div className="col-sm">
          <strong>About me</strong>
          <br />
          I'm Mariana Ramirez, a junior developer passionate about web
          development.
          <br />
        </div>
        <div className="col-sm">
          <strong>Find more in</strong>
          <br />
          <ul>
            <li>GitHub</li>
            <li>LinkedIn</li>
            <li>Portfolio</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
