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

export default function Projects() {
  return (
    <section id="projects-section" className="bg-gray-950 p-16">
      <h1 className="mb-5 py-5 uppercase font-semibold text-3xl text-blue-700 tracking-wider">
        Projects
      </h1>
      <h1 className="py-2 uppercase pl-10 font-medium font-mono text-xl text-white tracking-wider">
        welcome to my universe
      </h1>
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
          <h1 className="py-2 pb-5 uppercase font-medium font-mono text-xl text-slate-300 ">
            Bookmark
          </h1>
          <img className="w-full hidden lg:block" src={bookmark_pc} alt="" />
          <img src={bookmark_phone} className="lg:hidden" alt="" />
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
