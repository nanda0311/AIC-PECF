import React from "react";

const About = () => {
  return (
    <div className="py-20 bg-white z-20 relative">
      <div className="flex px-10">
        <div className="w-[50%] flex flex-col gap-3 px-10">
          <div className="bg-yellow-400 py-2 w-fit px-5 rounded-r-full">
            <h1 className="text-2xl font-semibold">About AIC-PECF</h1>
          </div>
          <div>
            <h1 className="text-justify text-lg tracking-wide">
              Atal Incubation Center - Pondicherry Engineering College
              Foundation (AIC-PECF) is fully supported and funded by the Atal
              Innovation Mission (AIM), NITI AAYOG, and Government of India.
              AIC-PECF was initated to provide a platform to assist and enable
              young
            </h1>
          </div>
        </div>
        <div className="w-[50%] px-10">
          <div className="bg-yellow-400 min-w-full min-h-[200px] rounded-l-full"></div>
        </div>
      </div>
      <div className="flex px-10 mt-10">
        <div className="w-[50%] px-10">
          <div className="bg-yellow-400 min-w-full min-h-[200px] rounded-r-full"></div>
        </div>
        <div className="w-[50%] px-10 text-lg text-justify tracking-wide flex-1 justify-center items-center flex-col">
          <h1>
            entrepreneurs to initiate start-ups for the commercial exploitation
            of technologies developed by them. AIC-PECF also enables the
            building entrepreneurs to showcase and test their abilities to run a
            start-up business in the areas of Electronics Design and
            Manufacturing (EDM), Internet of Things (IoT) and Unmanned Aerial
            Vehicle (UAV)
          </h1>
          <div className="flex justify-end">
            <button className="bg-yellow-400 px-2 py-1 rounded-lg mt-2 mr-2">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
