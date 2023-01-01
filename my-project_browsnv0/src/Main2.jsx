import React from "react";
import PropTypes from "prop-types";
import MainContent from "./MainContent";
import SideBar from "./SideBar";

export default function Main({ children }) {
  return (
    <div className="main grid grid-cols-[22rem,1fr] min-h-screen min-w-full">
      <SideBar/>
      <MainContent/>
    </div>
  );
}