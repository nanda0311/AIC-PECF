import React from "react";
import Stats_data from '../../Data/Stats_details'
import { useState } from "react";
import CountUp from "react-countup";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Stats = () => {

  const [statsInView,setStatsInView] = useState(false);

  useGSAP(() => {
    gsap.to("#stats", {
      scrollTrigger: {
        trigger: "#stats",
        start: "100px bottom",
        onToggle: () => setStatsInView(true),
      },
    });
  },[])

  return (
  <div className="mx-auto w-[85vw] px-10 py-4 grid grid-cols-4 gap-8 grid-rows-2 select-none" id="stats">
   {
    Stats_data.map((item,index) => {
       return ( <div key={index} className={`${index%2===0 ? "border-blue-600" : "border-orange-600"} group flex justify-between items-center bg-gray-100 rounded-md border-l-4 duration-300  text-black text-lg p-4`}>
          <div className="group-hover:-translate-y-2 duration-500">
          <h1>{item.Title}</h1>
          <h3 className="font-semibold text-2xl">{statsInView ? <CountUp start={0} end={item.count} duration={3}></CountUp> : 0}+</h3>
          </div>
          <img src={item.logo} alt="icon" className="text-sm group-hover:-translate-y-2 duration-300"/>
        </div>
       )
    })
   }
  </div>);
};

export default Stats;
