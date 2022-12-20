import "./App.css";
import { useState } from "react";
import CustomScroll from "react-custom-scroll";

function Input({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="hover:border-green-300 border-2 ml-10"
    />
  );
}

function FithPage() {
  const items = ["orange", "apple", "banana", "mango", "grapes"];
  const [fruits, setFruit] = useState(items);

  const [dni, setDni] = useState("");
  const [name, setName] = useState("");

  const handleSubmitFruit = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    setFruit([...fruits, data.get("fruit")]);
    console.log(fruits);
  };

  return (
    <div className=" flex flex-row bg-sky-500 h-1000 place-items-center ">
      <div className="shadow m-8 h-screen w-full bg-white rounded-md">
        <form onSubmit={handleSubmitFruit} className="">
          <button className="text-center bg-red-400 hover:bg-red-700 ml-10 rounded-3xl w-40 h-10 hover:text-red-50">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default FithPage;
