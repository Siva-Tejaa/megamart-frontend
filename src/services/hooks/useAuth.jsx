import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess, logout } from "../../redux/features/authSlice";
import { signupUser, loginUser, logoutUser } from "../apis/authApi";
import { setItem, clearStorage } from "../../utils/localStorageUtils";

export const useLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: loginUser,
    onSuccess: (response) => {
      const user = response?.data?.data;
      dispatch(loginSuccess(user));
      setItem("user", user);
      navigate("/", { replace: true });
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
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      dispatch(logout());
      clearStorage();
      navigate("/login");
    },
  });
};
