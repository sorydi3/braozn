import "./App.css";
import { motion } from "framer-motion";
import { useState } from "react";
import Typewriter from "react-ts-typewriter";

let strMainPage =
  "Welcome to our broadband company! We offer fast and reliable internet connections to homes and businesses across Africa.";

function FourthPage() {
  return (
    <div className=" flex-1 flex-shrink-0 bg-hero bg-cover bg-no-repeat h-screen place-items-center ">
      <NavBarr />
    </div>
  );
}

function NavBarr() {
  return (
    <div className="min-h-full">
      <nav className=" opacity-100">
        <NavButtonLogo />
        <Contain />
      </nav>
    </div>
  );
}

function Contain() {
  return (
    <div className="flex flex-col ml-20 mr-20 mt-20 ">
      <h1 className=" text-ellipsis text-3xl text-white font-semibold">
        <Typewriter text={strMainPage} loop="true" />
      </h1>
    </div>
  );
}

function NavButtonLogo() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img
              class="h-8 w-8"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#"
                className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Team
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Projects
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Calendar
              </a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Reports
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FourthPage;
