import coffeeTest from "./assets/fresh-coffee.jpg";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import listOfNotes from "./assets/ListofNotes.jpg";
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
        duration: 0.1,
        y: 0,
        delay: 0.2,
        stagger: 0.6,
        ease: "power1",
        scrollTrigger: {
          trigger: ".section-project",
          // markers: true,
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
        scrollTrigger: {
          trigger: ".title-section",
          // markers: true,
          start: "top 500px",
          end: "bottom 400px",
        },
      }
    );
  }, []);

  return (
    <section className="title-section px-[10%] min-h-screen " id="projetos">
      <h2 className="title-projects text-gray-500 font-thin mb-16 text-5xl max-md:text-3xl text-center max-lg:mt-10">
        Últimos <span className="text-rose-500">Projetos</span>
      </h2>

      {/* Grid Responsivo */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center section-project">
        {/* Projeto 1 */}
        <div className="animate-project opacity-0 relative rounded-2xl shadow-lg hover:scale-105 overflow-hidden flex duration-500">
          <img className="w-full h-52 object-cover" src={listOfNotes} alt="" />
          <div className="text-white group absolute opacity-0 hover:opacity-100 duration-700 bottom-0 left-0 w-full h-full bg-gradient-to-t from-stone-950 flex items-center justify-center flex-col text-center px-4">
            <h4 className="text-2xl text-stone-50 pb-5 font-titleText font-bold">
              List of Notes
            </h4>
            <p className="text-base font-light">
              Lista de notas adicionada por voz.
            </p>
            <a
              href="https://list-of-notes-eight.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-stone-50 rounded-full mt-4 hover:scale-105 duration-500 transition-transform"
            >
              <FaArrowUpRightFromSquare className="text-black text-2xl hover:text-rose-500" />
            </a>
          </div>
        </div>

        {/* Projeto 2 */}
        <div className="animate-project opacity-0 relative rounded-2xl shadow-lg hover:scale-105 overflow-hidden flex duration-500">
          <img className="w-full h-52 object-cover" src={coffeeTest} alt="" />
          <div className="text-white absolute opacity-0 hover:opacity-100 duration-700 bottom-0 left-0 w-full h-full bg-gradient-to-t from-stone-950 flex items-center justify-center flex-col text-center px-4">
            <h4 className="text-2xl text-stone-50 font-titleText font-bold pb-5">
              Lista de Notas
            </h4>
            <p className="text-base font-light">
              Lista de notas adicionada por voz.
            </p>
            <a
              href="https://list-of-notes-eight.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-stone-50 rounded-full mt-4 hover:scale-105 duration-500 transition-transform"
            >
              <FaArrowUpRightFromSquare className="text-stone-950 text-2xl hover:text-rose-500" />
            </a>
          </div>
        </div>

        {/* Projeto 3 */}
        <div className="animate-project opacity-0 relative rounded-2xl shadow-lg hover:scale-105 overflow-hidden flex duration-500">
          <img className="w-full h-52 object-cover" src={coffeeTest} alt="" />
          <div className="text-white absolute opacity-0 ease-in hover:opacity-100 duration-700 bottom-0 left-0 w-full h-full bg-gradient-to-t from-stone-950 flex items-center justify-center flex-col text-center px-4">
            <h4 className="text-2xl text-stone-50 font-titleText font-bold pb-5">
              Web Design
            </h4>
            <p className="text-base font-light">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <a
              href=""
              className="flex items-center justify-center w-12 h-12 bg-stone-50 rounded-full mt-4 hover:scale-105 duration-500 transition-transform"
            >
              <FaArrowUpRightFromSquare className="text-stone-950 text-2xl hover:text-rose-500" />
            </a>
          </div>
        </div>

        {/* Projeto 4 */}
        <div className="animate-project opacity-0 relative rounded-2xl shadow-lg hover:scale-105 overflow-hidden flex duration-500">
          <img className="w-full h-52 object-cover" src={coffeeTest} alt="" />
          <div className="text-white absolute opacity-0 ease-in hover:opacity-100 duration-700 bottom-0 left-0 w-full h-full bg-gradient-to-t from-stone-950 flex items-center justify-center flex-col text-center px-4">
            <h4 className="text-2xl text-stone-50 font-titleText font-bold pb-5">
              Web Design
            </h4>
            <p className="text-base font-light">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <a
              href=""
              className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full mt-4 hover:scale-105 duration-500 transition-transform"
            >
              <FaArrowUpRightFromSquare className="text-stone-950 text-2xl hover:text-rose-500" />
            </a>
          </div>
        </div>

        {/* Projeto 5 */}
        <div className="animate-project opacity-0 relative rounded-2xl shadow-lg hover:scale-105 overflow-hidden flex duration-500">
          <img className="w-full h-52 object-cover" src={coffeeTest} alt="" />
          <div className="text-white group absolute opacity-0 hover:opacity-100 duration-700 bottom-0 left-0 w-full h-full bg-gradient-to-t from-stone-950 flex items-center justify-center flex-col text-center px-4">
            <h4 className="text-2xl text-stone-50 font-titleText font-bold pb-5">
              Projeto 5
            </h4>
            <p className="text-base font-light">
              Lista de notas adicionada por voz.
            </p>
            <a
              href="https://list-of-notes-eight.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full mt-4 hover:scale-105 duration-500 transition-transform"
            >
              <FaArrowUpRightFromSquare className="text-black text-2xl hover:text-rose-500" />
            </a>
          </div>
        </div>

        {/* Projeto 6 */}
        <div className="animate-project opacity-0 relative rounded-2xl shadow-lg hover:scale-105 overflow-hidden flex duration-500">
          <img className="w-full h-52 object-cover" src={coffeeTest} alt="" />
          <div className="text-white group absolute opacity-0 hover:opacity-100 duration-700 bottom-0 left-0 w-full h-full bg-gradient-to-t from-stone-950 flex items-center justify-center flex-col text-center px-4">
            <h4 className="text-2xl text-stone-50 font-titleText font-bold pb-5">
              Projeto 6
            </h4>
            <p className="text-base font-light">
              Lista de notas adicionada por voz. Lista de notas adicionada por
              voz. Lista de notas adicionada por voz.
            </p>
            <a
              href="https://list-of-notes-eight.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full mt-4 hover:scale-105 duration-500 transition-transform"
            >
              <FaArrowUpRightFromSquare className="text-black text-2xl hover:text-rose-500" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
