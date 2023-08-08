import React from "react";
import ReactDOM from "react-dom";
// import { App } from "./App";

const DashBoard = () => {
  return (
    <React.Fragment>
      <div>DashBoard!</div>
      <div>DashBoard!</div>
    </React.Fragment>
  );
};

if (document.getElementById("dashboard")) {
  const root = ReactDOM.createRoot(document.getElementById("dashboard"));
  root.render(<DashBoard />);
}
