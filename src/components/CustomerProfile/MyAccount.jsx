import React from "react";
import { CardBox, ShoppingCart, WishList } from "../../assets/imageImports";
import { useSelector } from "react-redux";

const MyAccount = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <div className="font-bold text-lg">
          Hello {user.firstName} {user.lastName}
        </div>
        <div>Logged in as: {user.email}</div>
      </div>
      <div className="flex gap-2 flex-col laptop:flex-row">
        <div className="flex-col gap-2 min-w-44 border-2 border-gray-200 p-2 inline-flex rounded-lg">
          <img
            src={CardBox}
            alt="Card Box"
            className="w-10 h-10 object-contain"
          />
          <div className="flex items-center justify-between gap-4">
            <p className="text-lg">Orders Placed</p>
            <p className="font-bold text-4xl">0</p>
          </div>
        </div>
        <div className="flex-col gap-2 min-w-44 border-2 border-gray-200 p-2 inline-flex rounded-lg">
          <img
            src={ShoppingCart}
            alt="Card Box"
            className="w-10 h-10 object-contain"
          />
          <div className="flex items-center justify-between gap-4">
            <p className="text-lg">Wishlist</p>
            <p className="font-bold text-4xl">0</p>
          </div>
        </div>
        <div className="flex-col gap-2 min-w-44 border-2 border-gray-200 p-2 inline-flex rounded-lg">
          <img
            src={WishList}
            alt="Card Box"
            className="w-10 h-10 object-contain"
          />
          <div className="flex items-center justify-between gap-4">
            <p className="text-lg">Items in cart</p>
            <p className="font-bold text-4xl">0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
