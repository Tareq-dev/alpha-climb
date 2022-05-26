import React, { useState } from "react";
import auth from "./../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import Loading from "../../components/Loading";
import { toast } from "react-toastify";
import useToken from "./../../Hooks/useToken";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [token] = useToken(user);

  if (error || updateError) {
    toast.error(error.message);
  }
  if (loading || updating) {
    return <Loading />;
  }
  if (token) {
    navigate(from, { replace: true });
  }
  const handleCreateUser = async (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
    } else {
      toast.error("You have to match both password");
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-4">
      <div className="p-8 rounded-lg mt-5">
        <h2 className="text-2xl text-center">Register</h2>
        <div className="flex justify-center pt-8">
          <form
            onSubmit={handleCreateUser}
            className="flex-col justify-center mx-auto"
          >
            <label className="text-md mx-2">Name</label>
            <input
              className="border-2 rounded-lg px-4 py-2 block w-80"
              type="name"
              required
              autoComplete="off"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className="text-md mx-2 block mt-5">Email</label>
            <input
              className="border-2 rounded-lg px-4 py-2 block w-80"
              type="email"
              required
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="text-md mx-2 block mt-5">Password</label>
            <input
              className="border-2 rounded-lg px-4 py-2 block w-80"
              type="password"
              required
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="text-md mx-2 block mt-5">Confirm Password</label>
            <input
              className="border-2 rounded-lg px-4 py-2 block w-80"
              type="password"
              required
              autoComplete="off"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <input
              type="submit"
              value="Login"
              className="border-2 rounded-lg px-4 py-2 block w-80 mt-5 bg-primary text-white text-xl"
            />
          </form>
        </div>
        <p className="text-center mt-5">
          Already have an account?
          <Link className="text-primary px-2" to="/login">
            Login
          </Link>
        </p>
        <div className="text-center py-5 text-gray-400">
          ________________OR________________
        </div>
        <SocialLogin />
      </div>
      <div className="md:flex justify-center items-center">
        <img
          src="https://i.ibb.co/554SxDK/undraw-Access-account-re-8spm.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Register;
