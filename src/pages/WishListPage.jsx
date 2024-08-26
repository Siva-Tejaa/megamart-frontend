import React from "react";
import Header from "../components/Header";
import EmptyWishlist from "../components/EmptyWishlist";

const WishListPage = () => {
  return (
    <div>
      <Header />
      <EmptyWishlist />
    </div>
  );
};

export default React.memo(WishListPage);
