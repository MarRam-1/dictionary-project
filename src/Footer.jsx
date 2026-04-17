import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDisplay } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className="container fixed-bottom footer">
      <div className="row ">
        <div className=" col-12 col-md-6">
          <strong>About this page</strong> <br />
          <em>
            This dictionary app helps users find main definitions, synonyms and
            usage quickly. <br />
            Built with React and API integration.
            <br />
            Open source on{" "}
            <a
              href="https://github.com/MarRam-1/dictionary-project/tree/main"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            .
          </em>
        </div>
        <div className="col-sm">
          <strong>About me</strong>
          <br />
          <em>
            I'm Mariana Ramirez, a junior developer passionate about web
            development.
          </em>
        </div>
        <div className="col-sm ">
          <strong>Find more </strong>
          <br />
          <ul>
            <li>
              <FontAwesomeIcon
                icon={faGithub}
                style={{ color: "rgb(255, 214, 164)" }}
              />{" "}
              <a
                href="https://github.com/MarRam-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ color: "rgb(255, 214, 164)" }}
              />{" "}
              <a
                href="https://www.linkedin.com/in/mariana-ramirez-psicologa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faDisplay}
                style={{ color: "rgb(255, 214, 164)" }}
              />{" "}
              <a
                href="https://portfolio-mariana-ramirez-tech.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Portfolio
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
