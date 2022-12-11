import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className=" flex flex-row bg-sky-200 h-screen place-items-center ">
      <button
        onClick={() => setCount(count + 1)}
        className="bg-green-500  text-white font-bold rounded-2xl py-11 px-11 ml-10 "
      >
        Add..
      </button>
      <h1 className="text-white w-16 text-center ml-10 font-bold bg-slate-400 rounded-2xl">
        {count}
      </h1>
    </div>
  );
}

export default App; 
