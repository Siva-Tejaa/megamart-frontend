import React from "react";
import { Link } from "react-router-dom";

import { MegaMartLogo } from "../assets/images/imageImports";

const SignupPage = () => {
  return (
    <div className="h-[100svh] flex items-center justify-center bg-[#FDEFEB]">
      <div className="bg-white p-6 rounded-sm flex flex-col gap-6">
        <Link to="/">
          <img src={MegaMartLogo} className="w-16" />
        </Link>
        <p className="text-3xl font-bold">Signup</p>
        <form className="flex flex-col gap-4">
          <div className="flex items-center gap-1">
            <input
              type="text"
              placeholder="Firstname"
              className="w-[100%] border border-solid border-[#D4D5D9] p-2 caret-[#ff3f6c] outline-0 rounded-sm"
            />
            <input
              type="text"
              placeholder="Lastname"
              className="w-[100%] border border-solid border-[#D4D5D9] p-2 caret-[#ff3f6c] outline-0 rounded-sm"
            />
          </div>
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-solid border-[#D4D5D9] p-2 caret-[#ff3f6c] outline-0 rounded-sm"
          />
          <input
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="Enter your mobile number"
            className="border border-solid border-[#D4D5D9] p-2 caret-[#ff3f6c] outline-0 rounded-sm"
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="border border-solid border-[#D4D5D9] p-2 caret-[#ff3f6c] outline-0 rounded-sm"
          />
          <input
            type="password"
            placeholder="Confirm password"
            className="border border-solid border-[#D4D5D9] p-2 caret-[#ff3f6c] outline-0 rounded-sm"
          />
          <p>
            By continuing, I agree to the{" "}
            <Link to="/termsofuse" className="text-[#ff3f6c]">
              Terms of Use
            </Link>{" "}
            &{" "}
            <Link to="/privacypolicy" className="text-[#ff3f6c]">
              Privacy Policy
            </Link>
          </p>

          <button className="text-white font-bold uppercase bg-[#ff3f6c] p-2 rounded-sm">
            Signup
          </button>

          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-[#ff3f6c]">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default React.memo(SignupPage);
