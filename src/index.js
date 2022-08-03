import ReactDOM from "react-dom";
import "./index.css";
import React from "react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "animate.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
