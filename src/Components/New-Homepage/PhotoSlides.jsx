import React from "react";
import { Aic_Logo } from "../../assets";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const PhotoSlides = () => {
  const Logo = [
    {
      img: Aic_Logo,
    },
    {
      img: Aic_Logo,
    },
    {
      img: Aic_Logo,
    },
    {
      img: Aic_Logo,
    },
    {
      img: Aic_Logo,
    },
    {
      img: Aic_Logo,
    },
    {
      img: Aic_Logo,
    },
    {
      img: Aic_Logo,
    },
    {
      img: Aic_Logo,
    },
    {
      img: Aic_Logo,
    },
    {
      img: Aic_Logo,
    },
  ];

  useGSAP(() => {
    gsap.to("#clientScroll", {
      x: -4071,
      duration: 50,
      ease: "none",
      repeat: -1,
    });

    gsap.to("#clientScroll-2", {
      x: 4071,
      duration: 60,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <div className="relative min-h-screen py-10 w-screen flex flex-col justify-center  logos-center select-none bg-[#F7F7F7] poppins-regular">
      {/* Partners Section */}

      {/* CLient Section */}

      <section className="flex flex-col">
        <div className="mt-4 px-10">
          {/* clients logo horizontal scroll */}
          <div className="flex flex-col gap-6  logos-center justify-center bg-white rounded-xl shadow-2xl">
            <div className=" py-2 md:py-4 w-full flex-wrap overflow-hidden">
              <div id="clientScroll" className={`flex`}>
                {Logo.map((logo, index) => {
                  return (
                    <img
                      key={index}
                      src={logo.img}
                      className={`px-6 object-contain  duration-500`}
                      id="clientImage"
                    ></img>
                  );
                })}
                {Logo.map((logo, index) => {
                  return (
                    <img
                      key={index}
                      src={logo.img}
                      className={`px-6 object-contain  duration-500`}
                    ></img>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col">
        <div className="mt-4 px-10">
          {/* clients logo horizontal scroll */}
          <div className="flex flex-col gap-6 logos-center justify-center bg-white rounded-xl shadow-2xl">
            <div className=" py-2 md:py-4 w-full flex-wrap overflow-hidden">
              <div
                id="clientScroll-2"
                className={`flex justify-evenly -translate-x-[4171px]`}
              >
                {Logo.map((logo, index) => {
                  return (
                    <img
                      key={index}
                      src={logo.img}
                      className={`px-6 object-contain  duration-500`}
                      id="clientImage"
                    ></img>
                  );
                })}
                {Logo.map((logo, index) => {
                  return (
                    <img
                      key={index}
                      src={logo.img}
                      className={`px-6 object-contain  duration-500`}
                      id="clientImage"
                    ></img>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col ">
        <div className="mt-4 px-10">
          {/* clients logo horizontal scroll */}
          <div className="flex flex-col gap-6 logos-center justify-center bg-white rounded-xl shadow-2xl">
            <div className=" py-2 md:py-4 w-full flex-wrap overflow-hidden">
              <div id="clientScroll" className={`flex`}>
                {Logo.map((logo, index) => {
                  return (
                    <img
                      key={index}
                      src={logo.img}
                      className={`px-6 object-contain  duration-500`}
                      id="clientImage"
                    ></img>
                  );
                })}
                {Logo.map((logo, index) => {
                  return (
                    <img
                      key={index}
                      src={logo.img}
                      className={`px-6 object-contain  duration-500`}
                    ></img>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhotoSlides;
