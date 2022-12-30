import React from "react";
import PropTypes from "prop-types";

export default function MainContent({ children }) {
  return (
    <div className="sidebar flex flex-col justify-center p-5 font-bold text-2xl text-white">
        <h1 className="text-black m-auto"> Main content here!</h1>

        <div className="h-1 rounded-lg w-60 m-auto bg-slate-400"></div>
        <div className="h-1 rounded-lg w-60 m-auto bg-slate-400"></div>
        <div className="h-1 rounded-lg w-60 m-auto bg-slate-400"></div>
        <div className="h-1 rounded-lg w-60 m-auto bg-slate-400"></div>
        <div className="h-1 rounded-lg w-60 m-auto bg-slate-400"></div>

        <div className="h-1 rounded-lg w-60 m-auto bg-slate-400"></div>
        <div className="h-1 rounded-lg w-60 m-auto bg-slate-400"></div>
    </div>
  );
}