import React from "react";
import arrow from "../../assets/icons/right-arrow.svg"

const data = ["Startups & Innovators", "Industry/Corporates", "Colleges/Students", "Mentors/Investors", "Govt. Departments", "Teachers/Students"]

const WhatWeDo = () => {
  return (
    <div className="w-[85%] mx-auto mb-20 ">
      <div className="max-w-fit ml-[-30px]">
        <h2 className="text-2xl font-semibold">WHAT WE DO?</h2>
        {/* border bottom  */}
        <div className="mt-2 w-32 mx-auto h-[6px] rounded-full bg-yellow-400"></div>
      </div>
      <div className="mt-10 grid grid-row-2 grid-cols-3 gap-x-10 gap-y-16">
        {
            data.map((item,index) => {
               return ( <div key={index} className="space-y-5">
                    <div className=" flex justify-between items-center bg-yellow-400 text-white font-bold text-2xl px-4 py-6 rounded-xl">
                        <h1>{item}</h1>
                        <img src={arrow} alt="" className="w-12" />
                    </div>
                    <p className="px-5 text-xl text-justify">AIC_PECF Services for startups, innovators, industries, and academia to colloborate with us and advance their innovations</p>
                </div> )
            })
        }
      </div>
    </div>
  );
};

export default WhatWeDo;
