"use client";
import Image from "next/image";
import React from "react";
import logo from "../../public/logo.png";
import Link from "next/link";
import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaBars,
} from "react-icons/fa";
import { useNavGlobalContext } from "@/contexts/navigationContext";

const Navbar = () => {
  const { openSidebar } = useNavGlobalContext();
  return (
    <nav className=" border-b bg-white mb-16 md:mb-0">
      <div className=" hidden center md:flex justify-between items-center py-3 px-7 bg-transparent">
        <Link
          href="/"
          className="relative w-[175px] h-[65px]"
          aria-label="home page"
        >
          <Image
            src={logo}
            alt="logo"
            fill
            className="object-contain"
            priority
          />
        </Link>
        <div className="flex items-center gap-6 font-medium text-kirkwood-blue">
          <Link href="/">Home</Link>
          <Link href="/about-us">About</Link>
          <Link href="/contact-us">Contact Us</Link>
          <a
            href="https://twitter.com/Kirkwoodpng"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="kirkwwod properties twitter page"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/kirkwoodproperties/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="kirkwwod properties instagram page"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="center md:hidden flex justify-between items-center py-3 px-7 bg-transparent">
        <div></div>
        <Link
          href="/"
          className="relative w-[175px] h-[65px]"
          aria-label="home page"
        >
          <Image
            src={logo}
            alt="logo"
            fill
            className="object-contain"
            priority
          />
        </Link>
        <button
          aria-label="side bar button"
          role="button"
          type="button"
          className="text-[1.3rem] text-kirkwood-blue"
          onClick={openSidebar}
        >
          <FaBars />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
