"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Header from "./common/Header";
import { HERO_LIST } from "@/utils/helper";

const Hero = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 2000, }}
        loop={true}
        navigation={true}
        modules={[Autoplay]}
        className="w-full h-screen"
      >
        {HERO_LIST.map((obj, i) => (
          <SwiperSlide key={i}>
            <div
              className="w-full h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${obj.bgImg})` }}
            >
              <div className="text-center text-white bg-black/40 p-6 rounded-lg mx-4">
                <h1 className="text-5xl font-medium">{obj.heading}</h1>
                <p className="text-2xl mt-4">{obj.content}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
