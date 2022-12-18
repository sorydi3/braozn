import "./App.css";
import { motion } from "framer-motion";
import { useState } from "react";

function Main() {
  const [count, setCount] = useState(0);
  return (
    <div className=" flex flex-shrink-0 bg-sky-200 h-screen place-items-center ">
      <motion.div
        className="bg-sky-300 w-1/2 h-1/2 rounded-3xl"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
      />

      <motion.button
        className="bg-sky-900 w-1/5 h-1/5 rounded-3xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      />

      <motion.div
        layout
        className="bg-sky-800 w-1/5 h-1/5 rounded-3xl"
        drag
        dragConstraints={{ left: -100, top: -100, right: 50, bottom: 50 }}
      />
    </div>
  );
}

export default Main;
