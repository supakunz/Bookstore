"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";

const Scroll = () => {
  const scrollTopRef = useRef();

  // Function ScrollToTop
  const srollUp = () => {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    //** ดัก Event Scroll ว่ามีการ scroll เท่าไหร่
    window.addEventListener("scroll", () => {
      // ** เมื่อมีการ Scroll มากกว่า 500
      if (window.scrollY > 500) {
        scrollTopRef.current.classList.remove("opacity-0");
      }
      // ** เมื่อมีการ Scroll น้อยกว่า 500
      if (window.scrollY < 500) {
        scrollTopRef.current.classList.add("opacity-0");
      }
    });
  }, []);

  return (
    <section>
      <div className="fixed bottom-4 right-[1.6rem] cursor-pointer">
        <div
          onClick={srollUp}
          ref={scrollTopRef}
          className="p-[9px_14px] bg-[#D14031] opacity-0 transition-opacity ease-in-out duration-300 group"
        >
          <FontAwesomeIcon
            icon={faAngleUp}
            className="text-[15px] group-hover:animate-[rotate3d_1s_linear_infinite] text-white transition ease-in-out duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Scroll;
