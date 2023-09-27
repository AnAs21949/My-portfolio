import Card from "./Card";

import photo1 from "../images/photo1.jpg";
import photo2 from "../images/photo2.jpg";
import photo3 from "../images/photo3.jpg";
// import photo4 from "../images/photo4.jpg";

const projects = [
    {
      title: "Visit Morocco Website",
      description:
        "This website is build to motivate exploring the beauty and culture of Morocco, enticing you to plan your next adventure",
      getImageSrc: () => photo1,
      webLink:"https://anas21949.github.io/Go_Travel/",
    },
    {
      title: "TO DO App",
      description:
        "A sleek and efficient to-do app built with React.js, seamlessly organizing tasks and priorities to boost productivity with a user-friendly interface.",
      getImageSrc: () => photo2,
      webLink:"https://anas21949.github.io/todo/",
    },
    {
      title: "Nike Landing Page",
      description:
        "A dynamic Nike landing page, powered by React.js, showcasing the latest athletic innovations, exclusive releases, and immersive brand experiences for passionate sport and fitness enthusiasts.",
      getImageSrc: () => photo3,
      webLink:"https://anas21949.github.io/Nike/",
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
    <section id="projects-section" className="bg-gray-950  p-16 ">
        <h1 className="mb-5 py-5 uppercase  font-semibold text-3xl text-blue-700 tracking-wider">Projects</h1>
            <h1 className=" py-2 uppercase pl-10 font-medium font-mono text-xl text-white tracking-wider">welcome to my universe</h1>
        <div className="grid gap-8 grid-cols-[repeat(1,minmax(0,1fr))] mt-8 px-15 md:px-32">
            {projects.map((project) => (
                <Card
                key={project.title}
                title={project.title}
                description={project.description}
                imageSrc={project.getImageSrc()}
                webLink={project.webLink}
              />
            ))}
        </div>

    </section>
  )
}
