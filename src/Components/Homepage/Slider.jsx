import React from "react";
import Home_slide from "../../Data/HomeSlider";
import { useState,useEffect } from "react";

let videoInterval;
const Slider = () => {
  const [currSlide, setCurrSlide] = useState(0);
  useEffect(() => {
    videoInterval = setInterval(() => {
    setCurrSlide((prevSLide) => ++prevSLide % Home_slide.length);
  }, 3000)

  return () => {
    clearInterval(videoInterval)
  }
},[]);

  return (
    <>
    <section className="w-screen">
      <div className="w-full h-[73vh] flex  mt-2" >
        <div  className={`flex transition-transform duration-1000`} style={{transform : `translateX(-${currSlide*100}vw)`,width : `${Home_slide.length*100}vw`}}>
        {Home_slide.map((ele) => {
          return (

            <div className="w-screen flex justify-center " onMouseOver={() => clearInterval(videoInterval)} onMouseLeave={() => videoInterval = setInterval(() => {
              setCurrSlide((prevSLide) => ++prevSLide % Home_slide.length);
            }, 3000)}>

               <img src={ele.photo} className="object-cover object-[0%_20%] w-full"/>
            </div>
          );
        })}
        </div>

      </div>
        <div className="flex gap-3 justify-center item-center py-4 ">
          {Home_slide.map((item,index) => {
             return ( <div className={`${currSlide===index? "bg-slate-800" : "bg-slate-400"} min-w-[10px] rounded-full min-h-[10px] cursor-pointer`}
               onClick = {() => {
                 setCurrSlide(index)
                 clearInterval(videoInterval)
                 videoInterval = setInterval(() => {
                  setCurrSlide((prevSLide) => ++prevSLide % Home_slide.length);
                }, 3000)
                }}
               />)
          })}
        </div>
    </section>
    </>
  );
};

export default Slider;
