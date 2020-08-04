import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <h1>login</h1>
          </Route>
          <Route path="/cart">
            <Header />
            <Cart />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
