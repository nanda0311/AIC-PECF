import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="w-screen flex justify-center py-2 font-bold">
        <ul className="w-full flex justify-around px-[300px]">
          <li>Home</li>
          <li>Portfolio</li>
          <li>Programs</li>
          <li>Partners</li>
          <li>Events</li>
          <li>Funding</li>
          <li>Tenders</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
