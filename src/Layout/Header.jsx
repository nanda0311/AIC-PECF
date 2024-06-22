import React from "react";
import Navbar from "./Navbar";
import { Aic_Logo, Niti_Logo, Ptu_Logo } from "../assets";

const Header = () => {
  return (
    <>
      <div className="flex w-screen relative justify-center text-center gap-[100px] items-center">
        <div>
          <img src={Aic_Logo} className="w-[75px]" />
        </div>
        <div className="flex flex-col text-xl  text-center">
          <h1 className="font-bold">Atal Incubation Center</h1>
          <h1>PEC Foundation - Puducherry Technology University</h1>
        </div>
        <div className="flex h-[100px] items-center justify-center gap-5">
          <div className="w-[150px]">
            <img src={Niti_Logo} />
          </div>
          <div className="w-[40px]">
            <img src={Ptu_Logo} />
          </div>
        </div>
      </div>
      {/*Navbar */}
      <Navbar />
    </>
  );
};

export default Header;
