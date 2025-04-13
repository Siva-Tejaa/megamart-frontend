import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { setItem, clearStorage } from "../../utils/localStorageUtils";
import { signupUser, loginUser, logoutUser } from "../apis/authApi";

export const useLogin = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: loginUser,
    onSuccess: (response) => {
      const user = response?.data?.data;
      setItem("user", user);
      navigate("/");
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });
};

export const useSignup = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: signupUser,
    onSuccess: () => {
      navigate("/login");
    },
  });
};

export const useLogout = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      clearStorage();
      navigate("/login");
    },
  });
};
