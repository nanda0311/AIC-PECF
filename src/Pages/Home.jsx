import React from "react";
import Slider from "../Components/Homepage/Slider";
import AboutUs from "../Components/Homepage/AboutUs";
import Upcoming from "../Components/Homepage/Upcoming";
import Stats from "../Components/Homepage/Stats";
import Timeline from "../Components/Homepage/Timeline";
import Partners from "../Components/Homepage/Partners";
import Landing from "../Components/Homepage/Landing";

const Home = () => {
  return (
    <>
      <Landing />
      <Slider />
      <AboutUs />
      <Upcoming />
      <p>Focus area</p>
      <Stats />
      <Timeline />
      <Partners />
    </>
  );
};

export default Home;
