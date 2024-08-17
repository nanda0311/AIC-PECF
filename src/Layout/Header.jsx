import React from "react";
import { NavbarDemo } from "./Navbar";
import { Aic_Logo, Niti_Logo, Ptu_Logo } from "../assets";

const Header = () => {
  return (
    <>
      {/*Navbar */}
      <div className="flex px-10 py-1 shadow-2xl absolute z-[100] bg-white w-screen">
        <div className="flex items-center gap-4">
          <div>
            <img src={Aic_Logo} className="w-[80px]" />
          </div>
          <div className="w-[160px]">
            <img src={Niti_Logo} />
          </div>
        </div>
        <NavbarDemo />
      </div>
    </>
  );
};

export default Header;
