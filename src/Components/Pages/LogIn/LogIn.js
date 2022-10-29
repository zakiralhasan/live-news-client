import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../../Contexts/AuthProvider";
import useSetTitle from "../../../hooks/useSetTitle";

const LogIn = () => {
  useSetTitle("Login"); //used custom hook for changing title name.
  const { loginUser, setLoading } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        //used for user email verification issue resolve
        if (user.emailVerified) {
          navigate(from, { replace: true });
        } else {
          swal(" Your email is not verified yet! Please verify your email.");
        }
      })
      .catch((error) => console.error(error))
      .finally(() => {
        console.log("finally");
        setLoading(false);
      });

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
                  <button className="btn bg-blue-400 border-none">Login</button>
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
