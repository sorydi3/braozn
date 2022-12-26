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
import Contact from "./Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AppCardmentor />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*
 <React.StrictMode>
      <NavBar />
      <Contact />
      <App />
      <TherdPage></TherdPage>
      <SecondPage />
      <Main></Main>
      <FourthPage />
      <FithPage />
      <Sistth />
  </React.StrictMode>
**/

function AppCardmentor() {
  return (
    <div className="background">
      <CardMentor />
      <CardMentor />
      <CardMentor />
      <CardMentor />
      <CardMentor />
      <CardMentor />
    </div>
  );
}

function CardMentor() {
  return (
    <div className="card">
      <div className="bg-yellow-300 basis-60"></div>
      <div className="flex flex-col  flex-grow m-8  justify-between">
        <h1 className="text-2xl">
          This is an example of using flexbox within flexbox. The whole card is
          a flex container with with image occupying 40%.
        </h1>
        <p className="my-2">
          Following the mobile-first approach, make this component responsive,
          by setting the outer flex container's direction to column and for
          larger screens, change it to row.
        </p>

        <div className="flex items-center ">
          <div className="avatar w-14 h-14 bg-slate-600 rounded-full flex-shrink-0"></div>

          <div className="flex flex-col ml-4">
            <p className="name font-bold">Ibrahima Sory</p>
            <div className="">12/02/2023</div>
          </div>

          <img
            className="w-6 h-6 ml-auto flex-shrink-0"
            src="https://img.icons8.com/ios/50/000000/like--v1.png"
          />
        </div>
      </div>
    </div>
  );
}
