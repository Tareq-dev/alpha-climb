import { useEffect, useState } from "react";
const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.user?.email;
    const existingUser = { email: email };
    if (email) {
      fetch(`https://intense-beyond-53965.herokuapp.com/user/${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(existingUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const secretToken = data.token;
          localStorage.setItem("accessToken", secretToken);
          setToken(secretToken);
        });
    }
  }, [user]);
  return [token];
};
export default useToken;
