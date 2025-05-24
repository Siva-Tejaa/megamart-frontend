import React from "react";
import { customerProfileNavItems } from "../../config/constants";

const CustomerProfile = () => {
  return (
    <div className="p-2 flex items-start gap-2">
      <div className="flex flex-col gap-1 w-[25%]">
        <div>Account</div>
        <div className="flex flex-col gap-1">
          {customerProfileNavItems.map((item) => (
            <div>
              <p className="font-bold">{item?.name}</p>
              <p>{item.subTitle}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        Details <p>CustomerProfile</p>
      </div>
    </div>
  );
};

export default CustomerProfile;
