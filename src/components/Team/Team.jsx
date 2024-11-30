import React from "react";
import TeamCard from "./TeamCard";
import teamList from "../assets/teamList";

const Team = () => {
  return (
    <section>
      <article className="flex flex-col items-center text-center mb-[5.3rem]">
        <p className="text-[13px] text-[#999999] font-josefin tracking-[0.21rem]">
          OUR SERVICES
        </p>
        <h1 className="text-[45px] font-medium">Authors of the month</h1>
        <p className="text-[22px] text-[#343434] max-w-[35rem] md:max-w-[40rem] leading-tight">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </article>
      <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-[3rem] lg:gap-y-0 max-w-[50rem] lg:max-w-[83rem] mx-auto">
        {teamList.map((item) => (
          <TeamCard key={item.id} data={item} />
        ))}
      </article>
    </section>
  );
};

export default Team;
