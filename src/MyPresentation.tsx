import { useLayoutEffect } from "react";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";

import { FiGithub } from "react-icons/fi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function MyPresentation() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger); //Adicionar rolagem

    gsap.to("h1", {
      x: 0,
      duration: 1.2,
      delay: 0.8,
      opacity: 1,
      stagger: 1.9, // Intervalo entre os elementos
      ease: "power3.out",
    });

    //Apresentação
    gsap.to(".hero-slogan", {
      x: 0,
      opacity: 1,
      duration: 2,
      delay: 1.2,
      stagger: 1, // Intervalo entre os elementos
      ease: "power3.out",
    });

    //Texto digitado
    gsap.to(".typed-text", {
      opacity: 1,
      duration: 1.5,
      delay: 2.9,
      // 2.9
      stagger: 4, // Intervalo entre os elementos
      ease: "power3.out",
    });

    //Contato
    gsap.to(".hero-contact", {
      x: 0,
      duration: 1.2,
      delay: 2,
      stagger: 2, // Intervalo entre os elementos
      ease: "power3.out",
    });

    return () => {
      gsap.killTweensOf(".hero-title");
    };
  });

  return (
    <section className="min-h-screen px-[10%] flex items-center overflow-hidden ">
      <div className="text-white">
        <h1 className="text-4xl max-sm:text-lg max-lg:text-2xl font-titleText translate-x-[-600px] opacity-0">
          Olá, Sou{" "}
          <span className="text-rose-500 font-light">Ricardo Silva</span>
        </h1>

        <div className="typed-text mt-4 w-max opacity-0">
          <h3 className="w-max text-3xl pr-0 pl-0 animate-typing whitespace-nowrap overflow-hidden border-r-2 border-r-gray-500 max-lg:text-2xl font-extrabold">
            Front-End Developer | React
          </h3>
        </div>
        <p className="text-2xl hero-slogan translate-x-[500px] opacity-0 font-titleText max-sm:text-xs max-lg:text-xl whitespace-normal break-words max-w-3xl my-7 mb-3">
          Desenvolvendo interfaces web modernas com
          <span className="text-cyan-400"> ReactJS</span>,
          <span className="text-cyan-500"> TailwindCSS</span> e
          <span className="text-yellow-400"> JavaScript</span>.
        </p>
        <div className="mt-6 flex gap-4 font-mono">
          <a
            href="#contato"
            className="px-6 hero-contact translate-x-[-350px] py-2 max-sm:text-xs bg-zinc-700 text-gray-200 rounded-lg hover:bg-rose-500 font-light"
          >
            Entre em Contato
          </a>
        </div>
        <div className="flex hero-slogan max-sm:justify-start pl-0 gap-2 mt-4 opacity-0">
          <a
            href="https://github.com/RicardoMadureiira"
            target="_blank"
            aria-label="GitHub Profile"
          >
            <FiGithub className="text-gray-500 text-2xl flex cursor-pointer bg-gradient-to-r from-gray-800 to-black rounded border border-gray-600 hover:scale-105 duration-200 hover:text-white hover:border-gray-800 hover:from-black hover:to-gray-900" />
          </a>
          <a
            href="https://www.linkedin.com/in/ricardo-madureira-490022245/?trk=opento_sprofile_topcard"
            target="_blank"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedinIn className="text-gray-500 text-2xl flex cursor-pointer bg-gradient-to-r from-gray-800 to-black rounded border border-gray-600 hover:scale-105 duration-200 hover:text-blue-500 hover:border-gray-800 hover:from-black hover:to-gray-900" />
          </a>

          <a href="mailto:ricardomadureira.dev@gmail.com" aria-label="mail">
            <FaEnvelope className="text-gray-500 text-2xl flex cursor-pointer bg-gradient-to-r from-gray-800 to-black rounded border border-gray-600 hover:scale-105 duration-200 hover:text-rose-500 hover:border-gray-800 hover:from-black hover:to-gray-900" />
          </a>
        </div>
      </div>
    </section>
  );
}
