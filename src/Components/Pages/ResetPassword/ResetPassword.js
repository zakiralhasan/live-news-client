import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../../Contexts/AuthProvider";

const ResetPassword = () => {
  const user = useContext(AuthContext);
  const { resetUserPassword } = user;
  const handleForm = (event) => {
    event.preventDefault();
    const email = event.target.email.value;

    resetUserPassword(email)
      .then(() => {})
      .catch((error) => console.error(error));

    event.target.reset();
    swal("Please check your inbox or spam box!");
  };
  return (
    <div>
      <form onSubmit={handleForm}>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl font-semibold">Reset password</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <Link
                      to="/login"
                      className="label-text-alt link link-hover"
                    >
                      Already have an account?
                    </Link>
                  </label>
                  <label className="label">
                    <Link
                      to="/register"
                      className="label-text-alt link link-hover"
                    >
                      Register new account?
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-4">
                  <button className="btn  bg-blue-400 border-none">
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
