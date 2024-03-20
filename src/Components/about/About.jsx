import "./about.css";

import myPic from "../../assets/imgs/me.jpeg";
import Slider from "../slider/Slider";
import Projects from "../Projects";

export default function About() {
  return (
    <section
      id="about-section"
      className=" flex lg:items-center flex-col bg-slate-950 lg:flex-row min-h-screen relative w-full z-10"
    >
      <div className="">
        <img
          src={myPic}
          className="w-full lg:absolute inset-0 lg:h-full lg:w-1/2 max-h-screen object-center object-cover"
          alt=""
        />
      </div>
      <div className="p-5 pl-16 lg:basis-1/2 lg:ml-auto lg:pl-10 xl:pl-20">
        <h1 className=" mb-5 uppercase  font-semibold text-lg text-blue-700 tracking-wider  ">
          About
        </h1>
        <p className="pl-3 leading-relaxed max-w-prose text-gray-400 pr-1 font-mono text-lg">
          I'm Anas Abid, a frontend developer based in Casablanca, Morocco, with
          a background in aeronautical engineering. I specialize in crafting
          next-level websites and web applications, combining design and
          development to create exceptional user experiences. and in my free
          time, I play video games (especially COD)
        </p>
      </div>
    </section>
  );
}
