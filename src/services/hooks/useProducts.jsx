import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../apis/productApi";

export const useGetAllProducts = () => {
  return useQuery({
    queryKey: ["products"], // Unique key for caching
    queryFn: getAllProducts,
  });
};
