import Card from "./Card";

import photo1 from "../images/photo1.jpg";
import photo2 from "../images/photo2.jpg";
import photo3 from "../images/photo3.jpg";
import space_pc from "../images/space_pc.png";
import space_phone from "../images/space_phone.png";
import lemon_phone from "../images/lemon_phone.png";
import lemon_pc from "../images/lemon_pc.png";
import bookmark_pc from "../images/bookmark_pc.png";
import bookmark_phone from "../images/bookmark_phone.png";
import todo_phone from "../images/todo_phone.png";
import todo_pc from "../images/todo_pc.png";
import formPc from "../images/form_pc.png";
import formPhone from "../images/form_phone.png";
import designoPc from "../images/designo_pc.png";
import designoPhone from "../images/designo_phone.png";
// import photo4 from "../images/photo4.jpg";

const projects = [
  {
    title: "Visit Morocco Website",
    description:
      "This website is build to motivate exploring the beauty and culture of Morocco, enticing you to plan your next adventure",
    getImageSrc: () => photo1,
    webLink: "https://anas21949.github.io/Go_Travel/",
  },
  {
    title: "TO DO App",
    description:
      "A sleek and efficient to-do app built with React.js, seamlessly organizing tasks and priorities to boost productivity with a user-friendly interface.",
    getImageSrc: () => photo2,
    webLink: "https://anas21949.github.io/todo/",
  },
  {
    title: "Nike Landing Page",
    description:
      "A dynamic Nike landing page, powered by React.js, showcasing the latest athletic innovations, exclusive releases, and immersive brand experiences for passionate sport and fitness enthusiasts.",
    getImageSrc: () => photo3,
    webLink: "https://anas21949.github.io/Nike/",
  },
  // {
  //   title: "Event planner",
  //   description:
  //     "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
  //   getImageSrc: () => photo4,
  //   webLink:"https://anas21949.github.io/Go_Travel/",
  // },
];

export default function Projects() {
  return (
    <section id="projects-section" className="bg-gray-950 p-16">
      <h1 className="mb-5 py-5 uppercase font-semibold text-3xl text-blue-700 tracking-wider">
        Projects
      </h1>
      <h1 className="py-2 uppercase pl-10 font-medium font-mono text-xl text-white tracking-wider">
        welcome to my universe
      </h1>
      {/* <div className="grid gap-8 grid-cols-[repeat(1,minmax(0,1fr))] mt-8 px-15 md:px-32">
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            webLink={project.webLink}
          />
        ))}
      </div> */}
      <div className="flex flex-col gap-40 items-center justify-center mt-10">
        <div className="flex flex-col items-center justify-center">
          <a
            href="https://anas21949.github.io/Space-tourism-multi-page-website/"
            className="flex flex-col items-center justify-center"
          >
            <h1 className="py-2 pb-5 uppercase font-medium font-mono text-xl text-slate-300 ">
              Space-tourism
            </h1>
            <img className="w-full hidden lg:block" src={space_pc} alt="" />
            <img src={space_phone} className="lg:hidden" alt="" />
          </a>
        </div>

        <div className="flex flex-col items-center justify-center">
          <a
            href="https://anas21949.github.io/little-lemonv2/"
            className="flex flex-col items-center justify-center"
          >
            <h1 className="py-2 pb-5 uppercase font-medium font-mono text-xl text-slate-300 ">
              Little lemon
            </h1>
            <img className="w-full hidden lg:block" src={lemon_pc} alt="" />
            <img src={lemon_phone} className="lg:hidden" alt="" />
          </a>
        </div>

        <div className="flex flex-col items-center justify-center">
          <a
            href="http://127.0.0.1:5500/bookmark-landing-page/index.html/"
            className="flex flex-col items-center justify-center"
          >
            <h1 className="py-2 pb-5 uppercase font-medium font-mono text-xl text-slate-300 ">
              Bookmark
            </h1>
            <img className="w-full hidden lg:block" src={bookmark_pc} alt="" />
            <img src={bookmark_phone} className="lg:hidden" alt="" />
          </a>
        </div>

        <div className="flex flex-col items-center justify-center">
          <a
            href="https://anas21949.github.io/todo/"
            className="flex flex-col items-center justify-center"
          >
            <h1 className="py-2 pb-5 uppercase font-medium font-mono text-xl text-slate-300 ">
              ToDo App
            </h1>
            <img className="w-full hidden lg:block" src={todo_pc} alt="" />
            <img src={todo_phone} className="lg:hidden" alt="" />
          </a>
        </div>
        <div className="flex flex-col items-center justify-center">
          <a
            href="https://anas21949.github.io/multi-step-form/"
            className="flex flex-col items-center justify-center"
          >
            <h1 className="py-2 pb-5 uppercase font-medium font-mono text-xl text-slate-300 ">
              Multi Step Form
            </h1>
            <img className="w-full hidden lg:block" src={formPc} alt="" />
            <img src={formPhone} className="lg:hidden" alt="" />
          </a>
        </div>
        <div className="flex flex-col items-center justify-center">
          <a
            href="https://anas21949.github.io/designo/"
            className="flex flex-col items-center justify-center"
          >
            <h1 className="py-2 pb-5 uppercase font-medium font-mono text-xl text-slate-300 ">
              designo
            </h1>
            <img className="w-full hidden lg:block" src={designoPc} alt="" />
            <img src={designoPhone} className="lg:hidden" alt="" />
          </a>
        </div>
      </div>
    </section>
  );
}
