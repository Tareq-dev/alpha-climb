import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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
   toast.error(error.message)
  }
  if (loading) {
    return <Loading />;
  }
  if (token) {
    navigate(from, { replace: true });
  }
  return (
    <div className="text-center">
      <button onClick={() => signInWithGoogle()}>
        <div className="">
          <div className="w-8 rounded-full ring ring-info ring-offset-base-100 ring-offset-2">
            <img src="https://i.ibb.co/5k5bzzG/google.png" alt="" />
          </div>
        </div>
      </button>
    </div>
  );
};

export default SocialLogin;
