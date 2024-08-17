import React from "react";
import { useState } from "react";
import TimeLine_info from "../../Data/TimeLine";
import { Chrono } from "react-chrono";

const Timeline = () => {
  const data = TimeLine_info.map((item, index) => {
    return {
      title: item.year,
      items: item.events.map((ele) => {
        return { cardTitle: ele.Month_year, cardSubtitle: ele.description };
      }),
    };
  });

  return (
    <div className="max-w-[90vw] flex flex-col items-center mx-auto  py-2 mt-10 rounded-xl">
      <div>
        <h1 className="text-3xl text-center font-bold  text-yellow-500 border-b-4 py-1 border-blue-500 max-w-fit ">
          What we have done so far
        </h1>
      </div>
      <div className="min-w-[90vw]  h-auto overflow-x-auto">
        <Chrono
          items={data}
          mode="VERTICAL_ALTERNATING"
          disableToolbar={true}
        />
      </div>
    </div>
  );
};

export default Timeline;
