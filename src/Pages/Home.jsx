import React from "react";
import Slider from "../Components/Homepage/Slider";
import AboutUs from "../Components/Homepage/AboutUs";
import Upcoming from "../Components/Homepage/Upcoming";

const Home = () => {
  return (
    <>
      <Slider />
      <AboutUs />
      <Upcoming />
      <p>Focus area</p>
      <p>stats</p>
      <p>timeline</p>
      <p>partners</p>
    </>
  );
};

export default Home;
