import React from "react";
import event from "../assets/event";

const Event = () => {
  return (
    <section className="mb-[10rem]">
      <article className="flex flex-col items-center text-center mb-[4.5rem]">
        <p className="text-[13px] text-[#999999] font-josefin tracking-[0.21rem]">
          EVENTS
        </p>
        <h1 className="text-[45px] font-medium">Book promotions</h1>
        <p className="text-[22px] text-[#343434] max-w-[35rem] md:max-w-[40rem] leading-tight">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </article>
      <article className="flex justify-center">
        <div>
          {event.map((item) => (
            <div className="grid grid-cols-1 gap-2 md:gap-0 md:grid-cols-[1fr_1.1fr_0.66fr] text-center items-center md:text-start last:border-none border-solid border-b-[1px] border-[#E1E1E1] py-[1.8rem] md:py-[1.1rem]">
              <p className="font-josefin text-[12px] text-[#999999] tracking-[0.27rem] border-solid border-r-[2px] border-[#E1E1E1] md:pr-[1.5rem]">
                {item.date} / {item.location}
              </p>
              <p className="text-[25px] font-medium md:pl-[3rem]">
                {item.name}
              </p>
              <div className="flex justify-center py-4 md:py-0">
                {item.status == "in" ? (
                  <button className="p-[15px_37px] bg-transparent text-black border-solid border-[1px] border-black font-josefin tracking-[0.35em] text-[13px] hover:bg-black hover:text-white">
                    SEE TICKETS
                  </button>
                ) : (
                  <button
                    disabled={true}
                    className="p-[15px_37px] w-[13rem] md:w-full bg-[#D9D9D9] text-white border-solid border-[1px] border-[#D9D9D9] font-josefin tracking-[0.35em] text-[13px]"
                  >
                    SOLD OUT
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default Event;
