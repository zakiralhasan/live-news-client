import React from "react";
import BannerOne from "../../../Others/images/banner-pic-01.jpg";
import BannerTwo from "../../../Others/images/nanner-pic-02.jpg";

const RightSideCarousel = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={BannerOne} className="" alt="" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="text-white">
              ❮
            </a>
            <a href="#slide2" className="text-white">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={BannerTwo} className="w-full" alt="" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="text-white">
              ❮
            </a>
            <a href="#slide1" className="text-white">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideCarousel;
