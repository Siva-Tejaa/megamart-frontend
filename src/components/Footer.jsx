import React from "react";
import { apps, socialMedia } from "../config/constants";

const Footer = () => {
  return (
    <div className="bg-[#FAFBFC] flex flex-col gap-4 p-2">
      <div className="flex flex-col items-center gap-4 tablet:flex-row justify-around">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="uppercase font-bold ">
              Experience Mega Mart App on Mobile
            </div>
            <div className="flex items-center gap-2">
              {apps.map((item) => (
                <div key={item?.id}>
                  <a href={item?.link} target="_blank">
                    <img src={item?.image} className="object-contain h-12" />
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="uppercase font-bold ">Keep in Touch</div>
            <div className="flex items-center gap-2">
              {socialMedia.map((item) => (
                <div key={item?.id}>
                  <a href={item?.link} target="_blank">
                    <img src={item?.icon} className="object-contain w-5 h-5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>100% Guarantee</div>
      </div>
      <div>Popular Searches</div>
      <div className="flex items-start gap-2 justify-between">
        <p>Contact us</p>
        <p>Copyright @ 2025</p>
        <p>A Mega Mart Company</p>
      </div>
    </div>
  );
};

export default Footer;
