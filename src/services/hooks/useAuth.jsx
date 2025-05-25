import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess, logout } from "../../redux/features/authSlice";
import { signupUser, loginUser, logoutUser } from "../apis/authApi";
import {
  setItem,
  removeItem,
  clearStorage,
} from "../../utils/localStorageUtils";
import { getJWTTokenDecodedUserRole } from "../../utils/utils";

export const useLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: loginUser,
    onSuccess: (response) => {
      const data = response?.data?.data;
      const user = {
        email: data?.email,
        firstName: data?.firstName,
        lastName: data?.lastName,
      };
      const role = getJWTTokenDecodedUserRole(data?.accessToken);
      dispatch(loginSuccess({ user, role }));
      setItem("user", user);
      setItem("accessToken", data?.accessToken);
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
      clearStorage();
      dispatch(logout());
      navigate("/login");
    },
    onError: () => {
      clearStorage();
      dispatch(logout());
      navigate("/login");
    },
  });
};
