import React from "react";
import Slider from "../Components/Homepage/Slider";
import AboutUs from "../Components/Homepage/AboutUs";
import Upcoming from "../Components/Homepage/Upcoming";
import Stats from "../Components/Homepage/Stats";

const Home = () => {
  return (
    <>
      <Slider />
      <AboutUs />
      <Upcoming />
      <p>Focus area</p>
      <Stats />
      <p>timeline</p>
      <p>partners</p>
    </>
  );
};

export default Home;
