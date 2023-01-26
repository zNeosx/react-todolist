import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="mx-auto w-max">
        <div className="flex items-center">
          <img
            className="block h-8 w-auto lg:hidden"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
          />
          <img
            className="hidden h-8 w-auto lg:block"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
          />
          <Link to={"/"} className="ml-2 text-xl text-primary font-medium">
            ToDoList
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
