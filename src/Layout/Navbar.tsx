"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "../Components/ui/navbar-menu";
import { cn } from "../lib/utils";
import Navbar_menu from "../Data/Navbar_details";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
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
