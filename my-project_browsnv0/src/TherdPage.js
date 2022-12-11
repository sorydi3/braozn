import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

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

function TherdPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  return (
    <form className=" flex flex-row bg-sky-300 h-screen place-items-center ">
      <form>
        <label htmlFor="email" className="text-gray-600 text-lg ml-14">
          Email :
        </label>
        <Input value={email} onChange={setEmail} />
        <label htmlFor="password" className="text-gray-600 text-lg ml-14">
          Password :
        </label>
        <Input value={password} onChange={setPassword} />
        <label htmlFor="name" className="text-gray-600 text-lg ml-14 md:w-2">
          Name :
        </label>
        <Input value={name} onChange={setName} />
        <button className="text-center bg-red-400 hover:bg-red-700 ml-10 rounded-2xl w-40 h-10 hover:text-red-50 mt-10">
          Submit
        </button>
      </form>
    </form>
  );
}

export default TherdPage;
