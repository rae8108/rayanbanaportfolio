import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./GithubLogo.css";

export default function GithubLogo() {
  return (
    <div className="github-logo">
      <a href="https://github.com/rae8108" target="_blank" rel="noreferrer">
        <span>
          <FontAwesomeIcon icon={faGithub} />
        </span>
      </a>
    </div>
  );
}
