import React from "react";
import { Aic_Logo } from "../../assets";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Support_Details } from "../../Data/SupportContent";

const Support = () => {
  const settings = {
    dots: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinte: true,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <div className="px-20 flex items-center flex-col">
      <div>
        <h1 className="text-3xl font-bold text-yellow-400">
          Support and Services Offered
        </h1>
      </div>
      <div className="w-screen flex justify-center">
        <Slider
          {...settings}
          className="w-[90%]  rounded-2xl py-10  px-10 flex flex-col gap-3"
        >
          {Support_Details.map((ele) => {
            return (
              <div className="px-10 py-5">
                <div className=" hover:bg-yellow-300 duration-200  py-5 flex flex-col justify-center items-center group">
                  <div className="flex w-full justify-center items-center grayscale">
                    <img src={Aic_Logo} className="" />
                  </div>
                  <div className="flex flex-col items-center py-5 px-2.5 text-center gap-3">
                    <h1 className="text-2xl font-bold">{ele.title}</h1>
                    <p>{ele.description}</p>
                    <h1 className="text-orange-400 font-bold text-xl">
                      LEARN MORE
                    </h1>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Support;
