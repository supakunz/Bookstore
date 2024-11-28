import React from "react";
import Image from "next/image";
import gallery from "../assets/gallery";
import style from "./gallery.css";

const Gallery = () => {
  return (
    <section>
      <div className="grid grid-cols-2 grid-rows-9 2lg:grid-cols-6 2lg:grid-rows-3 gap-5">
        {gallery.map((item) => (
          <div className={`${item.class} cursor-pointer  overflow-hidden`}>
            <Image
              width={500}
              height={500}
              quality={100}
              alt="gallery"
              src={item.image}
              style={{ width: "100%", objectFit: "contain" }}
              key={item.id}
              className="hover:scale-[1.03] transition-all duration-700"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
