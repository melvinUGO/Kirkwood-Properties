"use client";
import Image from "next/image";
import React from "react";
import Slider from "./swiper/Slider";
import { projectSoFar } from "@/assets/data";
import Link from "next/link";
import { projectInfo } from "@/assets/projectsInfo";
import { RevealWrapper } from "next-reveal";

const Projects = () => {
  return (
    <section id="projects" className=" pt-36 px-5 sm:px-9 lg:px-0">
      <div className="flex flex-col  gap-10 lg:flex-row justify-between lg:items-center">
        <div className=" relative hidden md:flex bg-kirkwood-blue w-[410px] md:h-[481px] mx-auto">
          <img
            src="/residential-space.jpg"
            alt="image"
            className=" object-cover absolute -top-8 -right-8 w-[410px] md:h-[481px]"
          />
        </div>
        <div className=" text-center md:text-left ">
          <h2 className="py-0">EXPLORE</h2>
          <div className=" my-3 w-[60px] h-1 bg-kirkwood-blue mx-auto md:mx-0"></div>
          <p className=" lg:max-w-[410px]">
            Kirkwood Properties provides evergreen tranquility for its
            residence. Take a deep dive into our city, and enjoy the wonderful
            structures and amenities within.
          </p>
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 py-36 gap-20">
        {projectInfo &&
          projectInfo.map((project, index) => (
            <RevealWrapper key={index} delay={index * 50}>
              <article className=" relative bg-kirkwood-blue w-[300px]  sm:w-[330px] lg:w-[410px] xl:w-[490px] h-[481px] mx-auto">
                <div className=" absolute -bottom-8 -right-8 w-[300px] sm:w-[330px] lg:w-[410px] xl:w-[490px] h-[481px]">
                  <img
                    src={project.image}
                    alt="image"
                    className=" object-cover w-full h-[481px]"
                  />
                  <div className=" absolute top-0 left-0 overlay p-5 text-center text-white z-30">
                    <h2>{project.title}</h2>
                    <p className="font-medium text-[1.3rem] pb-5 text-white">
                      {project.type}
                    </p>
                    <p className="text-white pb-5">{project.slogan}</p>
                    <Link
                      href={`/projects/${project.link}`}
                      className="font-semibold bg-white text-kirkwood-blue p-3 px-5"
                    >
                      EXPLORE
                    </Link>
                  </div>
                </div>
              </article>
            </RevealWrapper>
          ))}
      </div>
      <div>
        <h2 className="py-0 text-center">OUR PROJECTS SO FAR</h2>
        <div className=" my-3 w-[60px] h-1 bg-kirkwood-blue mx-auto"></div>
        <div className="max-w-[560px] h-[463px] py-10 mx-auto">
          <Slider images={projectSoFar} />
        </div>
      </div>
    </section>
  );
};

export default Projects;
