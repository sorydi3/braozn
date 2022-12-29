import "./App.css";
import { useState } from "react";
import CustomScroll from "react-custom-scroll";

function SecondPage() {
  const items = ["orange", "apple", "banana", "mango", "grapes"];
  const [fruits, setFruit] = useState(items);

  const handleSubmitFruit = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);

    setFruit([...fruits, data.get("fruit")]);
    console.log(fruits);
  };

  return (
    <div className=" flex flex-row bg-sky-500 h-screen place-items-center ">
      <form onSubmit={handleSubmitFruit}>
        <label htmlFor="fruit" className="text-gray-600 text-lg ml-14">
          Frute Name :
        </label>
        <input
          id="fruit"
          name="fruit"
          type="text"
          className="hover:border-green-300 border-2 ml-10"
        />
        <button className="text-center bg-red-400 hover:bg-red-700 ml-10 rounded-2xl w-40 h-10 hover:text-red-50">
          Submit
        </button>
      </form>

      <ul className="hover:overflow-y-auto h-full">
        <CustomScroll heightRelativeToParent="100%">
          {fruits.map((item) => (
            <li
              className=" grid ml-14 w-60 bg-amber-200 m-5 text-center rounded-xl place-items-center h-20 hover:bg-amber-500"
              key={item}
            >
              {item}
            </li>
          ))}
        </CustomScroll>
      </ul>
    </div>
  );
}

export default SecondPage;
