import React from "react";
import Image from "next/image";

const NewsPage02 = () => {
  return (
    <section className="overflow-hidden">
      <div className="my-[2.5rem] w-full h-[30.7rem] 3xl:h-[38.8rem] relative flex justify-center text-center 2lg:text-start 2lg:justify-end items-center px-[2rem] 3xl:px-[14rem]">
        <div className=" relative hidden 2lg:block flex-1">
          <div className="absolute hidden 2lg:block w-[105rem] top-[2rem] left-[4rem]">
            <Image
              src="/news/section_02/news02-5.webp"
              width={235}
              height={235}
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
          <div className="absolute hidden 2lg:block w-[105rem] h-[105rem] -top-[14.8rem] left-[12rem]">
            <Image
              src="/news/section_02/news02-6.webp"
              width={410}
              height={410}
              loading="lazy"
              alt="bg01"
              style={{
                objectFit: "contain",
                position: "absolute",
                zIndex: "1",
              }}
              quality={100}
            />
          </div>
          <div className="absolute w-[24rem] h-[24rem] -top-[7rem] left-[19rem]">
            <Image
              src="/news/section_02/news02-3.webp"
              fill
              loading="lazy"
              alt="home1"
              style={{
                objectFit: "contain",
                position: "absolute",
                zIndex: "0",
              }}
              quality={100}
            />
          </div>
          <div className="absolute w-[13rem] h-[13rem] top-[7.5rem] left-[20rem]">
            <Image
              src="/news/section_02/news02-2.webp"
              fill
              loading="lazy"
              alt="home1"
              style={{
                objectFit: "contain",
                position: "absolute",
                zIndex: "0",
              }}
              quality={100}
            />
          </div>
          <div className="absolute w-[19rem] h-[19rem] -top-[14rem] left-6">
            <Image
              src="/news/section_02/news02-4.webp"
              fill
              loading="lazy"
              alt="home1"
              style={{
                objectFit: "contain",
                position: "absolute",
                zIndex: "0",
              }}
              quality={100}
            />
          </div>
        </div>
        <div className="flex 2lg:flex-1 flex-col gap-[42px] relative 2lg:ml-[10rem]">
          <div className="absolute hidden 2lg:block w-[15rem] h-[15rem] top-[14rem] left-[16rem]">
            <Image
              src="/news/section_02/news02-1.webp"
              fill
              loading="lazy"
              alt="home1"
              style={{
                objectFit: "contain",
                zIndex: "3",
              }}
              quality={100}
            />
          </div>
          <div className="flex flex-col leading-1">
            <p className="font-josefin text-[12px] text-[#999999] tracking-[0.35em]">
              AUTOBIOGRAPHY
            </p>
            <h1 className="text-[35px] font-medium mb-2">
              Travelogue of the year
            </h1>
            <h3 className="text-[19px] text-[#555555] max-w-[30rem] leading-[1.8rem] tracking-normal z-10">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud.
            </h3>
          </div>
          <div className="z-10">
            <button className="p-[15px_37px] bg-transparent text-black border-solid border-[1px] border-black font-josefin tracking-[0.35em] text-[13px] hover:bg-black hover:text-white">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsPage02;
