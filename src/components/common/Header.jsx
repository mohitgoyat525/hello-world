"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HEADER_LIST } from "@/utils/helper";
import { ArrowIcon } from "@/utils/icons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);

  useEffect(() => {
    document.body.classList.toggle(
      "overflow-hidden",
      isOpen && window.innerWidth < 768
    );
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const toggleDropdown = (index) => {
    setIsDropdownOpen((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <div className="bg-black py-3 flex items-center justify-between px-4">
        <div className="flex items-center justify-between w-full max-sm:justify-center max-w-[1140px] px-4 mx-auto">
          <div className="flex items-center gap-3 max-sm:hidden">
            <p className="text-white text-base font-medium">Call Us :</p>
            <Link
              href="tel:+91-1234567890"
              className="text-white text-base font-medium"
            >
              1234567890
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-white text-base font-medium">Email :</p>
            <Link
              href="mailto:helloWorld@gmail.com"
              className="text-white text-base font-medium"
            >
              helloWorld@gmail.com
            </Link>
          </div>
        </div>
      </div>
      <nav className="flex items-center gap-5 max-w-[1140px] justify-between mx-auto px-4 py-3">
        <Link href="/">
          <Image
            src="/assets/images/avif/m-logo.avif"
            width={70}
            height={70}
            alt="logo"
            className="w-full max-w-[70px] h-[70px] max-md:max-w-[40px] max-md:h-[40px] rounded-full"
          />
        </Link>
        <div
          className={`flex items-center gap-4 max-md:flex-col max-md:fixed max-md:top-0 max-md:left-0 max-md:w-full max-md:h-screen max-md:bg-white max-md:z-[90] transition-transform ease-linear duration-300 ${
            isOpen ? "max-md:-translate-y-0" : "max-md:-translate-y-full"
          }`}
        >
          <ul className="flex items-center gap-5 max-md:min-h-screen max-md:flex-col max-md:justify-center">
            {HEADER_LIST.map((obj, i) => (
              <li key={i} className="relative">
                {obj.submenu ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(i)}
                      className="flex cursor-pointer transition-all ease-linear duration-300 hover:text-gray-950 items-center gap-2"
                    >
                      {obj.name}
                      <span
                        className={`transition-transform ease-linear duration-300 ${
                          isDropdownOpen === i ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        <ArrowIcon />
                      </span>
                    </button>
                    <ul
                      className={`absolute top-full z-10 left-0  max-md:left-14 bg-white shadow-md rounded-md transition-all ease-linear duration-300 overflow-hidden ${
                        isDropdownOpen === i
                          ? "max-h-80 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {obj.submenu.map((sub, index) => (
                        <li key={index}>
                          <Link
                            href={sub.link}
                            className="block p-2 max-md:text-xs"
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link href={obj.link}>{obj.name}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col justify-center items-center z-[100] gap-1 md:hidden relative size-6"
        >
          <span
            className={`h-1 w-full bg-black rounded transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-[8px]" : ""
            }`}
          ></span>
          <span
            className={`h-1 w-full bg-black rounded transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`h-1 w-full bg-black rounded transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-[8px]" : ""
            }`}
          ></span>
        </button>
      </nav>
    </>
  );
};

export default Header;
