import React from "react";
import arrow from "../../assets/icons/right-arrow.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const data = [
  "Startups & Innovators",
  "Industry/Corporates",
  "Colleges/Students",
  "Mentors/Investors",
  "Govt. Departments",
  "Teachers/Students",
];

const WhatWeDo = () => {
  useGSAP(() => {
    gsap.from("#arrow", {
      x: -70,
      duration: 1,
      scrollTrigger: {
        trigger: "#arrow",
      },
    });
    gsap.from("#text", {
      y: -150,
      duration: 1,
      scrollTrigger: {
        trigger: "#arrow",
        start: "top center",
      },
    });
    gsap.from("#border-bottom-1", {
      width: 0,
      duration: 0.7,
      scrollTrigger: {
        trigger: "#border-bottom-1",
        start: "200px bottom",
      },
    });
  }, []);

  return (
    <div className="w-[85%] mx-auto mb-20 py-10">
      <div className="max-w-fit ml-[-30px]">
        <h2 className="text-2xl font-semibold">WHAT WE DO?</h2>
        {/* border bottom  */}
        <div
          id="border-bottom-1"
          className="mt-2 w-32 mx-auto h-[6px] rounded-full bg-customBlue"
        ></div>
      </div>
      <div className="mt-10 grid grid-row-2 grid-cols-3 gap-x-10 gap-y-16">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="space-y-5 border border-customBlue rounded-2xl pb-5"
            >
              <div className=" flex justify-between items-center bg-customBlue text-white font-bold text-2xl px-4 py-6 rounded-xl">
                <h1>{item}</h1>
                <img id="arrow" src={arrow} alt="" className="w-12" />
              </div>
              <div className="overflow-hidden">
                <p id="text" className="px-5 relative text-xl text-justify">
                  AIC_PECF Services for startups, innovators, industries, and
                  academia to colloborate with us and advance their innovations
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhatWeDo;
