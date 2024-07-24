import React from "react";
import Stats_data from '../../Data/Stats_details'

const Stats = () => {
  return (
  <div className="mx-auto w-[85vw] px-10 py-4 grid grid-cols-4 gap-8 grid-rows-2">
   {
    Stats_data.map((item,index) => {
       return ( <div key={index} className={`${index%2===0 ? "border-blue-600" : "border-orange-600"} bg-gray-100 rounded-md border-l-4 hover:scale-105 duration-300  text-black text-lg p-4`}>
          <img src={item.logo} alt="icon" className="text-sm"/>
          <h1>{item.Title}</h1>
          <h3>{item.count}+</h3>
        </div>
       )
    })
   }
  </div>);
};

export default Stats;
