import React from "react";
import {Link} from "react-router-dom"

const Landing = () => {
  return (
    <div className="mb-20">
      <div className="mt-10 text-gray-700">
        <h1 className="font-semibold text-6xl text-center">Atal Incubation center</h1>
        <h4 className="mt-4 text-xl text-center">Fueling Innovations, Empowering startups</h4>
      </div>
      <div className="mt-5 bg-yellow-400 font-semibold  text-lg px-10 py-2 text-white max-w-fit rounded-full mx-auto"><Link>Apply for Incubation</Link></div>
      <div className="flex justify-center gap-16 px-32 mt-10">
        <div className="max-h-80 max-w-[800px] w-full rounded-3xl bg-yellow-200"></div>
        <div className="min-h-96 w-full rounded-3xl bg-yellow-200"></div>
        <div className="max-h-80 max-w-[800px] w-full rounded-3xl bg-yellow-200"></div>
      </div>
    </div>
  );
};

export default Landing;
