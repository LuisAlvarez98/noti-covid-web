import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/About";
import LandingView from "./components/LandingView";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <LandingView />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
