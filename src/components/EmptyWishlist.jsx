import React from "react";

import { EmptyWishList } from "../assets/images/imageImports";
import { Link } from "react-router-dom";

const EmptyWishlist = () => {
  return (
    <div className="h-[100svh] flex flex-col gap-4 items-center justify-center">
      <p className="text-2xl font-bold uppercase">Please Log in</p>
      <p className="text-lg">Login to view items in your wishlist.</p>
      <img src={EmptyWishList} alt="Empty WishList Logo" />
      <Link
        to="/login"
        className="border border-solid border-[#347CEE] px-9 py-3 text-xl uppercase font-bold text-[#347CEE] rounded-sm"
      >
        Login
      </Link>
    </div>
  );
};

export default React.memo(EmptyWishlist);
