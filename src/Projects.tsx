import hamburgueria from "./assets/Hamburgueria.jpg";
import hojeInspira from "./assets/HojeInspira.jpg";
import financas from "./assets/Financas.png";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

export function Projects() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".animate-project",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        duration: 0.6,
        y: 0,
        delay: 0.2,
        stagger: 0.3,
        ease: "power1",
        scrollTrigger: {
          trigger: ".section-project",
          start: "top 600",
          end: "bottom 500",
        },
        onComplete: () => {
          gsap.set(".animate-project", { clearProps: "transform" });
        },
      },
    );

    gsap.fromTo(
      ".title-projects",
      {
        opacity: 0,
        rotateY: 90,
        scale: 0.8,
      },
      {
        opacity: 1,
        rotateY: 0,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".title-section",
          start: "top 500px",
          end: "bottom 400px",
        },
      },
    );
  }, []);

  return (
    <section className="title-section px-[10%] min-h-screen" id="projetos">
      <h2 className="title-projects text-gray-500 font-thin mb-16 text-5xl max-md:text-3xl text-center max-lg:mt-10">
        Últimos <span className="text-rose-500">Projetos</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center section-project">
        {/* Projeto 1 */}
        <a
          href="https://controle-financasrm.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="animate-project opacity-0 relative rounded-2xl shadow-lg hover:scale-105 overflow-hidden flex duration-500 cursor-pointer"
        >
          <img
            className="w-full h-52 object-cover"
            src={financas}
            alt="Projeto List of Notes"
          />

          <div className="text-white absolute opacity-0 hover:opacity-100 duration-500 bottom-0 left-0 w-full h-full bg-zinc-950/90 flex items-center justify-center flex-col text-center px-8">
            <h4 className="text-xl text-rose-500 mb-3 font-extrabold tracking-tight">
              Controle de Finanças
            </h4>

            <p className="text-sm font-medium text-zinc-300 leading-relaxed">
              Aplicação Full Stack com{" "}
              <span className="text-white whitespace-nowrap">
                React + TypeScript
              </span>
              . Backend em <span className="text-white">Fastify</span> com banco
              <span className="text-white"> MongoDB</span> via{" "}
              <span className="text-white">Prisma</span>.
            </p>

            <FaArrowUpRightFromSquare className="text-rose-500 text-xl mt-5 animate-bounce" />
          </div>
        </a>

        {/* PROJETO 2 - INSPIRAÇÃO */}
        <a
          href="https://motivacional-app.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="animate-project opacity-0 relative rounded-2xl shadow-lg hover:scale-105 overflow-hidden flex duration-500 cursor-pointer"
        >
          <img
            className="w-full h-52 object-cover"
            src={hojeInspira}
            alt="Projeto Inspiração Diária"
          />

          <div className="text-white absolute opacity-0 hover:opacity-100 duration-500 bottom-0 left-0 w-full h-full bg-zinc-950/90 flex items-center justify-center flex-col text-center px-6">
            <h4 className="text-2xl text-rose-500 mb-3 font-extrabold tracking-tight">
              Inspiração Diária
            </h4>
            <p className="text-sm font-medium text-zinc-300 leading-relaxed">
              App minimalista com{" "}
              <span className="text-white whitespace-nowrap">
                React + TypeScript
              </span>
              , focado em entregar uma experiência de usuário leve e
              inspiradora.
            </p>
            <FaArrowUpRightFromSquare className="text-rose-500 text-xl mt-5 animate-bounce" />
          </div>
        </a>

        {/* PROJETO 3 - HAMBURGUERIA */}
        <a
          href="https://hamburgueria-react-one.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="animate-project opacity-0 relative rounded-2xl shadow-lg hover:scale-105 overflow-hidden flex duration-500 cursor-pointer"
        >
          <img
            className="w-full h-52 object-cover"
            src={hamburgueria}
            alt="Projeto Hamburgueria React"
          />

          <div className="text-white absolute opacity-0 hover:opacity-100 duration-500 bottom-0 left-0 w-full h-full bg-zinc-950/90 flex items-center justify-center flex-col text-center px-6">
            <h4 className="text-2xl text-rose-500 mb-3 font-extrabold tracking-tight">
              Hamburgueria Online
            </h4>
            <p className="text-sm font-medium text-zinc-300 leading-relaxed">
              Interface de delivery com{" "}
              <span className="text-white font-bold">cardápio interativo</span>{" "}
              e
              <span className="text-white font-bold whitespace-nowrap">
                {" "}
                carrinho em tempo real
              </span>
              .
            </p>
            <FaArrowUpRightFromSquare className="text-rose-500 text-xl mt-5 animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
