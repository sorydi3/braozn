import "./App.css";
import { motion } from "framer-motion";
import { useState } from "react";

function Main() {
  const [count, setCount] = useState(0);
  return (
    <div className=" flex flex-row bg-sky-200 h-screen place-items-center ">
      <motion.div
        className="bg-sky-300 w-1/2 h-1/2 rounded-3xl"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
      />
    </div>
  );
}

export default Main;
