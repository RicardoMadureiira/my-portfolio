import hamburgueria from "./assets/Hamburgueria.jpg";
import hojeInspira from "./assets/HojeInspira.jpg";
import listOfNotes from "./assets/ListofNotes.jpg";
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
      }
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
      }
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
          href="https://list-of-notes-eight.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="animate-project opacity-0 relative rounded-2xl shadow-lg hover:scale-105 overflow-hidden flex duration-500 cursor-pointer"
        >
          <img
            className="w-full h-52 object-cover"
            src={listOfNotes}
            alt="Projeto List of Notes"
          />

          <div className="text-white absolute opacity-0 hover:opacity-100 duration-700 bottom-0 left-0 w-full h-full bg-gradient-to-t from-stone-950 flex items-center justify-center flex-col text-center px-4">
            <h4 className="text-2xl text-green-500 pb-5 font-bold">
              List of Notes
            </h4>

            <p className="text-base font-light">
              Lista de notas adicionada por voz.
            </p>

            <FaArrowUpRightFromSquare className="text-white text-2xl mt-4" />
          </div>
        </a>

        {/* Projeto 2 */}
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

          <div className="text-white absolute opacity-0 hover:opacity-100 duration-700 bottom-0 left-0 w-full h-full bg-gradient-to-t from-stone-950 flex items-center justify-center flex-col text-center px-4">
            <h4 className="text-2xl text-yellow-500 pb-5 font-bold">
              Hamburgueria React
            </h4>

            <p className="text-base font-light">
              Aplicação desenvolvida com React, simulando uma hamburgueria
              online com cardápio dinâmico e sistema de carrinho.
            </p>

            <FaArrowUpRightFromSquare className="text-white text-2xl mt-4" />
          </div>
        </a>

        {/* Projeto 3 */}
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

          <div className="text-white absolute opacity-0 hover:opacity-100 duration-700 bottom-0 left-0 w-full h-full bg-gradient-to-t from-stone-950 flex items-center justify-center flex-col text-center px-4">
            <h4 className="text-2xl text-rose-500 pb-5 font-bold">
              Inspiração Diária
            </h4>

            <p className="text-base font-light">
              Um app minimalista e interativo que entrega uma mensagem
              inspiradora por dia.
            </p>

            <FaArrowUpRightFromSquare className="text-white text-2xl mt-4" />
          </div>
        </a>

      </div>
    </section>
  );
}
