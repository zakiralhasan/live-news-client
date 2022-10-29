import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../../Contexts/AuthProvider";
import useSetTitle from "../../../hooks/useSetTitle";

const Register = () => {
  useSetTitle("Register"); //used custom hook for changing title name.
  const user = useContext(AuthContext);
  const { creatUser, updateUserProfile, userEmailVerification } = user;

  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const imageURL = form.imageURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, imageURL, email, password);

    creatUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        userVerification();
        updateUserProfileInfo(name, imageURL);
        swal(
          "Please verify your email. We have sent a verification mail to your mail address!"
        );
      })
      .catch((error) => console.error(error));

    form.reset();
  };

  const userVerification = () => {
    userEmailVerification()
      .then()
      .catch((error) => console.error(error));
  };

  const updateUserProfileInfo = (name, imgURL) => {
    updateUserProfile({ displayName: name, photoURL: imgURL })
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <form onSubmit={handleForm}>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl font-semibold">Registration free!</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    name="imageURL"
                    placeholder="image URL"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <Link
                      to="/login"
                      className="label-text-alt link link-hover"
                    >
                      Already have an account?
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn  bg-blue-400 border-none">
                    Register
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

export default Register;
