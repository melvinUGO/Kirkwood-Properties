import { projectsData } from "@/assets/data";
import Services from "@/components/Services";
import Footer from "@/components/navigation/Footer";
import Navbar from "@/components/navigation/Navbar";
import Slider from "@/components/swiper/Slider";
import React from "react";
import { HiLocationMarker } from "react-icons/hi";

const ProjectPage = ({ params }) => {
  const projectName = params.project;

  const project = projectsData[projectName];
  return (
    <>
      <header className="project-bg">
        <div className="overlay text-white">
          <Navbar />
          <div className=" relative center max-lg:max-w-[740px] px-7 py-5 pt-20 text-center">
            <h1 className=" font-bold center pt-5 text-[36px] md:text-[4.5rem] uppercase">
              {project.title}
            </h1>
            <p className="text-white">{project.slogan}</p>
            <span className="flex items-center gap-2 w-fit pt-10 mx-auto">
              <HiLocationMarker />
              <address>{project.location}</address>
            </span>
            <a
              href="#project"
              className="mt-32 w-20 h-20 bg-kirkwood-blue border-2 border-white rounded-full font-bold text-[1.5rem] animate-bounce"
            >
              &darr;
            </a>
          </div>
        </div>
      </header>
      <div id="project" className="center py-10 md:py-20 px-5 md:px-0 bg-white">
        <Services />
        <div className="py-10 md:py-20">
          <h2 className="py-0 text-center">Site & Service</h2>
          <div className=" text-left my-3 w-[60px] h-1 bg-kirkwood-blue mx-auto"></div>
          <p className="pb-5">{project.summary1}</p>
          <p className="pb-5">{project.summary2}</p>
          <p className="pb-5">{project.summary3}</p>
        </div>
        <div className=" py-10 md:py-20 text-center flex flex-col gap-10 items-center justify-between md:flex-row ">
          <div className="w-full ">
            <div
              className="map-responsive rounded-3xl"
              dangerouslySetInnerHTML={{ __html: project.map }}
            ></div>
          </div>
          <div>
            <h2 className="py-0 text-center">Amazing Location</h2>
            <div className=" my-3 w-[60px] h-1 bg-kirkwood-blue mx-auto"></div>
            <p>{project.locationSummary}</p>
          </div>
        </div>
        <div className=" py-10 md:py-20">
          <h2 className="py-0 text-center">Facilities</h2>
          <div className=" my-3 w-[60px] h-1 bg-kirkwood-blue mx-auto"></div>
          <div className=" flex flex-col items-center gap-10 justify-between md:flex-row ">
            <ul className="w-full">
              {project.features.map((feature, index) => (
                <li key={index}>- {feature}</li>
              ))}
            </ul>
            <div className="w-full max-w-[560px] h-[463px] py-10 mx-auto">
              <Slider images={project.images} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectPage;
