import { useQuery } from "react-query";

const useProfile = () => {
  const { data: services, isLoading } = useQuery("services", () =>
    fetch("http://localhost:5000/products").then((res) => res.json())
  );
  console.log(services);
  return { services, isLoading };
};
export default useProfile;
