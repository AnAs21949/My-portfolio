import ParticlesNode from "../../ParticlesNode";

export default function LandingPage() {
  const handleClick = (anchor) => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className=" h-[100vh] ">
      <div className=" flex flex-col items-center justify-center mt-44 md:mt-64">
        <h1 className="flex text-center justify-center  uppercase items-center text-5xl md:text-6xl text-white 4s:text-5xl font-bold">
          frontend developer
        </h1>
        <button
          onClick={() => handleClick("projects")}
          className="border hover:bg-transparent hover:text-white
             bg-white text-black py-2 px-3 uppercase font-mono custom-button  mt-20"
        >
          Dig into my Universe
        </button>
      </div>

      <ParticlesNode />
    </div>
  );
}
