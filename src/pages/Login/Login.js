import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "./../../firebase.init";
import SocialLogin from "./SocialLogin";
import Loading from "./../../components/Loading";
import useToken from "../../Hooks/useToken";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [token] = useToken(user);
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <Loading />;
  }
  if (token) {
    navigate(from, { replace: true });
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-10">
        <div className="rounded-lg m-4">
          <h2 className="text-2xl text-center mt-5">Login</h2>
          <div className="flex justify-center pt-8">
            <form className="flex-col justify-center mx-auto px-4 ">
              <label htmlFor="" className="text-md mx-2">
                Email
              </label>
              <input
                className="border-2 rounded-lg px-4 py-2 block w-80"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="" className="text-md mx-2 block mt-5">
                Password
              </label>
              <input
                className="border-2 rounded-lg px-4 py-2 block w-80"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Link to="/reset">Forgot Password ?</Link>
              <button
                className="border-2 rounded-lg px-4 py-2 block w-80 mt-5 bg-primary text-white text-xl"
                onClick={() => signInWithEmailAndPassword(email, password)}
              >
                Login
              </button>
            </form>
          </div>
          <p className="text-center mt-5">
            New to Alpha Climb?
            <Link className="text-primary px-2" to="/register">
              Create new account .
            </Link>
          </p>
          <div className="text-center py-5 text-gray-400">
            ________________OR________________
          </div>
          <SocialLogin />
        </div>
      <div className="md:flex justify-center items-center">
      <img
        src="https://i.ibb.co/XYyYgbC/undraw-secure-login-pdn4.png"
        alt=""
      />
    </div>
    </div>
  );
};

export default Login;
