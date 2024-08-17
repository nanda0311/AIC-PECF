import React from "react";
import { Aic_Logo } from "../../assets";

const Stats = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-slate-100 rounded-full p-10 relative">
        <img
          src={Aic_Logo}
          alt=""
          className="grayscale duration-200 hover:grayscale-0"
        />
        {/* */}
        <div className="absolute gap-3 flex items-center w-full -top-[25%] -right-[25%] origin-bottom-left">
          <div>
            <h1 className="w-min font-semibold text-lg">
              EMPLOYMENT GENERATED
            </h1>
          </div>
          <div>
            <h1 className="font-bold text-5xl">145+</h1>
          </div>
        </div>
        {/* */}
        <div className="absolute gap-3 flex items-center w-full top-[25%] -right-[105%] origin-bottom-left ">
          <div>
            <h1 className="font-bold text-5xl w-min text-center">3.25 Cr</h1>
          </div>
          <div>
            <h1 className="w-min font-semibold text-lg">CORPUS FUND</h1>
          </div>
        </div>
        {/* */}
        <div className="absolute gap-3 flex items-center top-[25%] -left-[55%] origin-bottom-left ">
          <div>
            <h1 className="w-min font-semibold text-lg">CORPUS FUND</h1>
          </div>
          <div>
            <h1 className="font-bold text-5xl w-min text-center">12</h1>
          </div>
        </div>
        {/* */}
        <div className="absolute gap-3 flex items-center w-full -bottom-[25%] -left-[25%] origin-bottom-left">
          <div>
            <h1 className="w-min font-semibold text-lg">STARTUP INCUBATED</h1>
          </div>
          <div>
            <h1 className="font-bold text-5xl">30</h1>
          </div>
        </div>
        {/* */}
        <div className="absolute gap-3 flex items-center w-full -bottom-[25%] -right-[75%] origin-bottom-left">
          <div>
            <h1 className="font-bold text-5xl">15L</h1>
          </div>
          <div>
            <h1 className="w-min font-semibold text-lg">CSR SECURED</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
