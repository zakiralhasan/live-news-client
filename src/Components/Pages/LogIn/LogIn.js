import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";

const LogIn = () => {
  const {loginUser} = useContext(AuthContext);

  const navigate = useNavigate()
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";  

  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;
    console.log(password, email);

    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, {replace: true})
      })
      .catch((error) => console.error(error));

    form.reset();
  };
  return (
    <div>
      <form onSubmit={handleForm}>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-semibold">Login now!</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <Link
                      to="/reset"
                      className="label-text-alt link link-hover"
                    >
                      Forgot password?
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
