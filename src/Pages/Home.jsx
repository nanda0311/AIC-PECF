import React from "react";
import Slider from "../Components/Homepage/Slider";
import AboutUs from "../Components/Homepage/AboutUs";
import Upcoming from "../Components/Homepage/Upcoming";
import Stats from "../Components/Homepage/Stats";
import Timeline from "../Components/Homepage/Timeline"

const Home = () => {
  return (
    <>
      <Slider />
      <AboutUs />
      <Upcoming />
      <p>Focus area</p>
      <Stats />
      <Timeline/>
      <p>partners</p>
    </>
  );
};

export default Home;
