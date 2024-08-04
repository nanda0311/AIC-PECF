import React from "react";
import { NavbarDemo } from "./Navbar";
import { Aic_Logo, Niti_Logo, Ptu_Logo } from "../assets";

const Header = () => {
  return (
    <>
      <div className="flex mt-5 w-screen relative justify-between text-center gap-[100px] items-center px-20">
        <div>
          <img src={Aic_Logo} className="w-[80px]" />
        </div>
        <div className="flex flex-col text-xl ml-20 text-center">
          <h1 className="font-bold">Atal Incubation Center</h1>
          <h1>PEC Foundation - Puducherry Technology University</h1>
        </div>
        <div className="flex h-[100px] items-center justify-center gap-5">
          <div className="w-[160px]">
            <img src={Niti_Logo} />
          </div>
          <div className="w-[50px]">
            <img src={Ptu_Logo} />
          </div>
        </div>
      </div>
      {/*Navbar */}
      <NavbarDemo />
    </>
  );
};

export default Header;
