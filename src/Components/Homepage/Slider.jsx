import React from "react";
import Home_slide from "../../Data/HomeSlider";

const Slider = () => {
  return (
    <>
      <section className="w-screen flex justify-center">
        {Home_slide.map((ele) => {
          return (
            <div className="w-full flex justify-center">
              <img src={ele.photo} />
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Slider;
