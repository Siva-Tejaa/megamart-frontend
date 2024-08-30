import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { MegaMartLogo } from "../assets/images/imageImports";

import { API_END_POINTS } from "../config/apiConfig";
import usePostAPI from "../hooks/usePostAPI";

const LoginPage = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const [loginData, setLoginData] = useState(initialValues);

  const { email, password } = loginData;

  const { loading, data, error, setError, postData } = usePostAPI();

  const changeHandler = (e) => {
    setError(null);
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    await postData(API_END_POINTS?.AUTH?.SIGNIN, loginData);
  };

  useEffect(() => {
    if (data?.success) {
      setLoginData(initialValues);
      console.log(data);
    }
  }, [data]);

  return (
    <div className="h-[100svh] flex items-center justify-center bg-[#FDEFEB]">
      <div className="bg-white p-6 rounded-sm flex flex-col gap-6 w-96">
        <Link to="/">
          <img src={MegaMartLogo} className="w-16" />
        </Link>
        <p className="text-3xl font-bold">Login</p>
        <form className="flex flex-col gap-4" onSubmit={submitHandler}>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={changeHandler}
            title="A valid email is required."
            className="border border-solid border-[#D4D5D9] p-2 caret-[#ff3f6c] outline-0 rounded-sm"
            required
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={changeHandler}
            minLength="6"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
            title="Password is required and must be at least one number and one uppercase and lowercase letter, and at least 6 or more characters"
            className="w-[100%] border border-solid border-[#D4D5D9] p-2 caret-[#ff3f6c] outline-0 rounded-sm"
            required
          />

          {error && (
            <p className="text-sm text-[#f14040]">
              {error?.response?.data?.message}
            </p>
          )}

          <Link to="/forgotpassword" className="text-[#ff3f6c]">
            Forgot Password ?
          </Link>

          <button
            type="submit"
            disabled={loading}
            className={
              loading
                ? "text-white font-bold uppercase bg-[#f57d99] pt-[6px] pb-0 rounded-sm"
                : "text-white font-bold uppercase bg-[#ff3f6c] p-[9px] rounded-sm"
            }
          >
            {loading ? <span className="loader"></span> : "Login"}
          </button>

          <p>
            Don't have an account?{" "}
            <Link to="/signup" className="text-[#ff3f6c]">
              Signup
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default React.memo(LoginPage);
