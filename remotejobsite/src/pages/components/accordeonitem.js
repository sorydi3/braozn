import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Collapse } from "react-collapse";

function AccordeonItem({ title, children, open, toggle }) {
  return (
    <div>
      <div
        className="flex justify-between items-center"
        onClick={() => toggle(!open)}
      >
        <h1 className="text-gray-800 font-extrabold text-center text-4xl ">
          {title}
        </h1>
        {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </div>
      <Collapse isOpened={open}>{children}</Collapse>
    </div>
  );
}

export default AccordeonItem;
