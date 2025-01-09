import fundo from "./assets/profile.png";
import { TbArrowBadgeRight } from "react-icons/tb";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

export function AboutMe() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add("(max-width: 640px)", () => {
      gsap.fromTo(
        ".about-ability",
        {
          opacity: 0,
          x: 100,
          rotation: -360,
        },
        {
          opacity: 1,
          x: 0,
          rotation: 0,
          duration: 2,
          delay: 0,
          ease: "steps(1)",
          stagger: 0.6,
          scrollTrigger: {
            trigger: ".section-scrub",
            start: "top 400px",
            end: "bottom 500px",
            // markers: true,
          },
          onComplete: () => {
            // Para retornar o controle do `transform` ao CSS
            gsap.set(".about-ability", { clearProps: "transform" });
          },
        }
      );
    });

    gsap.fromTo(
      ".about-ability",
      {
        opacity: 0,
        x: 500,
        rotation: -360,
      },
      {
        opacity: 1,
        x: 0,
        rotation: 0,
        duration: 2,
        delay: 0,
        ease: "steps(1)",
        stagger: 0.6,
        scrollTrigger: {
          trigger: ".section-scrub",
          start: "top 400px",
          end: "bottom 500px",
          // markers: true,
        },
        onComplete: () => {
          // Para retornar o controle do `transform` ao CSS
          gsap.set(".about-ability", { clearProps: "transform" });
        },
      }
    );

    gsap.fromTo(
      ".scrub-img",
      {
        opacity: 0,
        x: -300, // Fora da tela à esquerda
        rotation: -45, // Inclinado a 45 graus
      },
      {
        opacity: 1,
        x: 0,
        rotation: 0, // Endireita o texto
        duration: 1.8,
        scrollTrigger: {
          trigger: ".section-img",
          // scrub: true, // Sincroniza com o scroll
          start: "top 80%",
          end: "top 30%",
          // markers: true,
        },
      }
    );

    gsap.fromTo(
      ".about-title",
      {
        opacity: 0,
        rotateY: 90, // Começa virado de lado no eixo Y
        scale: 0.8, // Levemente menor no início
      },
      {
        opacity: 1,
        rotateY: 0, // Gira para posição normal
        scale: 1, // Retorna ao tamanho original
        duration: 1.5,
        ease: "power3.out", // Suaviza o movimento
        delay: 0.2,
        scrollTrigger: {
          trigger: ".section-title", // Elemento que ativa o efeito
          start: "top 80%", // Início do efeito
          end: "top 30%", // Fim do efeito
          // markers: true,
        },
      }
    );
  });

  return (
    <div
      className="section-title section-scrub p-10 max-xl:w-full mx-auto flex flex-col items-center justify-center min-h-screen text-white pr-[9%]"
      id="sobre"
    >
      <h2 className="about-title text-5xl text-gray-600 font-thin mb-5">
        Sobre <span className="text-rose-500">mim</span>
      </h2>

      <section className="section-img flex flex-col lg:flex-row items-center justify-center mt-10 ">
        {/* Imagem */}
        <div className="scrub-img xl:w-1/2 w-full xl:mr-5 xl:flex hidden items-center">
          <img
            className="w-full h-auto object-cover"
            src={fundo}
            alt="Ricardo"
          />
        </div>

        {/* Habilidades */}
        <div className="w-[60%] h-auto flex justify-center overflow-hidden">
          <div className=" grid grid-cols-1 sm:grid-cols-1 sm:gap-10 lg:grid-cols-2 xl:grid-cols-2 gap-5 xl:gap-10 max-w-6xl">
            {/* Quem sou eu */}
            <div
              id="ability-1"
              className="about-ability group flex items-center gap-4 bg-zinc-900 hover:scale-105 transition-transform duration-300"
            >
              <TbArrowBadgeRight className="text-rose-500 text-3xl shrink-0" />
              <div>
                <h4 className="text-gray-300 font-bold text-xl group-hover:text-rose-500">
                  Quem Sou Eu
                </h4>
                <p className="text-gray-400 mt-2">
                  Um desenvolvedor apaixonado por transformar ideias em soluções
                  digitais
                </p>
              </div>
            </div>

            {/* Do Frontend ao Backend */}
            <div
              id="ability-2"
              className="about-ability group flex items-center gap-4 bg-zinc-900 hover:scale-105 transition-transform duration-300 rounded-lg border-l-2 border-rose-500 p-5 shadow-md "
            >
              <TbArrowBadgeRight className="text-rose-500 text-3xl shrink-0" />
              <div>
                <h4 className="text-gray-300 font-bold text-xl group-hover:text-rose-500">
                  Do Frontend ao Backend
                </h4>
                <p className="text-gray-400 mt-2">
                  Criando soluções completas com{" "}
                  <span className="text-cyan-500">React</span>,{" "}
                  <span className="text-cyan-500">TailwindCSS</span> e{" "}
                  <span className="text-green-400">Node.js</span>.
                </p>
              </div>
            </div>

            {/* Minha missão */}
            <div
              id="ability-3"
              className="about-ability group flex items-center gap-4 bg-zinc-900 hover:scale-105 transition-transform duration-300 p-5 "
            >
              <TbArrowBadgeRight className="text-rose-500 text-3xl shrink-0" />
              <div>
                <h4 className="text-gray-300 font-bold text-xl group-hover:text-rose-500">
                  Minha Missão
                </h4>
                <p className="text-gray-400 mt-2">
                  Criar aplicações modernas que conectem pessoas e facilitem
                  suas vidas.
                </p>
              </div>
            </div>

            {/* Formação */}
            <div
              id="ability-4"
              className="about-ability group flex items-start gap-4 bg-zinc-900 hover:scale-105 transition-transform duration-300 rounded-lg p-5 border-l-2 border-rose-500 shadow-md "
            >
              <HiOutlineAcademicCap className="text-rose-500 text-3xl shrink-0 " />
              <div>
                <h4 className="text-gray-300 font-bold text-xl group-hover:text-rose-500">
                  Formação
                </h4>
                <p className="text-gray-400 mt-2">
                  Análise e Desenvolvimento de Sistemas.
                </p>
              </div>
            </div>

            {/* Scrum/Kanban */}
            <div
              id="ability-5"
              className="about-ability group flex items-center gap-4 bg-zinc-900 hover:scale-105 transition-transform duration-300 rounded-lg p-5 "
            >
              <TbArrowBadgeRight className="text-rose-500 text-3xl shrink-0 " />
              <div>
                <h4 className="text-gray-300 font-bold text-xl group-hover:text-rose-500">
                  Scrum/Kanban
                </h4>
                <p className="text-gray-400 mt-2">
                  Experiência em metodologias ágeis para gerenciamento de
                  projetos.
                </p>
              </div>
            </div>

            {/* Aprendizado Contínuo */}
            <div
              id="ability-6"
              className="about-ability group flex items-center gap-4 bg-zinc-900 hover:scale-105 transition-transform duration-300 rounded-lg p-5 border-l-2 border-rose-500"
            >
              <TbArrowBadgeRight className="text-rose-500 text-3xl shrink-0 " />
              <div>
                <h4 className="text-gray-300 font-bold text-xl group-hover:text-rose-500">
                  Aprendizado Contínuo
                </h4>
                <p className="text-gray-400 mt-2">
                  Capacidade de aprender novas tecnologias e adaptar-se a novos
                  desafios rapidamente.
                </p>
              </div>
            </div>
            {/* Comunicação */}
            <div
              id="ability-7"
              className="about-ability group animate-ability max-2xl:hidden flex items-start gap-4 bg-zinc-900 hover:scale-105 transition-transform duration-300 rounded-lg p-5 border-rose-500 shadow-md shadow-rose-950"
            >
              <TbArrowBadgeRight className="text-rose-500 text-3xl shrink-0 max-md:hidden" />
              <div>
                <h4 className="text-gray-300 font-bold text-xl group-hover:text-rose-500">
                  Comunicação
                </h4>
                <p className="text-gray-400 mt-2">
                  Habilidade para comunicar ideias técnicas e trabalhar bem em
                  equipe.
                </p>
              </div>
            </div>
            {/* Meu diferencial */}
            <div
              id="ability-8"
              className="about-ability group animate-ability max-2xl:hidden flex items-start gap-4 bg-zinc-900 hover:scale-105 transition-transform duration-300 rounded-lg p-5 border-l-2 border-rose-500 shadow-md shadow-rose-950"
            >
              <TbArrowBadgeRight className="text-rose-500 text-3xl shrink-0 max-md:hidden" />
              <div>
                <h4 className="text-gray-300 font-bold text-xl group-hover:text-rose-500">
                  Meu diferencial
                </h4>
                <p className="text-gray-400 mt-2">
                  Combinar criatividade, performance e atenção aos detalhes em
                  cada projeto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
