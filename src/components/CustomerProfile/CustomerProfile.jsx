import React, { useState } from "react";
import { customerProfileNavItems } from "../../config/constants";
import MyAccount from "./MyAccount";
import MyOrders from "./MyOrders";
import MyAddressBook from "./MyAddressBook";
import MyProfile from "../MyProfile";
import HelpAndSupport from "../HelpAndSupport";

const CustomerProfile = () => {
  const [profile, setProfile] = useState("myAccount");

  const profileItems = {
    myAccount: <MyAccount />,
    myOrders: <MyOrders />,
    myAddress: <MyAddressBook />,
    myProfile: <MyProfile />,
    helpAndSupport: <HelpAndSupport />,
  };

  return (
    <div className="p-4 flex flex-col items-start gap-2 laptop:flex-row">
      <div className="flex flex-col w-[100%] laptop:w-[25%] border-gray-300 border-[1.5px] rounded-lg">
        <div className="font-bold text-xl px-3 py-2 border-b-slate-200 border-b-[1px]">
          Account
        </div>
        <div className="flex flex-col">
          {customerProfileNavItems.map((item) => (
            <div
              key={item.id}
              className={`flex items-center gap-4 hover:bg-gray-100 p-3 cursor-pointer last:rounded-b-md ${
                profile === item.key && "bg-gray-200"
              }`}
              onClick={() => setProfile(item.key)}
            >
              <div>{item.icon}</div>
              <div className="flex flex-col gap-0">
                <p className="font-bold">{item?.name}</p>
                <p className="line-clamp-1" title={item.subTitle}>
                  {item.subTitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 border-[1.5px] border-gray-300 w-[100%] laptop:w-[75%] rounded-lg">
        {profileItems[profile]}
      </div>
    </div>
  );
};

export default CustomerProfile;
