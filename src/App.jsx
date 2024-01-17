import React from "react";
import Header from "./components/Header";
import Details from "./components/Details";
import "./app.css"

const App = () => {
  return (
    <div className="app">
      <div style={{ flex: 1 }}>
        <Header />
        <Details />
      </div>
      <div className="button-container">
        <button className="left-btn">New</button>
        <button className="left-btn">Insert</button>
        <button className="left-btn">Save</button>
        <button className="left-btn">Print</button>
      </div>
    </div>
  );
};

export default App;
