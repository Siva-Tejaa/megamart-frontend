import { jwtDecode } from "jwt-decode";

export const getRatingColor = (rating) => {
  if (rating < 2) return "bg-red-400";
  if (rating > 2 && rating < 3.5) return "bg-yellow-400";
  if (rating >= 3.5 && rating <= 5) return "bg-green-400";
  return "bg-gray-400";
};

export const getJWTTokenDecodedUserRole = (token) => {
  if (!token) {
    return null;
  }
  const { role } = jwtDecode(token);
  return role ? role : null;
};
