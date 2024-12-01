import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebookF,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons";
import social from "../assets/social";

const Footer = () => {
  return (
    <section className="bg-[#282828] justify-items-center">
      <footer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-[21rem] sm:px-[16rem] md:px-[12rem] lg:px-[7rem] py-[4.5rem] min-w-[1100px] xl:min-w-[1300px] text-[#C4C4C4]">
        {/* Publishers Section */}
        <div>
          <h3 className="text-xl font-semibold text-[25.5px] mb-6 text-white">
            Publishers
          </h3>
          <ul className="space-y-2 text-[17px] font-normal">
            <li>
              <a
                href="#"
                className="transition ease-in-out duration-300 hover:text-white"
              >
                Bestsellers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="transition ease-in-out duration-300 hover:text-white"
              >
                Interviews
              </a>
            </li>
            <li>
              <a
                href="#"
                className="transition ease-in-out duration-300 hover:text-white"
              >
                Authors Story
              </a>
            </li>
            <li>
              <a
                href="#"
                className="transition ease-in-out duration-300 hover:text-white"
              >
                Book Fairs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="transition ease-in-out duration-300 hover:text-white"
              >
                Help (FAQ)
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold text-[25.5px] mb-6 text-white">
            Contact
          </h3>
          <p className="mb-4 text-[17px]">
            Stay in touch with everything ChapterOne, follow us on social media
            and learn about new promotions.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              <FontAwesomeIcon
                icon={faTwitter}
                className="hover:text-white cursor-pointer transition-all duration-300"
              />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FontAwesomeIcon
                icon={faInstagram}
                className="hover:text-white cursor-pointer transition-all duration-300"
              />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FontAwesomeIcon
                icon={faFacebookF}
                className="hover:text-white cursor-pointer transition-all duration-300"
              />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FontAwesomeIcon
                icon={faDribbble}
                className="hover:text-white cursor-pointer transition-all duration-300"
              />
            </a>
          </div>
        </div>

        {/* News & Update Section */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-[25.5px] text-white">
            News & Update
          </h3>
          <p className="mb-4 text-[17px]">
            We’d love it if you subscribed to our newsletter! You’ll love it
            too.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Email..."
              className="flex-grow p-2 border border-gray-600 rounded-l-md bg-gray-800 text-white focus:outline-none focus:border-gray-400"
            />
            <button className="p-2 bg-blue-600 hover:bg-blue-700 rounded-r-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </button>
          </form>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-xl font-semibold text-[25.5px] mb-6 text-white">
            Social Media
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-2">
            {social.map((img) => (
              <figure key={img.id} className="relative">
                <Image
                  src={img.image}
                  alt={`Image ${img.name}`}
                  width={100}
                  height={100}
                  className="rounded-md"
                  style={{ objectFit: "contain", width: "100%" }}
                />
                <div className="absolute cursor-pointer flex justify-center items-center top-0 left-0 bg-[#D14031] w-full h-full text-white font-josefin text-[8.6px] tracking-[0.3em] opacity-0 hover:opacity-95 transition-opacity duration-500">
                  <p className="btn-effect">INSTAGRAM</p>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
