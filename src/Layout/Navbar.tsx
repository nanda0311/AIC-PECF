"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "../Components/ui/navbar-menu";
import { cn } from "../lib/utils";
import Navbar_menu from "../Data/Navbar_details";

export function NavbarDemo() {
  return (
    <div className="w-full flex  justify-center">
      <Navbar className="top-2 sticky" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("top-10 inset-x-0  mx-auto z-50", className)}
      style={{ position: "sticky" }}
    >
      <Menu setActive={setActive}>
        {Navbar_menu.map((ele, index) => {
          return (
            <MenuItem
              setActive={setActive}
              key={index}
              active={ele.drop === "active" ? active : null}
              item={ele.Title}
            >
              <div className="flex flex-col space-y-4 text-sm">
                {ele.dropList?.map((listItem, index) => {
                  return (
                    <HoveredLink to={listItem.link} key={index}>
                      {listItem.title}
                    </HoveredLink>
                  );
                })}
              </div>
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
}
