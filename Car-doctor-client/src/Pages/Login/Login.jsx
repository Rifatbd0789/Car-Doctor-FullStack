import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import useAuth from "../../Hooks/useAuth";
// import { useContext } from "react";
// import { AuthContext } from "../../Providers/Provider";
// import axios from "axios";

const Login = () => {
  // const { loginUser } = useContext(AuthContext);
  const { loginUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((result) => {
        alert(`${result.user.email} logged In Successfully`);
        navigate(location?.state ? location?.state : "/");
        // const logUser = { email };
        // Get Token
        // axios
        //   .post("http://localhost:5000/jwt", logUser, { withCredentials: true })
        //   .then((res) => {
        //     if (res.data.success) {
        // }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row gap-5 md:gap-32">
        <div className=" w-1/2">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-4xl font-bold text-center">Login !</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email..."
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <p className="text-center pb-5">
            New Here?{" "}
            <Link
              className=" text-orange-600 font-bold link link-hover"
              to="/register"
            >
              Sign Up here...
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
