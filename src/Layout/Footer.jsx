import React from "react";
import { Aic_Logo } from "../assets";
import { Footer_Img } from "../assets/Images";

const Footer = () => {
  return (
    <>
      <footer
        className={`flex flex-col justify-center w-screen bg-slate-800 text-white pt-4 min-h-[75vh] relative`}
      >
        <div className="absolute z-0 w-screen top-0 h-full opacity-25">
          <img src={Footer_Img} className="w-full h-full" />
        </div>
        <div className="flex w-full justify-evenly px-20 py-4 z-10 ">
          <div className="text-center">
            <h1 className="font-bold text-lg mb-5">AIC-PECF</h1>
            <img src={Aic_Logo} className="w-[175px]" />
          </div>
          <div>
            <h1 className="font-bold text-lg mb-5">About us</h1>
            <div className="flex flex-col gap-2">
              <p>Vision</p>
              <p>Mission</p>
              <p>Who we are</p>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-lg mb-5">Quick Link</h1>
            <div className="flex flex-col gap-2">
              <p>Careers</p>
              <p>Apply</p>
              <p>Events</p>
              <p>Join us as apartner</p>
              <p>Became an invester</p>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-lg mb-5">News</h1>
            <div className="flex flex-col gap-2">
              <p>Daily News</p>
              <p>Press release</p>
              <p>Event News</p>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-lg mb-5">Contact Us</h1>
            <div className="flex flex-col gap-2">
              <p>name</p>
              <p>ceo@aicpecf.org</p>
              <p>+91 123456789</p>
              <div></div>
            </div>
          </div>
        </div>
        <div className="text-center py-4">
          {" "}
          &#169; 2024 AIC-PECF | All rights reserved
        </div>
      </footer>
    </>
  );
};

export default Footer;
