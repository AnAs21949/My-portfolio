import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./slider.css";
import {
  faBootstrap,
  faCss3,
  faGitAlt,
  faGithub,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import tailwind from "../../images/tailwind.png";

export default function Slider() {
  return (
    <section className="banner bg-slate-950 py-24  ">
      <div className="slides">
        <strong className="moving-text mx-10">
          <FontAwesomeIcon className="mx-14" icon={faGithub} color="#333" />
          <FontAwesomeIcon className="mx-14" icon={faHtml5} color="#F06529" />
          <FontAwesomeIcon className="mx-14" icon={faCss3} color="#28A4D9" />
          <FontAwesomeIcon className="mx-14" icon={faReact} color="#5ED4F4" />
          <FontAwesomeIcon
            className="mx-14"
            icon={faBootstrap}
            color="#563d7c"
          />
          <FontAwesomeIcon
            className="mx-14"
            icon={faJsSquare}
            color="#EFD81D"
          />
          <img src={tailwind} className="w-[190px] mx-14 inline-flex" alt="" />
          <FontAwesomeIcon className="mx-14" icon={faGitAlt} color="#EC4D28" />
        </strong>
        <strong className="moving-text mx-10">
          <FontAwesomeIcon className="mx-14" icon={faGithub} color="#333" />
          <FontAwesomeIcon className="mx-14" icon={faHtml5} color="#F06529" />
          <FontAwesomeIcon className="mx-14" icon={faCss3} color="#28A4D9" />
          <FontAwesomeIcon className="mx-14" icon={faReact} color="#5ED4F4" />
          <FontAwesomeIcon
            className="mx-14"
            icon={faBootstrap}
            color="#563d7c"
          />
          <FontAwesomeIcon
            className="mx-14"
            icon={faJsSquare}
            color="#EFD81D"
          />
          <img src={tailwind} className="w-[190px] mx-14 inline-flex" alt="" />
          <FontAwesomeIcon className="mx-14" icon={faGitAlt} color="#EC4D28" />
        </strong>
      </div>
      <div className="slides1">
        <strong className="moving-text mx-10">
          <FontAwesomeIcon
            className="mx-14"
            icon={faGithub}
            color="#333"
            size="1x"
          />
          <FontAwesomeIcon className="mx-14" icon={faHtml5} color="#F06529" />
          <FontAwesomeIcon className="mx-14" icon={faCss3} color="#28A4D9" />
          <FontAwesomeIcon className="mx-14" icon={faReact} color="#5ED4F4" />
          <FontAwesomeIcon
            className="mx-14"
            icon={faBootstrap}
            color="#563d7c"
          />

          <FontAwesomeIcon
            className="mx-14"
            icon={faJsSquare}
            color="#EFD81D"
          />
          <img src={tailwind} className="w-[190px] mx-14 inline-flex" alt="" />
          <FontAwesomeIcon className="mx-14" icon={faGitAlt} color="#EC4D28" />
        </strong>
        <strong className="moving-text mx-10">
          <FontAwesomeIcon className="mx-14" icon={faGithub} color="#333" />
          <FontAwesomeIcon className="mx-14" icon={faHtml5} color="#F06529" />
          <FontAwesomeIcon className="mx-14" icon={faCss3} color="#28A4D9" />
          <FontAwesomeIcon className="mx-14" icon={faReact} color="#5ED4F4" />
          <FontAwesomeIcon
            className="mx-14"
            icon={faBootstrap}
            color="#563d7c"
          />

          <FontAwesomeIcon
            className="mx-14"
            icon={faJsSquare}
            color="#EFD81D"
          />
          <img className=" mx-14 inline-flex w-[190px]" src={tailwind} alt="" />
          <FontAwesomeIcon className="mx-14" icon={faGitAlt} color="#EC4D28" />
        </strong>
      </div>
    </section>
  );
}
