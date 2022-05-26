import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../firebase.init";
import { signOut } from "firebase/auth";
import useProfile from "./../Hooks/useProfile";
import Loading from "./Loading";
import useAdmin from "../Hooks/useAdmin";

const Navbar = () => {
  const [user, isLoading] = useAuthState(auth);
  const [admin] = useAdmin(user);

  const [profile] = useProfile([]);

  if (isLoading) {
    return <Loading />;
  }
  const logOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  return (
    <div className="navbar bg-black text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
            {user && (
              <li className="px-5">
                <NavLink className="h-8 mt-2" to="/portfolio">
                  Portfolio
                </NavLink>
              </li>
            )}
            {user && (
              <li className="px-5">
                <NavLink className="h-8 mt-2" to="/dashboard">
                  My Profile
                </NavLink>
              </li>
            )}
            {!admin && (
              <li className="px-5">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-link" : "link"
                  }
                  to="/dashboard/my-order"
                >
                  My Order
                </NavLink>
              </li>
            )}
            {!admin && (
              <li className="px-5">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-link" : "link"
                  }
                  to="/dashboard/my-review"
                >
                  Add Review
                </NavLink>
              </li>
            )}
            {admin && (
              <li className="px-5">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-link" : "link"
                  }
                  to="/dashboard/add-product"
                >
                  Add Products
                </NavLink>
              </li>
            )}
            {admin && (
              <li className="px-5">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-link" : "link"
                  }
                  to="/dashboard/manage-products"
                >
                  Manage Products
                </NavLink>
              </li>
            )}
            {admin && (
              <li className="px-5">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-link" : "link"
                  }
                  to="/dashboard/manage-orders"
                >
                  Manage All Orders
                </NavLink>
              </li>
            )}
            {admin && (
              <li className="px-5">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-link" : "link"
                  }
                  to="/dashboard/users"
                >
                  Users
                </NavLink>
              </li>
            )}
            {user?.email ? (
              <button
                onClick={logOut}
                className="btn btn-sm mt-2 btn-outline btn-info"
              >
                Sign Out
              </button>
            ) : (
              <li className="px-5">
                <NavLink
                  className="h-8 mt-2 btn-outline font-bold btn-info"
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img
            className="w-14"
            src="https://i.ibb.co/ZJDHvN9/Capture-removebg-preview.png"
            alt="logo"
          />
          <span className="font-serif text-info font-bold">Alpha Climb</span>
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex mx-2">
        <ul className="menu menu-horizontal">
          <li>
            <NavLink className="h-8 mt-2 rounded-lg" to="/products">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink className="h-8 mt-2 rounded-lg" to="/blog">
              Blog
            </NavLink>
          </li>
          {user && (
            <li>
              <NavLink className="h-8 mt-2 rounded-lg" to="/portfolio">
                Portfolio
              </NavLink>
            </li>
          )}
          {user && (
            <li>
              <NavLink className="h-8 mt-2 mx-2 rounded-lg" to="/dashboard">
                Dashboard
              </NavLink>
            </li>
          )}
          {user?.email ? (
            <div className="flex justify-center items-center">
              <button
                onClick={logOut}
                className="btn btn-sm mx-3 mt-2 btn-outline btn-info"
              >
                Sign Out
              </button>
              <div className="avatar">
                <div className="w-10 mx-2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={user?.photoURL || profile.img} alt="" />
                </div>
              </div>
            </div>
          ) : (
            <li>
              <NavLink className="h-8 mx-2 px-3 mt-2" to="/login">
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
