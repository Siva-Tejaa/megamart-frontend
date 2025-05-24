import React from "react";

import { EmptyWishList } from "../assets/imageImports";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const EmptyWishlist = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="h-[100svh] flex flex-col gap-4 items-center justify-center">
      {user ? (
        <>
          <p className="text-2xl font-bold uppercase">Your Wishlist is Empty</p>
          <p className="text-lg flex flex-col items-center justify-center">
            <span>Add items that you like to your wishlist.</span>
            <span>Review them anytime and easily move them to the bag.</span>
          </p>
        </>
      ) : (
        <>
          <p className="text-2xl font-bold uppercase">Please Log in</p>
          <p className="text-lg">Login to view items in your wishlist.</p>
        </>
      )}
      <img src={EmptyWishList} alt="Empty WishList Logo" />
      {user ? (
        <Link
          to="/"
          className="border border-solid border-[#347CEE] px-9 py-3 text-xl uppercase font-bold text-[#347CEE] rounded-sm"
        >
          Continue Shopping
        </Link>
      ) : (
        <Link
          to="/login"
          className="border border-solid border-[#347CEE] px-9 py-3 text-xl uppercase font-bold text-[#347CEE] rounded-sm"
        >
          Login
        </Link>
      )}
    </div>
  );
};

export default React.memo(EmptyWishlist);
