import apiClient from "../apiClient";
import { API_END_POINTS } from "../apiEndPoints";

export const loginUser = (credentials) => {
  return apiClient.post(API_END_POINTS.AUTH.SIGNIN, credentials);
};

export const signupUser = (userInfo) => {
  return apiClient.post(API_END_POINTS.AUTH.SIGNUP, userInfo);
};

export const logoutUser = () => {
  return apiClient.post(API_END_POINTS.AUTH.SIGNOUT);
};
