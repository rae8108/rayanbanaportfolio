import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import NavBar from "./NavBar";
import CV from "./CV";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/CV" element={CV} />
        </Switch>
      </BrowserRouter>
      <div className="app-container">
        <Header />
        <Home />
      </div>
    </div>
  );
}

export default App;
