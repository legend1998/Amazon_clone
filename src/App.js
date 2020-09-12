import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Basket from "./components/Basket";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/basket">
            <Basket />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
