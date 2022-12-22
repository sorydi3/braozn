import React from "react";
import ReactDom from "react-dom";

const element = React.createElement("h1", null, "Hello World");

ReactDom.render(element, document.getElementById("root"));
