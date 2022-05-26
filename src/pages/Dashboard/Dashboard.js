import React from "react";
import { NavLink, Outlet } from "react-router-dom";
// import useAdmin from "../../Hooks/useAdmin";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../firebase.init";
import Loading from "../../components/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faUserCircle } from "@fortawesome/free-regular-svg-icons";
import "./Dashboard.css";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const [admin] = useAdmin(user);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content py-5">
        <Outlet></Outlet>
      </div>
      <div className="drawer-side border-r-2">
        <label for="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu h-min md:my-24 p-2 overflow-y-auto w-56 bg-base-100 text-base-content">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "link")}
              to="/dashboard"
            >
              <FontAwesomeIcon
                className="text-2xl text-orange-500"
                icon={faUserCircle}
              />
              My Profile
            </NavLink>
          </li>
          {!admin && (
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-link" : "link"
                }
                to="/dashboard/my-order"
              >
                <FontAwesomeIcon
                  className="text-xl text-orange-500"
                  icon={faStar}
                />
                My Order
              </NavLink>
            </li>
          )}
          {!admin && (
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-link" : "link"
                }
                to="/dashboard/my-review"
              >
                <FontAwesomeIcon
                  className="text-xl text-orange-500"
                  icon={faStar}
                />
                Add Review
              </NavLink>
            </li>
          )}
          {admin && (
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-link" : "link"
                }
                to="/dashboard/add-product"
              >
                <FontAwesomeIcon className="text-xl text-black" icon={faStar} />
                Add Products
              </NavLink>
            </li>
          )}
          {admin && (
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-link" : "link"
                }
                to="/dashboard/manage-products"
              >
                <FontAwesomeIcon className="text-xltext-black" icon={faStar} />
                Manage Products
              </NavLink>
            </li>
          )}
          {admin && (
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-link" : "link"
                }
                to="/dashboard/manage-orders"
              >
                <FontAwesomeIcon className="text-xl text-black" icon={faStar} />
                Manage All Orders
              </NavLink>
            </li>
          )}
          {admin && (
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-link" : "link"
                }
                to="/dashboard/users"
              >
                <FontAwesomeIcon className="text-xl text-black" icon={faStar} />
                Users
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
