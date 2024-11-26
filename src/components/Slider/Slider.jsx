"use client";

import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import slider from "./slider.css";
import Image from "next/image";
import { RealNext } from "./RealNext";
import { RealPrev } from "./RealPrev";

if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const options = {
  animateOut: "fadeOut",
  autoplay: true,
  autoplayTimeout: 6000,
  loop: true,
  items: 1,
  margin: 30,
  nav: true,
  mouseDrag: false,
};

const Slider = () => {
  const handleClick = (props) => {
    const prev = document.querySelector(".owl-prev");
    const next = document.querySelector(".owl-next");

    if (props == "next") {
      next.click();
    } else if (props == "prev") {
      prev.click();
    }
  };

  return (
    <div>
      <OwlCarousel {...options}>
        {/*------------------- Slider Page 1 ------------------- */}
        <div className="item w-full h-[37.5rem] 2lg:h-[30.7rem] 3xl:h-[38.8rem] relative flex justify-center text-center 2lg:text-start 2lg:justify-start items-center bg-[#efe6d5] px-[8.5rem] 3xl:px-[14rem] overflow-hidden">
          {/* Prev & Next Arrow */}
          <div className="real-nav">
            <RealPrev onClick={() => handleClick("prev")} />
            <RealNext onClick={() => handleClick("next")} />
          </div>

          <div className=" relative 2lg:absolute 2xl:right-0 -right-[3vw] 3xl:right-5 top-0">
            <div className="absolute hidden 2lg:block w-[105rem] h-[105rem] 3xl:w-[118rem] 3xl:h-[118rem] -top-[34.5rem] 3xl:-top-[36.5rem] -right-[5.5rem] 3xl:-right-[10rem] ">
              <Image
                src="/Slider/slider_02/book2.webp"
                fill
                loading="lazy"
                alt="bg01"
                style={{
                  objectFit: "contain",
                  position: "absolute",
                  zIndex: "2",
                }}
                quality={100}
              />
            </div>
            <div className="absolute hidden 2lg:block w-[90px] h-[90px] 3xl:w-[125px] 3xl:h-[125px] top-[3.8rem] 3xl:top-[7.5rem] right-[9.2rem] 3xl:right-[7rem]">
              <Image
                src="/Slider/slider_01/home-1.webp"
                fill
                loading="lazy"
                alt="home1"
                style={{
                  objectFit: "cover",
                  position: "absolute",
                  zIndex: "3",
                }}
                quality={100}
              />
            </div>
            <div className="absolute top-[9rem] right-[-19rem] transform 2lg:transform-none -translate-x-1/2 -translate-y-1/2 w-[15.5rem] h-[15.5rem] 3xl:w-[26rem] 3xl:h-[26rem] 2lg:top-[8.5rem] 3xl:top-[7rem] 2lg:right-[29rem] 3xl:right-[23.5rem]">
              <Image
                src="/Slider/slider_02/props1.webp"
                fill
                loading="lazy"
                alt="home1"
                style={{
                  objectFit: "contain",
                  position: "absolute",
                  zIndex: "3",
                }}
                quality={100}
              />
            </div>
            <div className="absolute w-[10rem] h-[10rem] top-[11rem] right-[-41rem] transform 2lg:transform-none -translate-x-1/2 -translate-y-1/2 3xl:w-[15rem] 3xl:h-[15rem] 2lg:top-[18.5rem] 3xl:top-[20rem] 2lg:right-[4.5rem] 3xl:-right-[2.5rem]">
              <Image
                src="/Slider/slider_02/props2.webp"
                fill
                loading="lazy"
                alt="home1"
                style={{
                  objectFit: "contain",
                  position: "absolute",
                  zIndex: "3",
                }}
                quality={100}
              />
            </div>
          </div>
          <div className="flex flex-col gap-[42px] mb-[10rem] 2lg:mb-4 relative">
            <div className="flex flex-col leading-10">
              <p className="font-josefin text-[12px] text-[#999999] tracking-[0.35em]">
                IT'S CHAPTERONE
              </p>
              <h1 className="text-[60px] font-medium mb-6">
                We love literature
              </h1>
              <h3 className="text-[24px] text-[#555555] max-w-[34rem] leading-[2rem] tracking-tight font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna
              </h3>
            </div>
            <div>
              <button className="p-[15px_37px] bg-[#D14031] text-white font-josefin tracking-[0.35em] text-[13px]">
                READ MORE
              </button>
            </div>
          </div>
        </div>

        {/*------------------- Slider Page 2 ------------------- */}
        <div className="item w-full h-[37.5rem] 2lg:h-[30.7rem] 3xl:h-[38.8rem] relative flex justify-center text-center items-center">
          {/* Prev & Next Arrow */}
          <div className="real-nav">
            <RealPrev onClick={() => handleClick("prev")} />
            <RealNext onClick={() => handleClick("next")} />
          </div>

          <Image
            src="/Slider/slider_01/bg01.jpg"
            fill
            loading="lazy"
            alt="bg01"
            style={{ objectFit: "cover", position: "absolute", zIndex: "-1" }}
            quality={100}
          />
          <div className="flex flex-col gap-[42px] mb-4 relative">
            <div className="w-[90px] h-[90px] absolute hidden 2lg:block -left-[7.5rem] -top-[2rem]">
              <Image
                src="/Slider/slider_01/home-1.webp"
                fill
                loading="lazy"
                alt="home1"
                style={{
                  objectFit: "cover",
                  position: "absolute",
                  zIndex: "-1",
                }}
                quality={100}
              />
            </div>
            <div className="flex flex-col leading-10">
              <p className="font-josefin text-[12px] text-[#999999] tracking-[0.35em]">
                IT'S CHAPTERONE
              </p>
              <h1 className="text-[60px] font-medium mb-6">
                Your world of words
              </h1>
              <h3 className="text-[25px] text-[#555555] max-w-[38rem] leading-[2.1rem]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna
              </h3>
            </div>
            <div>
              <button className="p-[15px_37px] bg-[#D14031] text-white font-josefin tracking-[0.35em] text-[13px]">
                READ MORE
              </button>
            </div>
          </div>
        </div>

        {/*------------------- Slider Page 3 ------------------- */}
        <div className="item w-full h-[37.5rem] 2lg:h-[30.7rem] 3xl:h-[38.8rem] text-center 2lg:text-start justify-center 2lg:justify-normal relative flex items-center bg-[#282828]">
          {/* Prev & Next Arrow */}
          <div className="real-nav">
            <RealPrev onClick={() => handleClick("prev")} color={"white"} />
            <RealNext onClick={() => handleClick("next")} color={"white"} />
          </div>

          <div className="w-[27rem] h-[27rem] 3xl:w-[34rem] 3xl:h-[34rem] absolute hidden 2lg:block left-[1.5rem] 3xl:left-[11.5rem] bottom-[0rem]">
            <Image
              src="/Slider/slider_03/book.webp"
              fill
              loading="lazy"
              alt="bg01"
              style={{ objectFit: "cover", position: "absolute", zIndex: "2" }}
              quality={100}
            />
          </div>
          <div className="flex flex-col gap-[42px] mb-4 left-0 2lg:left-[31.5rem] 3xl:left-[54rem] relative">
            <div className="w-[90px] h-[90px] 3xl:w-[125px] 3xl:h-[125px] absolute hidden 2lg:block -left-[8.6rem] 3xl:-left-[15rem] top-[0.5rem] 3xl:-top-[1.2rem]">
              <Image
                src="/Slider/slider_01/home-1.webp"
                fill
                loading="lazy"
                alt="home1"
                style={{
                  objectFit: "cover",
                  position: "absolute",
                  zIndex: "2",
                }}
                quality={100}
              />
            </div>
            <div className="flex flex-col leading-10">
              <p className="font-josefin text-[12px] text-[#999999] tracking-[0.35em]">
                &nbsp;IT'S CHAPTERONE
              </p>
              <h1 className="text-[60px] text-white font-medium mb-6">
                The all-time classics
              </h1>
              <h3 className="text-[25px] text-white max-w-[38rem] leading-[2.1rem]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna
              </h3>
            </div>
            <div>
              <button className="p-[15px_37px] bg-[#D14031] text-white font-josefin tracking-[0.35em] text-[13px]">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default Slider;
