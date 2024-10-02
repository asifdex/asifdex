import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { AiFillSun } from "react-icons/ai";
import { RxMoon } from "react-icons/rx";
import CustomBtn from "../ui/CustomBtn";
import { CiMenuFries } from "react-icons/ci";
import {HeaderLists} from "../../config/HeaderLists";
import MobileMenu from "../MobileMenu";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isScroll, setScroll] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setactiveLink] = useState<string>(HeaderLists[0].link);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleclick = (link: string, isIcon?: boolean) => {
    if (isIcon) {
      setTheme(theme === "dark" ? "light" : "dark");
    } else {
      setactiveLink(link);
    }
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div
    className={`w-full h-20 md:h-28 fixed z-50 dark:bg-black bg-white flex ${
      isScroll ? "md:backdrop-blur-md md:dark:bg-opacity-50 md:bg-opacity-60" : ""
    } px-5 md:px-14 xl:px-20`}
  >      <div className="max-w-7xl mx-auto w-full flex h-full justify-between items-center">
        <div className="flex items-center gap-2">
          <Image
            src="/fi.png"
            alt="logo"
            width={50}
            height={40}
            className="object-contain"
          />
          <h1 className="hidden md:inline md:text-[30px] xl:text-[34px] italic ">
            Asifdex
          </h1>
        </div>
        <div className="md:flex hidden items-center justify-between gap-5">
          {HeaderLists.map((items, idx) => (
            <a
              key={idx}
              onClick={() => handleclick(items.link, !!items.icon)}
              href={items.link || "#"}
              className={`${
                activeLink === items.link && idx < 5 
                  ? "dark:text-[#af6aef] "
                  : items.css
              }  transition `}
            >
              {items.icon ? (
                theme === "dark" ? (
                  <AiFillSun className="text-lg" />
                ) : (
                  <RxMoon />
                )
              ) : (
                items.name
              )}
            </a>
          ))}
        </div>
        <div className="flex md:hidden">
        <CustomBtn
              text={<CiMenuFries className="text-2xl" />}
              handleclick={toggleMobileMenu}
              othercss=""
            />
            <MobileMenu isOpen={isMenuOpen} onClose={toggleMobileMenu} activeLink={activeLink} isScroll={isScroll}  setactiveLink={setactiveLink}/>
        </div>

      </div>
    </div>
  );
};

export default Header;
