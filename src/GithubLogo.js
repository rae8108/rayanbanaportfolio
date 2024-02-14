import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./GithubLogo.css";

export default function GithubLogo() {
  return (
    <div className="github-logo">
      <a href="https://github.com/rae8108" target="_blank" rel="noreferrer">
        <div>
          <span className="link-icon">
            <FontAwesomeIcon icon={faGithub} />
          </span>
          <span className="link-icon">
            <FontAwesomeIcon icon={faLinkedin} />
          </span>
        </div>
      </a>
    </div>
  );
}
