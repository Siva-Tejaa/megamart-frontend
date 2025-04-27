import apiClient from "../apiClient";
import { API_END_POINTS } from "../apiEndPoints";

export const getAllProducts = () => {
  return apiClient.get(API_END_POINTS.PRODUCTS.GET_ALL_PRODUCTS);
};
