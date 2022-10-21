import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import LeftSide from "../LeftSide/LeftSide";
import { useContext } from "react";
import { AuthContext } from "../../../../Contexts/AuthProvider";

const NaveBar = () => {
  const newUser = useContext(AuthContext);
  const { user, logOutUser } = newUser;
  // console.log(user);

  const handleLogout = () => {
    logOutUser()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="navbar bg-blue-100">
        <div className="mr-6">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Live News
          </Link>
        </div>

        <div className="flex justify-between w-full">
          <div className=" hidden sm:block ">
            <ul className="flex  w-full">
              <li className="mr-4">
                <Link to="/">Home</Link>
              </li>
              <li className="mr-4">
                <Link>Portfolio</Link>
              </li>
              <li className="mr-4">
                <Link>About</Link>
              </li>
            </ul>
          </div>
          <div className="hidden sm:block">
            {user?.uid ? (
              <div className="flex items-center">
                {user.email}
                <button onClick={handleLogout} className="mx-2 btn btn-sm">
                  Logout
                </button>
                <img className="w-10 rouded-full" src={user.photoURL} alt="" />
              </div>
            ) : (
              <div className="flex w-full items-center">
                <Link to="/register">
                  <button onClick={handleLogout} className="mx-2 btn btn-sm">
                    Register
                  </button>
                </Link>
                <Link to="/login">
                  <button onClick={handleLogout} className="mx-2 btn btn-sm">
                    Login
                  </button>
                </Link>
                <FaUser className="text-2xl" />
              </div>
            )}
          </div>
        </div>

        <div className="navbar-end sm:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link>Portfolio</Link>
              </li>
              <li>
                <Link>About</Link>
              </li>
              <LeftSide></LeftSide>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NaveBar;
