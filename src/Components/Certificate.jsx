import React from "react";
import metaCertif from "../images/cert_Meta.jpeg";

export const Certificate = () => {
  return (
    <section className="bg-slate-950 p-16 text-white ">
      <h1 className="mb-5 py-5 uppercase  font-semibold text-3xl text-blue-700 tracking-wider">
        Certificate
      </h1>

      <h3 className="py-2 mb-9 uppercase pl-10 font-medium font-mono text-xl text-white tracking-wider">
        guess who&apos;s certified by meta??
      </h3>
      <a
        className="w-fit"
        href="https://www.coursera.org/account/accomplishments/professional-cert/QKN29RSKLN75"
      >
        <img className="rounded-md w-[100%]" src={metaCertif} alt="" />
      </a>
    </section>
  );
};
