import React from "react";
import {
  useAuthState,
  // useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
// import { toast, ToastContainer } from "react-toastify";
import Loading from "../../components/Loading";
//await sendEmailVerification();
const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  // const [sendEmailVerification] = useSendEmailVerification(auth);
  // if (user.providerData[0]?.providerId === "password" && !user.emailVerified) {
  //   return (
  //     <div className="text-center mt-5 pt-5">
  //       <h3 className="text-danger mt-2">Your Email is not verified!!</h3>
  //       <h5 className="text-success mt-2"> Please Verify your email address</h5>
  //       <button
  //         className="btn btn-primary mt-5"
  //         onClick={async () => {

  //           toast("Sent email");
  //         }}
  //       >
  //         Send Verification Email Again
  //       </button>
  //       <ToastContainer></ToastContainer>
  //     </div>
  //   );
  // }
  const location = useLocation();
  if (loading) {
    return <Loading />;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
