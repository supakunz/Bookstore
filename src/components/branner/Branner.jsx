import React from "react";
import Image from "next/image";
import branner from "../assets/branner";

const Branner = () => {
  return (
    <section>
      <article className="grid grid-cols-1 gap-y-5 sm:grid-cols-2 lg:grid-cols-6 justify-items-center mb-[7.5rem]">
        {branner.map((item) => (
          <figure
            key={item.id}
            className="relative w-[9rem] h-[9rem] cursor-pointer transition ease-in-out duration-300 hover:-translate-y-2"
          >
            <Image
              fill
              sizes="100"
              src={item.image}
              alt={item.name}
              style={{ objectFit: "contain" }}
            />
          </figure>
        ))}
      </article>
    </section>
  );
};

export default Branner;
