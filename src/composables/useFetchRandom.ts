import { useQuery } from "@tanstack/vue-query";
import axiosInstance from "../lib/axioinstance";

const useFetchRandom = () => {
  const getRandomDogs = async () => {
    const res = await axiosInstance.get("/breeds/image/random/100");
    return res.data;
  };

  return useQuery({
    queryKey: ["random-dogs"],
    queryFn: getRandomDogs,
    select: (data) => data.message,
  });
};

export default useFetchRandom;
