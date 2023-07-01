"use client";
import React from "react";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
import { useNavGlobalContext } from "@/contexts/navigationContext";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useNavGlobalContext();

  return (
    <div
      className={` ${
        isSidebarOpen ? " translate-x-0 " : " -translate-x-[100%] "
      }  ease-out delay-300 transition-opacity fixed top-0 left-0 z-50 w-[100vw] h-full bg-[rgba(0,0,0,0.3)] flex`}
    >
      <nav className="bg-[#ffffff] text-[#212121] h-full w-[264px] sm:w-[324px] p-[20px]">
        <button onClick={closeSidebar}>
          <RxCross1 />
        </button>
        <div
          className=" sidebar-links-container flex flex-col gap-5 py-10"
          onClick={closeSidebar}
        >
          <Link href="/" className=" hover:text-kirkwood-blue">
            Home
          </Link>
          <Link href="/about-us" className=" hover:text-kirkwood-blue">
            About us
          </Link>
          <Link href="/contact-us" className=" hover:text-kirkwood-blue">
            Contact us
          </Link>
        </div>
        <div className=" flex items-center gap-2 py-5">
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-[#111c] border border-[#111c] p-2 rounded-full w-fit"
          >
            <FaInstagram />
          </a>
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-[#111c] border border-[#111c] p-2 rounded-full w-fit"
          >
            <FaWhatsapp />
          </a>
        </div>
      </nav>
      <div className="grow" onClick={closeSidebar} />
    </div>
  );
};

export default Sidebar;
