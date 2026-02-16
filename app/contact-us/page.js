import ContactUsForm from "@/components/ContactUsForm";
import Footer from "@/components/navigation/Footer";
import Navbar from "@/components/navigation/Navbar";
import React from "react";

export const metadata = {
  title: "Contact Us - Kirkwood Properties",
  alternates: {
    canonical: `https://www.kirkwoodproperties.ng/contact-us`,
  },
};

const ContactUsPage = () => {
  return (
    <div className="bg-white">
      {" "}
      <header className="contactUs-bg">
        <div className="overlay text-white">
          <Navbar />
          <h1 className=" font-bold center pt-5 text-[36px] md:text-[4.5rem] text-center md:text-left">
            Contact Us
          </h1>
        </div>
      </header>
      <div className="center p-3 py-20">
        <h2 className="py-0">Get in Touch</h2>
        <div className=" my-3 w-[60px] h-1 bg-kirkwood-blue"></div>
        <p className=" max-w-[600px]">
          Kirkwood Properties LTD is a dynamic, world-class real estate brand,
          driven by value innovation and optimum service to deliver functional
          homes and premium construction projects.
        </p>
        <ContactUsForm />
      </div>
      <Footer />
    </div>
  );
};

export default ContactUsPage;
