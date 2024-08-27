import React from "react";
import { Link } from "react-router-dom";

import { MegaMartLogo } from "../assets/images/imageImports";

const LoginPage = () => {
  return (
    <div className="h-[100svh] flex items-center justify-center bg-[#FDEFEB]">
      <div className="bg-white p-6 rounded-sm flex flex-col gap-6 w-96">
        <Link to="/">
          <img src={MegaMartLogo} className="w-16" />
        </Link>
        <p className="text-3xl font-bold">Login</p>
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-solid border-[#D4D5D9] p-2 caret-[#ff3f6c] outline-0 rounded-sm"
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="border border-solid border-[#D4D5D9] p-2 caret-[#ff3f6c] outline-0 rounded-sm"
          />
          <Link to="/forgotpassword" className="text-[#ff3f6c]">
            Forgot Password ?
          </Link>

          <button className="text-white font-bold uppercase bg-[#ff3f6c] p-2 rounded-sm">
            Login
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
