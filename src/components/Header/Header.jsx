import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebookF,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <header className=" bg-blacklight hidden lg:block">
      <div className="mx-auto px-[4%] pt-[16px] pb-[19px] text-white">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-josefin text-[10px] font-normal tracking-[0.22rem]">
              FREE SHIPING FOR ORDERS OVER $50
            </p>
          </div>
          <div className="flex items-center text-[0.94rem] gap-5">
            <FontAwesomeIcon
              icon={faTwitter}
              className="hover:text-[#D14031] cursor-pointer transition-all duration-300"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="hover:text-[#D14031] cursor-pointer transition-all duration-300"
            />
            <FontAwesomeIcon
              icon={faFacebookF}
              className="hover:text-[#D14031] cursor-pointer transition-all duration-300"
            />
            <FontAwesomeIcon
              icon={faDribbble}
              className="hover:text-[#D14031] cursor-pointer transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
