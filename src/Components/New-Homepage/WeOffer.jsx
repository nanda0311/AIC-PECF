import React from "react";
import tick from '../../assets/icons/tick.svg'

const WeOffer = () => {
  return (
    <div>
      {" "}
      <div className="w-[85%] mx-auto mb-20 ">
        <div className="max-w-fit ml-[-30px]">
          <h2 className="text-2xl font-semibold">WHY CHOOSE US</h2>
          {/* border bottom  */}
          <div className="mt-2 w-32 mx-auto h-[6px] rounded-full bg-yellow-400"></div>
        </div>
        <section className="flex justify-between w-full gap-20 mt-10">
          {/* text-body */}
          <aside className=" w-[50%] text-gray-600 space-y-8 text-justify leading-9">
           <h1 className="font-bold text-3xl">We Offer</h1>
           <div className="flex items-center gap-5">
                <img src={tick} alt="" className="w-12" />
                <h2 className="text-3xl font-semibold">3D Printing</h2>
           </div>
           <div className="flex items-center gap-5">
                <img src={tick} alt="" className="w-12" />
                <h2 className="text-3xl font-semibold">Co-Working space</h2>
           </div>
           <div className="flex items-center gap-5">
                <img src={tick} alt="" className="w-12" />
                <h2 className="text-3xl font-semibold">3D Printing</h2>
           </div>
           <div className="flex items-center gap-5">
                <img src={tick} alt="" className="w-12" />
                <h2 className="text-3xl font-semibold">Co-Working space</h2>
           </div>
           <div className="flex items-center gap-5">
                <img src={tick} alt="" className="w-12" />
                <h2 className="text-3xl font-semibold">3D Printing</h2>
           </div>
           <div className="flex items-center gap-5">
                <img src={tick} alt="" className="w-12" />
                <h2 className="text-3xl font-semibold">Co-Working space</h2>
           </div>
          </aside>
          <aside className="grid grid-cols-4 grid-rows-4 min-w-[60%] gap-5">
            <div className="row-span-3 row-start-2 bg-yellow-300"></div>
            <div className="row-span-3 col-span-3  bg-yellow-300"></div>
            <div className="col-span-3 bg-yellow-300"></div>
          </aside>
        </section>
      </div>
    </div>
  );
};

export default WeOffer;
