import React from "react";
import { Footer_Img } from "../../assets/Images";

const Landing = () => {
  return (
    <div className="h-screen relative">
      <div className="absolute top-[35%] right-10 bg-indigo-500 px-10 py-5 text-white text-xl tracking-widest rounded-xl">
        <h1>Creating an Instinctive</h1>
        <h1 className="mt-5">Start-Up Ecosystem</h1>
      </div>
      <img src={Footer_Img} className="w-screen h-[80%]" />
    </div>
  );
};

export default Landing;
