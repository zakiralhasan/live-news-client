import React from "react";
import BannerOne from "../../../Others/images/banner-pic-01.jpg";
import BannerTwo from "../../../Others/images/nanner-pic-02.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";

const RightSideCarousel = () => {
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img className="w-full" src={BannerOne} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={BannerTwo} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default RightSideCarousel;
