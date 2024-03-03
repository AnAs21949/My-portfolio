import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

export default function Footer() {
  return (
    <section className="bg-slate-900 p-16 text-white flex flex-col font-mono">
      <div className="flex flex-col md:flex-row gap-20 items-center justify-between ">
        <div className="">
          <p className="font-bold text-2xl py-2">ABID ANAS</p>
          <p className="max-w-lg">
            {" "}
            A Frontend focused Web Developer building the Frontend of Websites
            and Web Applications that leads to the success of the overall
            product
          </p>
        </div>
        <div className="flex gap-4">
          {socials.map((icon) => (
            <a href={icon.url} key={icon.url}>
              <FontAwesomeIcon icon={icon.icon} size="2x" />
            </a>
          ))}
        </div>
      </div>
      <hr className="mt-16" />
      <div className="text-center">
        <p className="font-mono mt-5">
          {" "}
          © Copyright 2024. Made by{" "}
          <a className="underline" href="">
            ANAS ABID
          </a>{" "}
        </p>
      </div>
    </section>
  );
}
