import React, { useState } from "react";
import Image from "next/image";
import { HeaderLists } from "@/config/HeaderLists";
import { useTheme } from "next-themes";
import { AiFillSun } from "react-icons/ai";
import { RxMoon } from "react-icons/rx";

const MobileMenu = ({ isOpen, onClose, activeLink, setactiveLink}: any) => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");


  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div

          className={` fixed inset-0  dark:bg-black bg-white opacity-50 z-20 `}
          onClick={onClose}
        />
      )}

      {/* Mobile menu panel */}
      <div
        className={` fixed top-0 left-0 h-full w-64 dark:bg-black dark:text-white text-black  bg-white z-30 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        >
        <div className="flex items-center justify-between p-4">
          <Image src="/fi.png" alt="logo" width={50} height={40} />
          <button onClick={onClose} className="text-xl text-yellow-400">
            ✖
          </button>
        </div>

        {/* Menu items */}
        <div className="ml-4 mt-2 space-y-2 flex flex-col items-center gap-4 ">
          {HeaderLists.map((items, idx) => (
            <div className={` gap-4 `} key={idx}>
              <a
                href={items.link || "#"}
                onClick={() => {
                  setactiveLink(items.link);
                  onClose(); // Close the menu after clicking
                }}
                className={`${
                  activeLink === items.link && idx < 5
                    ? "dark:text-[#af6aef] "
                    : items.css
                }  transition `}
              >
                {items.icon ? (
                  theme === "dark" ? (
                    <AiFillSun
                      className="text-lg"
                      onClick={() => toggleTheme()}
                    />
                  ) : (
                    <RxMoon onClick={() => toggleTheme()} />
                  )
                ) : (
                  items.name
                )}
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
