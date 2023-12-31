import Image from "next/image";
import React from "react";
import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaBars,
} from "react-icons/fa";

const Personnel = () => {
  return (
    <section className="center py-10 px-5">
      <h2 className="py-0 text-center">MEET OUR TEAM</h2>
      <div className=" my-3 w-[60px] h-1 bg-kirkwood-blue mx-auto"></div>
      <p className="text-center max-w-[503px] mx-auto">
        With a proven track record of success, our experienced team of
        professionals works tirelessly to bring visionary projects to life.
      </p>
      <div className="flex flex-col md:flex-row py-10 gap-5">
        <article className=" sm:w-[246px] md:w-[360px] text-center mx-auto">
          <div className="relative sm:w-[246px] md:w-[360px] h-[300px] md:h-[380px] overflow-hidden">
            <Image
              src="/oluchi.jpg"
              alt="MD image"
              fill
              className="object-cover"
            />
          </div>
          <h2 className="py-1">Oluchi Arinze</h2>
          <p>Managing Director</p>
          <div className="flex items-center w-fit mx-auto gap-5 pt-2">
            <a
              className=" w-9 h-9 text-white p-3 rounded-full bg-[#4E5652] hover:bg-kirkwood-blue flex items-center justify-center"
              href="https://www.instagram.com/theoluchiarinze/?next=%2F"
            >
              <FaInstagram />
            </a>
            <a
              className=" w-9 h-9 text-white p-3 rounded-full bg-[#4E5652] hover:bg-kirkwood-blue flex items-center justify-center"
              href="https://www.instagram.com/theoluchiarinze/?next=%2F"
            >
              <FaTwitter />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Personnel;
