import React from "react";
import Home_slide from "../../Data/HomeSlider";
import { useState, useEffect } from "react";
import { arrowIcon } from "../../assets";

let videoInterval;
const SLIDE_SHOW_DELAY = 4000;

const Slider = () => {
  const [currSlide, setCurrSlide] = useState(0);
  useEffect(() => {
    videoInterval = setInterval(() => {
      setCurrSlide((prevSLide) => ++prevSLide % Home_slide.length);
    }, SLIDE_SHOW_DELAY);
    return () => {
      clearInterval(videoInterval);
    };
  }, [currSlide]);

  return (
    <>
      <section className="w-screen relative">
        <div className="relative w-full h-[73vh] flex  mt-2">
          <div
            className={`flex transition-transform duration-1000`}
            style={{
              transform: `translateX(-${currSlide * 100}vw)`,
              width: `${Home_slide.length * 100}vw`,
            }}
          >
            {Home_slide.map((ele, i) => {
              return (
                <div className="w-screen px-20 flex justify-center " key={i}>
                  <img
                    src={ele.photo}
                    className="object-cover object-[0%_20%] w-full rounded-3xl"
                  />
                </div>
              );
            })}
          </div>
        </div>
        {/* bubbles for navigation of slides */}
        <div className="flex gap-3 justify-center item-center py-4 absolute bottom-2 w-full">
          {Home_slide.map((item, index) => {
            return (
              <div
                key={index}
                className={`${
                  currSlide === index ? "bg-yellow-300" : ""
                } min-w-[15px] border-[2px] border-white rounded-full min-h-[15px] cursor-pointer`}
                onClick={() => {
                  setCurrSlide(index);
                  clearInterval(videoInterval);
                  videoInterval = setInterval(() => {
                    setCurrSlide(
                      (prevSLide) => ++prevSLide % Home_slide.length
                    );
                  }, SLIDE_SHOW_DELAY);
                }}
              />
            );
          })}
        </div>
        {/* arrows for navigating slides */}
        <div
          className="absolute top-[50%] bot left-0 py-5 px-3 cursor-pointer bg-yellow-400/75 shadow-lg"
          onClick={() =>
            setCurrSlide((prevSlide) => --prevSlide % Home_slide.length)
          }
        >
          <img src={arrowIcon} alt="prev" className=" w-12" />
        </div>
        <div
          className="absolute  top-[50%] bot right-0 py-5 px-3 cursor-pointer bg-yellow-400/75 shadow-lg"
          onClick={() =>
            setCurrSlide((prevSlide) => ++prevSlide % Home_slide.length)
          }
        >
          <img src={arrowIcon} alt="next" className="rotate-180 w-12" />
        </div>
      </section>
    </>
  );
};

export default Slider;
