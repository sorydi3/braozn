import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import App from "./App";

import reportWebVitals from "./reportWebVitals";
import TherdPage from "./TherdPage";
import SecondPage from "./SecondPage";
import NavBar from "./NavBar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />

    <TherdPage></TherdPage>

    <SecondPage />

    <NavBar />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
