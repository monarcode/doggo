import { useQuery } from "@tanstack/vue-query";
import axiosInstance from "../lib/axioinstance";

const useFetchByBreed = (breed: string) => {
  return useQuery({
    queryKey: ["fetch-dog-breed", breed],
    queryFn: async () => {
      return axiosInstance
        .get(`/breed/${breed}/images`)
        .then((res) => res.data);
    },
    select: (data) => data.message,
  });
};

export default useFetchByBreed;
