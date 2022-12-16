import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, user,  error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  if (error) {
   toast.error(error.message)
  }



  // loading,
  // if (loading) {
  //   return <Loading />;
  // }

  if (user) {
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
