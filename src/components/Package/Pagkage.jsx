import React from "react";

const Pagkage = () => {
  return (
    <section>
      <div className="package flex flex-col justify-center items-center gap-2 text-center bg-green-600 text-white pt-[5rem] pb-[6rem] my-[9rem]">
        <article className="flex flex-col gap-2">
          <span className="text-[1.3rem]">❦</span>
          <p className="text-[13px] font-josefin tracking-[0.21rem]">
            OUR SERVICES
          </p>
        </article>
        <article className="max-w-[45rem] mb-7">
          <p className="text-[35px] font-medium leading-[2.6rem]">
            Aorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim.
          </p>
        </article>
        <div>
          <button className="p-[15px_37px] bg-transparent border-solid border-[1px] border-white text-white font-josefin tracking-[0.35em] text-[13px] hover:bg-white hover:text-black transition-all duration-300">
            READ MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pagkage;
