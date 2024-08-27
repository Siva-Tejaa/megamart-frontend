import React from "react";

import { Link } from "react-router-dom";
import { EmptyBag } from "../assets/images/imageImports";

const EmptyCart = () => {
  return (
    <div className="h-[100svh] flex flex-col gap-4 items-center justify-center">
      <img src={EmptyBag} alt="Empty Cart" className="w-44" />
      <p className="text-2xl font-bold">Hey, it feels so light!</p>
      <p>There is nothing in your bag. Let's add some items.</p>
      <Link
        to="/wishlist"
        className="border border-solid border-[#FF3F6C] px-9 py-3 text-xl uppercase font-bold text-[#FF3F6C] rounded-sm"
      >
        Add Items from Wishlist
      </Link>
    </div>
  );
};

export default EmptyCart;
