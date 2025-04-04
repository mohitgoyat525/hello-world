import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SOCIAL_MEDIA_LIST } from '@/utils/helper'
const Footer = () => {
  return (
    <div className="bg-black py-20 max-md:py-10">
      <footer className="w-full flex items-center max-sm:flex-wrap max-sm:gap-5 justify-between max-w-[1140px] mx-auto px-4">
        <div>
          <Link href="/">
            <Image
              src="/assets/images/avif/m-logo.avif"
              width={50}
              height={50}
              alt="logo"
              className="w-full max-w-[50px] bg-white rounded-full"
            />
          </Link>
          <h2 className="text-white text-3xl font-medium py-5">Hello World</h2>
          <div className="flex items-center gap-5 ">
            {SOCIAL_MEDIA_LIST.map((obj, i) => (
              <Link
                target="_blank"
                className="transition-all ease-linear duration-300 hover:scale-105"
                href={obj.link}
                key={i}
              >
                <Image
                  src={obj.iconName}
                  alt="social-icon"
                  width={50}
                  height={50}
                  className="w-full max-w-[50px] max-sm:max-w-[30px] rounded-full"
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="">
          <h2 className="text-2xl font-medium text-white">Contact List</h2>
          <ul>
            <li className="text-white text-base font-medium flex items-center gap-3 pt-5">
              <span>Call Us :</span>
              <Link
                href="tel:+91 123456789"
                className="transition-all ease-linear duration-300 hover:text-gray-600"
              >
                123456789
              </Link>
            </li>
            <li className="text-white text-base font-medium flex items-center gap-3 py-5">
              <span>Email Us :</span>
              <Link
                href="mailto:helloworld@gmail.com"
                className="transition-all ease-linear duration-300 hover:text-gray-600"
              >
                helloworld@gmail.com
              </Link>
            </li>
            <li className="text-white text-base font-medium flex items-center gap-3 ">
              <span>Location :</span>
              <Link
                href="#"
                className=" transition-all ease-linear duration-300 hover:text-gray-600"
              >
                hisar,Haryana
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer