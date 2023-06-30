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
    <nav className=" border-b border-b-[rgba(255,255,255,0.08)]">
      <div className=" hidden center md:flex justify-between items-center py-3 px-7 bg-transparent">
        <Link href="/" className="relative w-[175px] h-[65px]">
          <Image src={logo} fill className="object-contain" priority />
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/">Home</Link>
          <Link href="/about-us">About</Link>
          <Link href="/contact-us">Contact Us</Link>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="center md:hidden flex justify-between items-center py-3 px-7 bg-transparent">
        <div></div>
        <div className="relative w-[170px] h-[90px]">
          <Image src={logo} fill className="object-contain" priority />
        </div>
        <button
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
