import React from "react";
import { Aic_Logo } from "../../assets";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";


const Stats = () => {

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    gsap.from('#medal-icon',{
      y : 250,
      duration : 0.5,
      scrollTrigger : {
        trigger : '#medal-icon',
        start : "50px bottom"
      }
    })
  },[])

  return (
    <div className="h-screen flex justify-around items-center select-none bg-slate-50 pr-20 mb-10">
      <div className="text-4xl flex items-center gap-10 font-bold bg-white shadow-md py-10 px-20 rounded-full overflow-hidden">
        <div className="w-24" id="medal-icon">
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 71.693 122.881" enable-background="new 0 0 71.693 122.881" xml:space="preserve"><g><path fill-rule="evenodd" clip-rule="evenodd" fill="#FAB62D" d="M1.189,0.021h25.908l23.339,42.446c0.5,0.9,1.229,1.609,2.06,2.06 H17.658L1.189,0V0.021L1.189,0.021L1.189,0.021z M35.847,66.335l5.989,14.619l15.769,1.189L45.536,92.383l3.75,15.339l-13.439-8.33 l-13.439,8.33l3.75-15.339L14.078,82.134l15.769-1.19L35.847,66.335L35.847,66.335L35.847,66.335L35.847,66.335z M35.847,51.186 c19.799,0,35.847,16.049,35.847,35.847s-16.048,35.848-35.847,35.848C16.048,122.87,0,106.821,0,87.022 C0,67.225,16.048,51.186,35.847,51.186L35.847,51.186L35.847,51.186z M39.026,0.021h30.317L57.146,32.998L39.026,0.021 L39.026,0.021L39.026,0.021z"/></g></svg>
        </div>
        <div className="text-center flex flex-col gap-5">
        <h1>
          Our <span className="text-yellow-400">Achievements,</span>
        </h1>
        <h1>
          and <span className="text-yellow-400">Fundings</span>
        </h1>
        </div>
      </div>
      <div className=" rounded-full p-10 relative mr-20 bg-yellow-50">
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
            <h1 className="font-bold text-5xl ">145+</h1>
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
