import React from "react";
import { customerProfileNavItems } from "../../config/constants";
import MyAccount from "./MyAccount";

const CustomerProfile = () => {
  return (
    <div className="p-2 flex flex-col items-start gap-2 laptop:flex-row">
      <div className="flex flex-col gap-1 w-[100%] laptop:w-[25%] border-gray-300 border-2 rounded-lg p-3">
        <div className="font-bold text-lg">Account</div>
        <div className="flex flex-col gap-1">
          {customerProfileNavItems.map((item) => (
            <div key={item.id}>
              <p className="font-bold">{item?.name}</p>
              <p className="line-clamp-1" title={item.subTitle}>
                {item.subTitle}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 border-2 border-gray-300 w-[100%] laptop:w-[75%] rounded-lg">
        <MyAccount />
      </div>
    </div>
  );
};

export default CustomerProfile;
