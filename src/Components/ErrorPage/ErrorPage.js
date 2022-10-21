import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="bg-blue-100 flex justify-center items-center h-screen">
      <div className="bg-gray-100 shadow-lg p-6 text-center rounded-md">
        <h1 className="text-6xl mb-4 text-red-500">Oops!</h1>
        <h4>An unexpected error has occurred.</h4>
        <div className="text-gray-400">
          <p className="text-2xl">{error.status}</p>
          <small>{error.statusText}</small>
        </div>
        <Link to="/">
          <button className="bg-amber-400 px-4 py-2 rounded font-semibold text-red-700 mt-4">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
