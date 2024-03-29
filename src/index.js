import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import PortfolioButtons from "./PortolioButtons";
import Dictionary from "./Dictionary";
import WorldClock from "./WorldClock";
import Sanchez from "./Sanchez";
import Bratz from "./Bratz";
import Quotes from "./Quotes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />

    <PortfolioButtons />
    <Dictionary />
    <WorldClock />
    <Sanchez />
    <Bratz />
    <Quotes />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
