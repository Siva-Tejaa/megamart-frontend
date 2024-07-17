import React from "react";
import "./FallbackUI.css";

import { MegaMartLogo } from "../../assets/images/imageImports";

const FallbackUI = () => {
  return (
    <div className="h-[100svh] flex flex-col items-center justify-center gap-3">
      <img src={MegaMartLogo} alt="Mega Mart" className="w-[53px] h-[36px]" />
      <div className="loader"></div>
    </div>
  );
};

export default FallbackUI;
