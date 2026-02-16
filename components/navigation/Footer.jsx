import React from "react";
import { FaWhatsapp, FaPhoneAlt, FaLocationDot } from "react-icons/fa";
import { HiMail, HiLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="footer-bg">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="w-full footer-bg-bg">
          <div className=" max-w-[600px] mx-auto p-5 md:p-10 text-white">
            <p className="text-white">Reach out!</p>
            <h2>We'd love to hear from you</h2>
            <div className=" space-y-2">
              <span className="flex items-center gap-2">
                <HiMail />
                <a href="mailto:kirkwoodproperties@yahoo.com">
                  kirkwoodproperties@yahoo.com
                </a>
              </span>
              <span className="flex items-center gap-2">
                <FaPhoneAlt />
                <div className="flex flex-col">
                  <a href="tel:+2349028486957">09028486957</a>
                  <a href="tel:+2348078444463">08078444463</a>
                </div>
              </span>
              <span className="flex items-center gap-2">
                <FaWhatsapp />
                <a href="tel:+2349028486957">09028486957</a>
              </span>
              <span className="flex items-center gap-2">
                <HiLocationMarker />
                <address>
                  16A Chief Albert Iyorah Street, off Babatunde Anjous Avenue,
                  Lekki, Lagos.
                </address>
              </span>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className=" max-w-[600px] mx-auto p-5 md:p-10">
            <div className=" max-w-[600px] mx-auto p-[13px] md:p-[70px] bg-[#E6DFDFE6] ">
              <label htmlFor="name">Name</label>
              <br />
              <input
                id="name"
                aria-label="name"
                type="text"
                className="bg-[#F3ECECC4] text-[#070707] border border-[#69727d] p-[11px] text-[15px] w-full"
              />
              <label htmlFor="email">Email</label>
              <br />
              <input
                id="email"
                aria-label="email"
                type="email"
                className="bg-[#F3ECECC4] text-[#070707] border border-[#69727d] p-[11px] text-[15px] w-full"
              />
              <label htmlFor="name">Message</label>
              <br />
              <textarea
                aria-label="message"
                name="message"
                className="bg-[#F3ECECC4] text-[#070707] border border-[#69727d] p-[11px] text-[15px] w-full"
                id="message"
                cols="30"
                rows="5"
              ></textarea>
              <br />
              <button className="p-[11px] bg-black w-full text-white">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
