import React from "react";
import PropTypes from "prop-types";


export default function SideBar({ children }) {
  return (
    <div className="sidebar flex flex-col justify-center p-5 font-bold text-2xl text-white bg-pink-600">
        <h1> Side bar content Here!</h1>

        <div className="h-1 rounded-lg w-44 m-auto bg-slate-400"></div>
        <div className="h-1 rounded-lg w-44 m-auto bg-slate-400"></div>
        <div className="h-1 rounded-lg w-44 m-auto bg-slate-400"></div>
        <div className="h-1 rounded-lg w-44 m-auto bg-slate-400"></div>
        <div className="h-1 rounded-lg w-44 m-auto bg-slate-400"></div>

        <div className="h-1 rounded-lg w-44 m-auto bg-slate-400"></div>
        <div className="h-1 rounded-lg w-44 m-auto bg-white"></div>
    </div>
  );
}
