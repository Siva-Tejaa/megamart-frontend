import React from "react";

import { PageNotFound } from "../assets/images/imageImports";

import Header from "../components/Header";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col gap-4 items-center justify-center">
        <img src={PageNotFound} className="w-80 h-80" />
        <p className="text-lg font-bold">404 - Page not found</p>
        <p className="text-lg max-w-[420px] text-center">
          The page you are looking for might have been removed or temporarily
          unavailable.
        </p>

        <Link
          to="/"
          className="border border-solid p-2 mb-4 font-bold text-[#F51CB3] border-[#F51CB3] rounded-sm hover:text-white hover:bg-[#F51CB3]"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default React.memo(NotFoundPage);
