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
    <section id="sobre" className=" w-full py-16 px-4 text-white">
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        <h2 className=" text-gray-500 font-thin text-5xl text-center max-lg:mt-10">
          Sobre <span className="text-rose-500">Mim</span>
        </h2>

        <p className="text-lg leading-relaxed text-gray-300">
          Sou{" "}
          <span className="text-white font-semibold">
            Desenvolvedor Full Stack
          </span>
          , com formação em Análise e Desenvolvimento de Sistemas, com
          experiência prática em projetos próprios utilizando tecnologias como{" "}
          <span className="text-cyan-400">React</span>,{" "}
          <span className="text-cyan-400">Node.js</span>,{" "}
          <span className="text-cyan-400">Fastify</span>,{" "}
          <span className="text-cyan-400">Prisma</span>,{" "}
          <span className="text-cyan-400">MongoDB </span> e{" "}
          <span className="text-cyan-400">TailwindCSS</span>.
        </p>
        <p className="text-lg leading-relaxed text-gray-300">
          e experiência prática no desenvolvimento de projetos próprios, como
          este portfólio e outras aplicações web completas.
        </p>

        <p className="text-lg leading-relaxed text-gray-300">
          Busco oportunidades para colaborar com times de tecnologia, contribuir
          com soluções e continuar aprendendo e crescendo como desenvolvedor.
        </p>

        <p className="text-lg leading-relaxed text-gray-300">
          Tenho familiaridade com metodologias ágeis como{" "}
          <span className="text-white font-medium">Scrum</span> e{" "}
          <span className="text-white font-medium">Kanban</span>, e foco em
          desenvolver soluções com código limpo, performance e boa usabilidade.
        </p>

        <p className="text-lg leading-relaxed text-gray-300">
          Acredito no{" "}
          <span className="text-white font-medium">aprendizado contínuo</span> e
          estou sempre evoluindo tecnicamente para entregar soluções de valor.
        </p>

        <div className="text-center mt-6">
          <a
            href="https://github.com/RicardoMadureiira"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-rose-500 hover:bg-rose-600 transition-colors text-white px-6 py-3 rounded-full font-medium"
          >
            Ver meus projetos no GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
