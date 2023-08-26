import React from "react";
import { BrowserRouter } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";

import Nav from "./components/Nav";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Nav />
        <HomeScreen />
      </BrowserRouter>
    </div>
  );
};

export default App;
