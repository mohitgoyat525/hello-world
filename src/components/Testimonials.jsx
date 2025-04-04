"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { TESTIMONIALS_LIST } from "@/utils/helper";

const Testimonials = () => {
  return (
    <div className="py-20 max-md:py-10">
      <h2 className="text-4xl font-medium text-center mb-10">Testimonials</h2>
      <div className="max-w-[1140px] mx-auto px-4">
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          autoplay={{ delay: 2000,}}
          loop={true}
          navigation={true}
          modules={[Autoplay, Navigation,]}
          breakpoints={{
            1024: { slidesPerView: 4 },
            768: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
        >
          {TESTIMONIALS_LIST.map((obj, i) => (
            <SwiperSlide key={i}>
              <div className="border border-solid border-black rounded-2xl p-5 shadow-lg">
                <div className="flex gap-4">
                  <Image
                    src={obj.profile}
                    width={60}
                    height={60}
                    alt="profile"
                    className="rounded-full pointer-events-none  h-[60px] min-w-[60px]"
                  />
                  <div>
                    <p className="text-xl font-semibold text-black">
                      {obj.name}
                    </p>
                    <p className="text-base font-medium text-gray-700">
                      {obj.description}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
