import Personnel from "@/components/Personnel";
import Projects from "@/components/Projects";
import Footer from "@/components/navigation/Footer";
import Navbar from "@/components/navigation/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white">
      <header className="bg">
        <div className="overlay text-white">
          <Navbar />
          <div className="center max-lg:max-w-[740px] px-7 py-5">
            <div className="relative lg:w-[512px] md:w-[310px] lg:h-[219px] md:h-[132px] hidden md:flex mt-20">
              <Image
                src="/logo-whitee.png"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="text-center md:text-left">
              <p className="text-white pb-10">
                Discover an exquisite blend of luxury and comfort with our
                meticulously crafted homes,{<p className="inline md:block"></p>}{" "}
                designed to fulfill your dreams of a perfect haven.
              </p>
              <a href="#projects" className="p-4 px-7 bg-kirkwood-blue">
                Explore &darr;
              </a>
            </div>
          </div>
        </div>
      </header>
      <div className="center py-10">
        <Projects />
      </div>
      <div className="bg-gray-300">
        <Personnel />
      </div>
      <Footer />
    </main>
  );
}
