import React from "react";

const Vision = () => {
  return (
    <div className="py-10">
      <div className="flex px-10">
        <div className="w-[50%] flex flex-col gap-3 px-10">
          <div className="bg-yellow-400 py-2 w-fit px-5 pr-10 rounded-r-full">
            <h1 className="text-3xl font-semibold tracking-wider">
              OUR VISION
            </h1>
          </div>
          <div className="mt-5">
            <h1 className="text-justify text-lg tracking-wide">
              To provide world-class incubation support for start-ups that
              promotes technological innovations to improve People's lives,
              generate employment and drive the sustainable growth of the Indian
              economy.
            </h1>
          </div>
        </div>
        <div className="w-[50%] px-10">
          <div className="bg-yellow-400 min-w-full min-h-[200px] rounded-l-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
