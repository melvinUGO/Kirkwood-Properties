import Counter from "@/components/Counter";
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
              <p className="text-white">
                A residential and commercial city that transcends beyond the
                ordinary,
              </p>
              <p className="text-white pb-10">
                to complement technology, innovation and lifestyle.
              </p>
              <a href="#projects" className="p-3 px-5 bg-kirkwood-blue">
                Explore &darr;
              </a>
            </div>
          </div>
        </div>
      </header>
      <div className="center py-10">
        <Counter />
        <Projects />
      </div>
      <div className="bg-gray-300">
        <Personnel />
      </div>
      <Footer />
    </main>
  );
}
