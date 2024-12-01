import React from "react";
import Image from "next/image";

const NewsPage01 = () => {
  return (
    <section className="overflow-hidden">
      <div className="my-[10rem] w-full h-[30.7rem] 3xl:h-[38.8rem] relative flex justify-center text-center 2lg:text-start 2lg:justify-start items-center bg-[#FAF9F5] px-[6rem] 3xl:px-[14rem]">
        <div className=" relative hidden 2lg:block 2lg:absolute 2xl:right-0 -right-[3vw] 3xl:right-5 top-0">
          <figure className="absolute hidden 2lg:block w-[105rem] top-[11.3rem] -left-[34rem]">
            <Image
              src="/news/section_01/news01-3.webp"
              width={370}
              height={370}
              loading="lazy"
              alt="bg01"
              style={{
                objectFit: "contain",
                position: "absolute",
                zIndex: "2",
              }}
              quality={100}
            />
          </figure>
          <figure className="absolute hidden 2lg:block w-[105rem] h-[105rem] -top-[2.5rem] -left-[40.3rem]">
            <Image
              src="/news/section_01/news01-2.webp"
              width={330}
              height={330}
              loading="lazy"
              alt="bg01"
              style={{
                objectFit: "contain",
                position: "absolute",
                zIndex: "1",
              }}
              quality={100}
            />
          </figure>
          <figure className="absolute w-[15.5rem] h-[15.5rem] top-[3.8rem] right-[8rem]">
            <Image
              src="/news/section_01/news01-4.webp"
              fill
              sizes="100"
              loading="lazy"
              alt="home1"
              style={{
                objectFit: "contain",
                position: "absolute",
                zIndex: "0",
              }}
              quality={100}
            />
          </figure>
          <figure className="absolute w-[6.5rem] h-[6.5rem] top-[2.5rem] right-[11.2rem]">
            <Image
              src="/news/section_01/news01-5.webp"
              fill
              sizes="100"
              loading="lazy"
              alt="home1"
              style={{
                objectFit: "contain",
                position: "absolute",
                zIndex: "0",
              }}
              quality={100}
            />
          </figure>
          <figure className="absolute transform 2lg:transform-none -translate-x-1/2 -translate-y-1/2 w-[11.5rem] h-[11.5rem] top-[23rem] right-[42rem]">
            <Image
              src="/news/section_01/news01-7.webp"
              fill
              sizes="100"
              loading="lazy"
              alt="home1"
              style={{
                objectFit: "contain",
                position: "absolute",
                zIndex: "3",
              }}
              quality={100}
            />
          </figure>
          <figure className="absolute w-[27rem] h-[27rem] -top-[1rem] right-[25rem]">
            <Image
              src="/news/section_01/news01-6.webp"
              fill
              sizes="100"
              loading="lazy"
              alt="home1"
              style={{
                objectFit: "contain",
                position: "absolute",
                zIndex: "0",
              }}
              quality={100}
            />
          </figure>
        </div>
        <article className="flex flex-col gap-[42px] relative">
          <div className="flex flex-col leading-1">
            <p className="font-josefin text-[12px] text-[#999999] tracking-[0.35em]">
              AUTOBIOGRAPHY
            </p>
            <h1 className="text-[35px] font-medium mb-2">
              This month's guest host
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
        </article>
      </div>
    </section>
  );
};

export default NewsPage01;
