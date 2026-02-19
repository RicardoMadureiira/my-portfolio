import { FaCode } from "react-icons/fa";
import { MdDesignServices, MdEngineering } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

export function Skills() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".title-skills",
      {
        // opacity: 0,
        // x: 700,
        x: 400,
      },
      {
        duration: 0.5,
        x: 0,
        rotation: 360,
        opacity: 1,
        delay: 0.5,
        stagger: 0.8,
        ease: "sine.out",
        scrollTrigger: {
          trigger: ".section-animate",
          // markers: true,
          start: "top 400",
          end: "bottom 300",
        },
        onComplete: () => {
          gsap.set(".title-skills", { clearProps: "transform" });
        },
      }
    );

    gsap.fromTo(
      ".my-skills",
      {
        opacity: 0, // Invisível no início
        rotateY: 90, // Começa virado de lado no eixo Y
        scale: 0.8, // Levemente menor no início
      },
      {
        opacity: 1, // Torna-se visível
        rotateY: 0, // Gira para posição normal
        scale: 1, // Retorna ao tamanho original
        duration: 1.5, // Duração da animação
        ease: "power3.out", // Suaviza o movimento
        delay: 0.2,
        scrollTrigger: {
          trigger: ".scrub-title", // Elemento que ativa o efeito
          start: "top 80%", // Início do efeito (quando o elemento entra 80% na viewport)
          end: "top 30%", // Fim do efeito (quando o elemento chega 30% na viewport)
          // markers: true,
        },
        onComplete: () => {
          gsap.set(".my-skills", { clearProps: "transform" });
        },
      }
    );
  }, []);

  return (
    <div
      className="min-h-screen scrub-title section-animate flex flex-col items-center justify-center mt-20 sm:px-10 pb-10 px-[10%]"
      id="skills"
    >
      <h1 className="my-skills text-4xl sm:text-5xl font-thin text-gray-600 mb-10 sm:mb-16 mt-5 text-center">
        Minhas <span className="text-rose-500">Skills</span>
      </h1>

      {/* Cards Skills */}
      <section className="flex justify-center w-full overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 w-full max-w-6xl">
          {/* UI/UX Design */}
          <div className="title-skills opacity-0 flex flex-col items-center justify-between p-12 sm:p-6 shadow-md shadow-zinc-950 border-y-8 border-rose-500 rounded-xl group min-h-[300px]">
            <i className="group-hover:animate-spin360">
              <MdDesignServices className="text-5xl sm:text-6xl text-white group-hover:text-rose-500" />
            </i>
            <h1 className="text-2xl text-gray-300 font-bold group-hover:text-rose-500 mt-4 text-center">
              Interface & Experiência
            </h1>
            <p className="text-center text-gray-400 text-sm sm:text-base mt-2">
              Criação de interfaces funcionais e responsivas, com foco na
              experiência do usuário e boas práticas de usabilidade.
            </p>
          </div>

          {/* Web Development */}
          <div className="title-skills opacity-0 flex flex-col items-center justify-between p-12 sm:p-6 shadow-md shadow-zinc-950 border-y-8 border-rose-500 rounded-xl group min-h-[300px]">
            <i className="group-hover:animate-spin360">
              <FaCode className="text-5xl sm:text-6xl text-white group-hover:text-rose-500" />
            </i>
            <h1 className="text-2xl text-gray-300 font-bold group-hover:text-rose-500 mt-4 text-center">
              Front-End Development
            </h1>
            <p className="text-center text-gray-400 text-sm sm:text-base mt-2">
              Desenvolvimento de interfaces web modernas utilizando JavaScript, React, Vite e Tailwind, com foco em responsividade, organização de componentes e experiência do usuário.
            </p>
          </div>

          {/* Backend Engineering */}
          <div className="title-skills opacity-0 flex flex-col items-center justify-between p-12 sm:p-6 shadow-md shadow-zinc-950 border-y-8 border-rose-500 rounded-xl group min-h-[300px]">
            <i className="group-hover:animate-spin360">
              <MdEngineering className="text-5xl sm:text-6xl text-white group-hover:text-rose-500" />
            </i>
            <h1 className="text-2xl text-gray-300 font-bold group-hover:text-rose-500 mt-4 text-center">
              Componentização & UI
            </h1>
            <p className="text-center text-gray-400 text-sm sm:text-base mt-2">
              Criação de componentes reutilizáveis com React, organização de interfaces e estilização com Tailwind, mantendo código limpo e escalável.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
