import React from "react";
import Header from "../components/Header";
import CustomerProfile from "../components/CustomerProfile/CustomerProfile";

const ProfilePage = () => {
  return (
    <div>
      <Header />
      <CustomerProfile />
    </div>
  );
};

export default React.memo(ProfilePage);
