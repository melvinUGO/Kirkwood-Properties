import Footer from "@/components/navigation/Footer";
import Navbar from "@/components/navigation/Navbar";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "About - Kirkwood Properties",
  alternates: {
    canonical: `https://www.kirkwoodpropertiesng.com/about-us`,
  },
};

const page = () => {
  return (
    <div>
      <header className="contactUs-bg">
        <div className="overlay text-white">
          <Navbar />
          <div className=" center pt-1 pb-5 md:py-9 md:flex justify-center items-center space-y-5">
            <div className="max-w-[600px]">
              <h1 className=" font-medium center text-[30px] md:text-[4rem] text-center md:text-left">
                About <br />
                Kirkwood Properties
              </h1>
            </div>
            <p className="max-w-[278px] md:max-w-[508px] mx-auto text-white">
              Kirkwood Properties reflects the perfect lifestyle of residents,
              and the innovative hub of leading industry drivers, entrepreneurs,
              tech experts and corporate workers.
            </p>
          </div>
        </div>
      </header>
      <div className=" bg-gray-100 md:bg-transparent center py-16 px-6 md:py-20 md:px-10 lg:py-24 lg:px-0">
        <h2 className="py-0">What We Offer</h2>
        <div className=" my-3 w-[60px] h-1 bg-kirkwood-blue"></div>
        <p className=" max-w-[600px]">
          Amazing spaces, structurally equipped to meet your needs.
        </p>
        <div className=" my-10 overflow-hidden flex flex-col gap-5 md:gap-0 md:flex-row shadow-2xl max-w-[1200px] mx-auto">
          <article className="w-full h-[476px] pb-10 lg:shadow-lg bg-white">
            <div className=" relative pb-5 w-[100%] h-[218px] md:h-[164px] lg:h-[266px]">
              <Image
                src="/residential-space.jpg"
                alt="image"
                fill
                className=" object-cover"
              />
            </div>
            <div className=" pt-4 px-8">
              <h3 className="mb-5">Residential Space</h3>
              <p>
                Kirkwood Properties sites and service projects provides a
                tranquil and secured space for residents
              </p>
            </div>
          </article>
          <article className="w-full h-[476px] pb-10 lg:shadow-lg bg-white">
            <div className=" relative pb-5 w-[100%] h-[218px] md:h-[164px] lg:h-[266px]">
              <Image
                src="/investment.jpg"
                alt="image"
                fill
                className=" object-cover"
              />
            </div>
            <div className=" pt-4 px-8 ">
              <h3 className="mb-5">Investment</h3>
              <p>
                Kirkwood Properties offers a wide range of real estate
                investment opportunities, from residential to commercial
                properties.
              </p>
            </div>
          </article>
          <article className="w-full h-[476px] pb-10 lg:shadow-lg bg-white">
            <div className=" relative pb-5 w-[100%] h-[218px] md:h-[164px] lg:h-[266px]">
              <Image
                src="/facility_management.webp"
                alt="image"
                fill
                className=" object-cover"
              />
            </div>
            <div className=" pt-4 px-8">
              <h3 className="mb-5">Facility Management</h3>
              <p>
                Kirkwood Properties uses state-of-the-art technology to ensure
                that your facilities are maintained at the highest level of
                efficiency.
              </p>
            </div>
          </article>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
