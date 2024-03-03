import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [active, setActive] = useState(false);

  const handleClick = (anchor) => (e) => {
    e.preventDefault();
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const [scrollValue, setScrollValue] = useState(0);
  const [scroll, setScroll] = useState(false);

  const prevScroll = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      const newScrollValue = window.scrollY;
      setScrollValue(newScrollValue);

      if (newScrollValue > prevScroll.current) {
        // console.log('Scrolled down');
        setScroll(true);
      } else {
        // console.log('Scrolled up');
        setScroll(false);
      }

      // Update the previous scroll value
      prevScroll.current = newScrollValue;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header
      className={`transform ${
        scroll ? "translate-y-[-200px]" : "-translate-y-1"
      } fixed w-full z-50`}
    >
      <div className="flex justify-between items-center bg-slate-900 py-4 px-24 text-white  h-[77px] md:h-auto">
        <div className="absolute top-4 left-10 md:hidden">
          <input type="checkbox" id="menu" />
          <label
            htmlFor="menu"
            className="icon"
            onClick={() => setActive((prev) => !prev)}
          >
            <div className="menu"></div>
          </label>
        </div>
        <div className="hidden gap-10 text-sm md:flex">
          <a href="#about" id="about" onClick={handleClick("projects")}>
            PROJECTS
          </a>
          <a href="#projects" id="projects" onClick={handleClick("about")}>
            ABOUT
          </a>
        </div>
        <div className="absolute left-0 xs:left-[18%]  vs:left-[35%] vs:block hidden md:static">
          <a href="" className="tracking-wider  font-semibold text-3xl">
            {" "}
            <span className="font-bold">ANAS </span>ABID
          </a>
        </div>
        <div className="absolute right-[10%] top-3 md:static">
          <button
            id="contactme"
            onClick={handleClick("contactme")}
            className="borderC py-2 px-3 font-medium custom-button button  "
          >
            Contact Me
          </button>
        </div>
      </div>

      <div className="bg-slate-900 text-white md:hidden">
        <div
          className={`${
            active ? "h-auto py-4 px-24" : "h-0 overflow-hidden"
          } text-sm transition-all duration-500 ease-out flex gap-10`}
        >
          <a href="#about" id="about" onClick={handleClick("about")}>
            About
          </a>
          <a href="#projects" id="projects" onClick={handleClick("projects")}>
            Projects
          </a>
        </div>
      </div>
    </header>
  );
}
