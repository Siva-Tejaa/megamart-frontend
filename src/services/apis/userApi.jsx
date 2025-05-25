import apiClient from "../apiClient";
import { API_END_POINTS } from "../apiEndPoints";

export const getUserDetails = () => {
  return apiClient.get(API_END_POINTS.USER.GET_USER_DETAILS);
};
