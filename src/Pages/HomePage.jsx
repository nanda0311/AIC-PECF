import React from "react";
import About from "../Components/New-Home/About";
import Sliders from "../Components/New-Home/Sliders";
import Vision from "../Components/New-Home/Vision";
import Slider from "../Components/Homepage/Slider";
import Stats from "../Components/New-Home/Stats";
import Timeline from "../Components/Homepage/Timeline";
import Support from "../Components/New-Home/Support";
import Landing from "../Components/New-Home/Landing";

const HomePage = () => {
  return (
    <>
      <Landing />
      <About />
      <Slider />
      <Vision />
      <Stats />
      <Support />
    </>
  );
};

export default HomePage;
