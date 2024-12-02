import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faBagShopping,
  faMagnifyingGlass,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="mx-auto flex justify-between p-[0.6rem_9%] lg:p-[1.6rem_4%] border-solid border-b-[1px] border-[#E1E1E1] lg:border-none mb-[2.5rem] lg:mb-0">
      <div className="flex gap-[2.9rem]">
        <div className="w-[62px] h-[50px] relative">
          <a href="#">
            <Image src="/logo.webp" fill sizes="100" alt="logo" quality={100} />
          </a>
        </div>
        <div className="hidden lg:flex gap-6 text-[20px] font-medium">
          <ul className="flex items-center gap-[9px] text-[#D14031] cursor-pointer transition-all duration-300">
            <p>Home</p>
            <FontAwesomeIcon icon={faAngleDown} className="text-[10px]" />
          </ul>
          <ul className="flex items-center gap-[9px] hover:text-[#D14031] cursor-pointer transition-all duration-300">
            <p>Pages</p>
            <FontAwesomeIcon icon={faAngleDown} className="text-[10px]" />
          </ul>
          <ul className="flex items-center gap-[9px] hover:text-[#D14031] cursor-pointer transition-all duration-300">
            <p>Events</p>
            <FontAwesomeIcon icon={faAngleDown} className="text-[10px]" />
          </ul>
          <ul className="flex items-center gap-[9px] hover:text-[#D14031] cursor-pointer transition-all duration-300">
            <p>Blog</p>
            <FontAwesomeIcon icon={faAngleDown} className="text-[10px]" />
          </ul>
          <ul className="flex items-center gap-[9px] hover:text-[#D14031] cursor-pointer transition-all duration-300">
            <p>Shop</p>
            <FontAwesomeIcon icon={faAngleDown} className="text-[10px]" />
          </ul>
        </div>
      </div>
      <div className="flex gap-4 items-center text-[20px]">
        <div className="flex gap-5 font-josefin hover:text-[#D14031] cursor-pointer transition-all duration-300">
          <span className="pt-1 relative">
            <FontAwesomeIcon icon={faBagShopping} className="text-[25px]" />
            <span className="absolute left-[19px] h-[15px] w-[15px] bg-red-500 rounded-full text-center text-[8px] font-normal text-white">
              <p className="mt-[2px]">0</p>
            </span>
          </span>
          <p className="mt-[14px] text-[11px] font-normal tracking-widest">
            $0.00
          </p>
        </div>
        <div className="hidden lg:block w-[1px] h-[12px] bg-black"></div>
        <div className="hidden lg:flex items-center">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="hover:text-[#D14031] cursor-pointer transition-all duration-300"
          />
        </div>
        <div className="hidden lg:block w-[1px] h-[12px] bg-black"></div>
        <FontAwesomeIcon
          icon={faBars}
          className=" hover:text-[#D14031] cursor-pointer transition-all duration-300"
        />
      </div>
    </nav>
  );
};

export default Navbar;
