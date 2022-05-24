import { useQuery } from "react-query";

const useProfile = () => {
  const { data: services, isLoading } = useQuery("services", () =>
    fetch("https://intense-beyond-53965.herokuapp.com/products").then((res) =>
      res.json()
    )
  );
  console.log(services);
  return { services, isLoading };
};
export default useProfile;
