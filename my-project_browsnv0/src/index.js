import "./index.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./NavBar";
import SecondPage from "./SecondPage";
import TherdPage from "./TherdPage";
import reportWebVitals from "./reportWebVitals";
import Main from "./main";
import FourthPage from "./FourthPage";
import FithPage from "./FithPage";
import Sistth from "./Sistth";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <FithPage />
    <Sistth />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*
<NavBar />
    <App />
    <TherdPage></TherdPage>
    <SecondPage />
    <Main></Main>
    <FourthPage />
**/
