import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="w-screen flex justify-center py-2 text-lg">
        <ul className="w-full flex justify-around px-[300px]">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Portfolio</li>
          <li className="cursor-pointer">Programs</li>
          <li className="cursor-pointer">Partners</li>
          <li className="cursor-pointer">Events</li>
          <li className="cursor-pointer">Funding</li>
          <li className="cursor-pointer">Tenders</li>
          <li className="cursor-pointer">Contact Us</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
