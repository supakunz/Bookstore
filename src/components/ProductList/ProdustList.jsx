import React from "react";
import BookCard from "../BookCard/BookCard";
import bookList from "../assets/bookList";

const ProdustList = () => {
  return (
    <section className="mx-auto mt-[8rem] flex flex-col gap-[4rem]">
      <div>
        <ul className="flex justify-center gap-[0.6rem] text-[18px] font-medium">
          <li className="bg-black text-white p-[9px_46px] cursor-pointer">
            All
          </li>
          <li className="text-black tracking-wide p-[9px_46px] cursor-pointer border-solid border-[1px] border-[#f3f3f3] bg-[#fff] hover:bg-black hover:text-white transition-all duration-300">
            Best Sellers
          </li>
          <li className="text-black tracking-wide p-[9px_46px] cursor-pointer border-solid border-[1px] border-[#f3f3f3] bg-[#fff] hover:bg-black hover:text-white transition-all duration-300">
            Fantasy
          </li>
          <li className="text-black tracking-wide p-[9px_46px] cursor-pointer border-solid border-[1px] border-[#f3f3f3] bg-[#fff] hover:bg-black hover:text-white transition-all duration-300">
            History
          </li>
          <li className="text-black tracking-wide p-[9px_46px] cursor-pointer border-solid border-[1px] border-[#f3f3f3] bg-[#fff] hover:bg-black hover:text-white transition-all duration-300">
            Art
          </li>
          <li className="text-black tracking-wide p-[9px_46px] cursor-pointer border-solid border-[1px] border-[#f3f3f3] bg-[#fff] hover:bg-black hover:text-white transition-all duration-300">
            Love Stories
          </li>
        </ul>
      </div>
      <div>
        <div className="grid grid-cols-5 gap-x-8 gap-y-[4rem]">
          {bookList.map((item, index) => (
            <BookCard key={index} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProdustList;
