import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import auth from "../../firebase.init";
import useToken from "../../Hooks/useToken";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const [token] = useToken(user);
  let from = location.state?.from?.pathname || "/";
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
    <div className="text-center">
      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-primary btn-outline"
      >
        <img
          className="w-8 px-1"
          src="https://i.ibb.co/5k5bzzG/google.png"
          alt=""
        />
        CONTINUE WITH GOOGLE
      </button>
    </div>
  );
};

export default SocialLogin;
