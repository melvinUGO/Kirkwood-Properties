import React from "react";
import OfficeMap from "./maps/OfficeMap";
import {
  FaClock,
  FaPhoneAlt,
  FaLinkedinIn,
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { HiMail, HiLocationMarker } from "react-icons/hi";

const ContactUsForm = () => {
  return (
    <div>
      <div className="pt-10">
        <div className=" flex flex-col lg:flex-row shadow-2xl  bg-gray-100">
          <form className=" pt-[40px] pb-[24px] px-[24px] md:p-[40px] w-full">
            <h2 className="text-center">Send Us A Message</h2>
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="text"
              className="bg-[#F3ECECC4] text-[#070707] border border-[#69727d] p-[11px] text-[15px] w-full"
            />
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              className="bg-[#F3ECECC4] text-[#070707] border border-[#69727d] p-[11px] text-[15px] w-full"
            />
            <label htmlFor="name">Message</label>
            <br />
            <textarea
              name="message"
              className="bg-[#F3ECECC4] text-[#070707] border border-[#69727d] p-[11px] text-[15px] w-full"
              id="message"
              cols="30"
              rows="5"
            ></textarea>
            <br />
            <button className="p-[11px] bg-[#69727d] hover:bg-kirkwood-blue w-full text-white">
              Send
            </button>
          </form>
          <div className="pt-[40px] pb-[24px] px-[24px] md:p-[40px] w-full lg:border-l lg:shadow-lg">
            <h2 className="text-center">Contact Info</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className=" lg:flex gap-3">
                <span className=" w-9 h-9 text-kirkwood-blue p-3 rounded-full bg-[#5A595924] flex items-center justify-center">
                  <FaPhoneAlt />
                </span>
                <span className="text-[#808285]">
                  <h3 className="font-medium text-[1.25rem]">Call Us</h3>
                  <p>0902-848-6957</p>
                  <p>0807-844-4463</p>
                </span>
              </div>
              <div className=" lg:flex gap-3">
                <span className=" p-3 w-9 h-9 text-kirkwood-blue rounded-full bg-[#5A595924] flex items-center justify-center ">
                  <HiMail />
                </span>
                <span className="text-[#808285]">
                  <h3 className="font-medium text-[1.25rem]">Our Email</h3>
                  <a href="mailto:kirkwoodproperties@yahoo.com">
                    kirkwoodproperties
                    <br />
                    @yahoo.com
                  </a>
                </span>
              </div>
              <div className=" lg:flex gap-3">
                <span className="p-3 w-9 h-9 text-kirkwood-blue rounded-full bg-[#5A595924] flex items-center justify-center">
                  <HiLocationMarker />
                </span>
                <span className="text-[#808285]">
                  <h3 className="font-medium text-[1.25rem]">Our Location</h3>
                  <address>
                    16A Chief Albert Iyorah Street, off Babatunde Anjous Avenue, Lekki, Lagos
                  </address>
                </span>
              </div>
              <div className=" lg:flex gap-3">
                <span className="p-3 w-9 h-9 text-kirkwood-blue rounded-full bg-[#5A595924] flex items-center justify-center">
                  <FaClock />
                </span>
                <span className="text-[#808285]">
                  <h3 className="font-medium text-[1.25rem]">Office Hours</h3>
                  <p>Mon-Fri: 9AM-5PM</p>
                </span>
              </div>
            </div>
            <div className="py-5">
              <h2>Follow Us</h2>
              <div className="flex gap-3 items-center">
                <span className=" w-9 h-9 text-white bg-kirkwood-blue p-3 rounded-full flex items-center justify-center">
                  <FaFacebookSquare />
                </span>
                <a
                  href="https://twitter.com/Kirkwoodpng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" w-9 h-9 text-white bg-kirkwood-blue p-3 rounded-full flex items-center justify-center"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.linkedin.com/company/kirkwood-properties-ltd/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" w-9 h-9 text-white bg-kirkwood-blue p-3 rounded-full flex items-center justify-center"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://www.instagram.com/kirkwoodproperties/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" w-9 h-9 text-white bg-kirkwood-blue p-3 rounded-full flex items-center justify-center"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OfficeMap />
    </div>
  );
};

export default ContactUsForm;
