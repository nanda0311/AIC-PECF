import React from "react";
import { Footer_Img } from "../../assets/Images";
import { Aic_Logo, Ptu_Logo } from "../../assets";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Landing = () => {
  useGSAP(() => {
    gsap.from('#Main-Text',{
      y : 200,
      duration : 1
    })
    gsap.from('#Slogan',{
      opacity : 0,
      delay : 1,
      duration : 1
    })
  },[])
  return (
    <div className="w-screen h-screen  flex flex-col gap-10 justify-center items-center">
      <img
        src={Footer_Img}
        className="w-screen h-screen object-fill  absolute -z-20"
      />
      <div className="w-screen min-h-screen bg-yellow-900/25 -z-10 absolute"></div>
      <div className="flex items-center gap-4">
        <div className="text-center" id="Main-Text">
          <h1 className="text- text-5xl font-bold text-white">
            Atal Incubation Center - PEC Foundation
          </h1>
          <h1 className="text-xl tracking-widest mt-2 text-white">
            Puducherry Technological University
          </h1>
        </div>
      </div>
      <div className="bg-yellow-600 px-5 py-2" id="Slogan">
        <h1 className="text-white text-2xl tracking-widest">
          "Creating an Instinctive Start-Up Ecosystem"
        </h1>
      </div>
    </div>
  );
};

export default Landing;
