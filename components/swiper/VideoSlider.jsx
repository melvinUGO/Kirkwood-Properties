"use client";
import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const VideoSlider = ({ videoUrl, title = "" }) => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {videoUrl?.map((url, index) => (
          <SwiperSlide key={index}>
            <video
              controls
              loop
              muted
              playsInline
              autoplay="true"
              className="w-full max-w-[600px] mx-auto max-h-[100vh]"
            >
              <source src={url} />
            </video>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default VideoSlider;
