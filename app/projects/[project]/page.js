import { projectsData } from "@/assets/data";
import Services from "@/components/Services";
import Footer from "@/components/navigation/Footer";
import Navbar from "@/components/navigation/Navbar";
import Slider from "@/components/swiper/Slider";
import React from "react";
import { HiLocationMarker } from "react-icons/hi";

export async function generateMetadata({ params }) {
  const projectName = params.project;

  const project = projectsData[projectName];

  return {
    title: `${project.title} - Kirkwood Properties ltd`,
    description: project.summary1,
    keywords: [
      `${project.title}`,
      "kirkwood properties project",
      "real estate projects",
      "real estate development",
      "new construction",
      "commercial real estate",
      "residential real estate",
      "luxury real estate",
      "waterfront property",
      "golf course homes",
      "country club homes",
      "equestrian property",
      "rural property",
      "urban real estate",
      "suburban real estate",
      "foreclosed properties",
      "commercial real estate",
      "investment properties",
      "property management",
      "real estate agents",
      "real estate brokers",
      "real estate professionals",
      "real estate services",
      "real estate investment",
      "real estate financing",
      "real estate trends",
      "real estate market",
      "mini estates",
      "terraces",
      "duplexes",
      "new construction",
      "modern homes",
      "spacious homes",
      "open floor plans",
      "high ceilings",
      "gourmet kitchens",
      "luxurious bathrooms",
      "private balconies",
      "rooftop terraces",
      "resort-style amenities",
      "gated communities",
      "walking distance to shops and restaurants",
      "close to public transportation",
      "family-friendly neighborhoods",
      "pet-friendly communities",
    ],
    alternates: {
      canonical: `https://www.kirkwoodpropertiesng.com/projects/${projectName}`,
    },
  };
}

const ProjectPage = ({ params }) => {
  const projectName = params.project;

  const project = projectsData[projectName];
  return (
    <div className="bg-white">
      <header className="project-bg">
        <div className="overlay text-white">
          <Navbar />
          <div className=" relative center max-lg:max-w-[740px] px-7 py-5 pt-20 text-center">
            <h1 className=" font-bold center pt-5 text-[36px] md:text-[4.5rem] uppercase">
              {project.title}
            </h1>
            <p className="text-white">{project.slogan}</p>
            <span className="flex items-center gap-2 w-fit pt-10 pb-20 mx-auto">
              <HiLocationMarker />
              <address>{project.location}</address>
            </span>
            <a
              href="#project"
              className="p-3  w-20 h-20 bg-kirkwood-blue border-2 border-white rounded-full font-bold text-[1.5rem]  animate-bounce"
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
            <div className="w-full">
              <ul className="md:w-fit mx-auto md:text-[1.2rem]">
                {project.features.map((feature, index) => (
                  <li key={index}>- {feature}</li>
                ))}
              </ul>
            </div>
            <div className="w-full max-w-[560px] h-[463px] py-10 mx-auto">
              <Slider images={project.images} title={project.title} />
            </div>
          </div>
        </div>
        {project.video_url && (
          <div className="py-10 md:py-20">
            <video
              controls
              loop
              muted
              playsInline
              autoplay="true"
              className="w-full max-w-[600px] mx-auto"
            >
              <source src={project.video_url} />
            </video>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ProjectPage;
