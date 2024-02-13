import React from "react";
import "./Header.css";
import Home from "./Home";
import GithubLogo from "./GithubLogo";

export default function Header() {
  return (
    <div className="header-container">
      <h1 className="header">Rayan Bana</h1>
      <h2 className="header-2"> Front-end Developer</h2>
      <div className="biography-container">
        <div className="biography">
          Hello! I'm Rayan, a passionate junior front-end developer with a
          penchant for creativity. I have a passion that thrives on the endless
          possibilities that web development offers and I'm committed to
          continuously expand my skills and knowledge in this field. As I embark
          on this journey, I am filled with hope and excitement for what the
          future holds.
          <GithubLogo />
        </div>
      </div>
      <Home />
    </div>
  );
}
