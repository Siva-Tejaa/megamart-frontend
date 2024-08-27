import React from "react";
import classNames from "classnames";

import { MegaMartLogo } from "../assets/images/imageImports.jsx";
import { BiSearchAlt2 } from "../assets/images/iconImports.jsx";
import { navItems, profileItems } from "../config/constants.jsx";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[#FFFFFF] p-5 shadow-sm flex items-center justify-between">
      <Link to="/">
        <img
          src={MegaMartLogo}
          alt="MegaMart Logo"
          className="w-[53px] h-[36px]"
        />
      </Link>
      <div className="flex items-center gap-10">
        <div className="hidden laptop:flex items-center">
          <input
            type="text"
            placeholder="Search for products, brands and more..."
            className="bg-[#f5f5f6] outline-none leading-6 w-72 text-[#81858F] p-2 pl-4 border border-solid border-[#f5f5f6] rounded-l-md"
          />
          <button className="bg-[#F5F5F6] px-2 py-[7.4px] rounded-r-md text-[#717288]">
            <BiSearchAlt2 style={{ fontSize: "1.6em", color: "#717288" }} />
          </button>
        </div>
        <div className="flex items-center gap-6">
          {navItems.map((nav) => (
            <div
              key={nav.id}
              className={classNames(
                "flex flex-col items-center gap-[2px] cursor-pointer",
                nav.name === "Profile" && "group"
              )}
            >
              {nav.name !== "Profile" ? (
                <Link
                  to={nav.link}
                  className="flex flex-col items-center gap-[2px] cursor-pointer"
                >
                  {nav.icon}
                  <span className="font-semibold">{nav.name}</span>
                </Link>
              ) : (
                <>
                  {nav.icon}
                  <span
                    className={classNames(
                      "font-semibold"
                      // nav.name === "Profile" && "hover:text-[#F51CB3]"
                    )}
                  >
                    {nav.name}
                  </span>
                </>
              )}
              {nav.name === "Profile" && (
                <nav className="hidden group-hover:flex w-[250px] flex-col gap-[6px] absolute z-10 top-[4.2rem] shadow-md p-4 bg-white">
                  <span className="font-bold">Welcome</span>
                  <span>To access account and manage orders</span>
                  <Link
                    to="/login"
                    className="text-center border border-solid border-[#F5F5F6] p-2 mb-4 font-bold text-[#F51CB3] hover:border-[#F51CB3]"
                  >
                    LOGIN/SIGNUP
                  </Link>
                  <hr className="mb-2" />
                  {profileItems.map((profileItem) => (
                    <Link
                      to={profileItem?.link}
                      key={profileItem?.id}
                      className="hover:font-semibold cursor-pointer"
                    >
                      {profileItem.name}
                    </Link>
                  ))}
                </nav>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
