import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className=" menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li tabIndex={0}>
              <a>Home</a>
            </li>
            <li tabIndex={0}>
              <a>Service</a>
            </li>
            <li tabIndex={0}>
              <a>About</a>
            </li>
            <li tabIndex={0}>
              <a>About</a>
            </li>
            <button className="btn btn-outline btn-primary">Join</button>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl text-center">
          DevhiveClient
        </a>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 menu-right">
          <li tabIndex={0}>
            <a>Home</a>
          </li>
          <li tabIndex={0}>
            <a>Service</a>
          </li>
          <li tabIndex={0}>
            <a>Contact</a>
          </li>
          <li tabIndex={0}>
            <a>About</a>
          </li>
          <button className="btn btn-outline btn-primary ml-3">Join</button>
        </ul>
      </div>
      {/* <div className="navbar-end">
        <button className="btn btn-outline btn-primary">Button</button>
      </div> */}
    </div>
  );
};

export default Header;
