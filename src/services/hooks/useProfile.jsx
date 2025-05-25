import { useQuery } from "@tanstack/react-query";
import { getUserDetails } from "../apis/userApi";

export const useGetUserDetails = () => {
  return useQuery({
    queryKey: ["userDetails"],
    queryFn: getUserDetails,
  });
};
