import React from "react";
import { BiSearch } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="min-h-[12vh] bg-white flex items-center justify-center">
      <div className="container flex items-center justify-between">
        <Link to="/" className="font-bold text-xl text-gray-700">
          SecqurAlse
        </Link>
        <div className="flex items-center justify-between gap-4">
          <button>
            <BiSearch />
          </button>

          <p className="h-10 w-10 bg-gray-100 rounded-full text-gray-800 flex items-center justify-center text-sm">
            25
          </p>
          <p className="h-10 w-10 bg-gray-100 rounded-full text-gray-800 flex items-center justify-center text-sm">
            25
          </p>

          <Link
            to="/create"
            className="h-10 w-10 bg-gray-100 rounded-full text-gray-800 flex items-center justify-center text-sm"
          >
            <BsPlusLg />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
