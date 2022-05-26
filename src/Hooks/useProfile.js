import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useProfile = () => {
  const [user] = useAuthState(auth);
  const [profile, setProfile] = useState([]);
  const [loadUser, setLoadUser] = useState(true);

  const email = user?.email;
  useEffect(() => {
    fetch(`https://intense-beyond-53965.herokuapp.com/user/${email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
        setLoadUser(false);
      });
  }, [email]);
  return [profile];
};
export default useProfile;
