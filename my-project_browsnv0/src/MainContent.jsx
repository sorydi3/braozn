import React from "react";
import PropTypes from "prop-types";

import CenteringLogos from "./CenterLogos";

export default function MainContent({ children }) {
  return (
    <div className="sidebar flex flex-col justify-center p-5 font-bold text-2xl text-white">
        <CenteringLogos/>
    </div>
  );
}