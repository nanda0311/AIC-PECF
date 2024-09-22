import React from "react";
import Landing from "../Components/New-Homepage/Landing";
import About from "../Components/New-Homepage/About";
import WeOffer from "../Components/New-Homepage/WeOffer";
import Stats from "../Components/New-Homepage/Stats";
import WhatWeDo from "../Components/New-Homepage/WhatWeDo";
import PhotoSlides from "../Components/New-Homepage/PhotoSlides";
import Testimonials from "../Components/New-Homepage/Testimonials";

const HomePage = () => {
  return (
    <>
      <Landing />
      <About />
      <Stats />
      <WhatWeDo />
      <PhotoSlides />
      <WeOffer />
      <Testimonials/>
    </>
  );
};

export default HomePage;
