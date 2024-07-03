import React from "react";

import { MegaMart } from "../assets/images/imageImports.jsx";

const Header = () => {
  return (
    <header className="bg-[#FFFFFF] p-4 shadow-md flex items-center">
      <img src={MegaMart} alt="MegaMart Logo" className="w-[53px] h-[36px]" />
      <div className="bg-[#F5F5F6]">
        <input className="bg-[#F5F5F6] text-[#81858F] p-1" />
      </div>
    </header>
  );
};

export default Header;
