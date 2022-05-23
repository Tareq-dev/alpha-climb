import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../firebase.init";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const logOut = () => {
    signOut(auth);
  };
  return (
    <div className="navbar bg-black text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52"
          >
            <li className="px-5">
              <NavLink className="h-8 mt-2" to="/products">
                Products
              </NavLink>
            </li>
            <li className="px-5">
              <NavLink className="h-8 mt-2" to="/blog">
                Blog
              </NavLink>
            </li>
            {user?.email ? (
              <button onClick={logOut} className="btn btn-sm mt-2 btn-outline btn-info">
                Sign Out
              </button>
            ) : (
              <li>
                <NavLink className="h-8 mt-2" to="/login">
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Alpha Climb
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <NavLink className="h-8 mt-2" to="/products">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink className="h-8 mt-2" to="/blog">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink className="h-8 mt-2" to="/dashboard">
              Dashboard
            </NavLink>
          </li>
          {user?.email ? (
            <button onClick={logOut} className="btn btn-sm mt-2 btn-outline btn-info">
              Sign Out
            </button>
          ) : (
            <li>
              <NavLink className="h-8 mt-2" to="/login">
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
