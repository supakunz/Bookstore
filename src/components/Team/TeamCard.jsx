import React from "react";
import Image from "next/image";

const TeamCard = ({ data }) => {
  return (
    <section>
      <div className="flex flex-col justify-center items-center text-center gap-3">
        <Image
          src={data.image}
          width={180}
          height={180}
          alt="team_image"
          quality={100}
        />
        <div className="leading-tight mt-4">
          <p className="text-[13px] text-[#999999] font-josefin tracking-[0.21rem]">
            {data.position}
          </p>
          <p className="text-[25px] font-medium">{data.name}</p>
        </div>
        <div className="max-w-[18rem]">
          <p className="text-[19px] text-[#555555]">{data.desc}</p>
        </div>
      </div>
    </section>
  );
};

export default TeamCard;
