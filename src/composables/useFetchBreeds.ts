import { useQuery } from "@tanstack/vue-query";
import axiosInstance from "../lib/axioinstance";

const useFetchBreeds = () => {
  const fetchBreeds = async () => {
    return axiosInstance.get("/breeds/list/all").then((res) => res.data);
  };

  return useQuery({
    queryFn: fetchBreeds,
    queryKey: ["fetch-breeds"],
    select: (data) => {
      const breedData = data.message;
      return Object.keys(breedData);
    },
  });
};

export default useFetchBreeds;
