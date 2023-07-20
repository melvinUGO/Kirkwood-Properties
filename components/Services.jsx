import React from "react";
import { FaWater } from "react-icons/fa";
import { GiTap } from "react-icons/gi";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { MdSecurity } from "react-icons/md";

const Services = () => {
  return (
    <section className="grid grid-cols-2 gap-3 md:grid-cols-4 items-center text-center p-5 py-10">
      <div>
        <div className=" border-2 border-kirkwood-blue rounded-full w-fit p-5 mb-3 text-kirkwood-blue text-[2rem] mx-auto">
          <FaWater />
        </div>
        <p>DRAINAGE</p>
      </div>
      <div>
        <div className=" border-2 border-kirkwood-blue rounded-full w-fit p-5 mb-3 text-kirkwood-blue text-[2rem] mx-auto">
          <GiTap />
        </div>
        <p>WATER</p>
      </div>
      <div>
        <div className=" border-2 border-kirkwood-blue rounded-full w-fit p-5 mb-3 text-kirkwood-blue text-[2rem] mx-auto">
          <AiTwotoneThunderbolt />
        </div>
        <p>ELECTRICITY</p>
      </div>
      <div>
        <div className=" border-2 border-kirkwood-blue rounded-full w-fit p-5 mb-3 text-kirkwood-blue text-[2rem] mx-auto">
          <MdSecurity />
        </div>
        <p>SECURITY</p>
      </div>
    </section>
  );
};

export default Services;
