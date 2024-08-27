import React from "react";
import Header from "../components/Header";
import EmptyCart from "../components/EmptyCart";

const CartPage = () => {
  return (
    <>
      <Header />
      <EmptyCart />
    </>
  );
};

export default React.memo(CartPage);
