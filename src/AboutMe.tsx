import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export function AboutMe() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".animate-about",
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.4,
        delay: 0.1,
        scrollTrigger: {
          trigger: ".about-section",
          // markers: true,
          start: "top 400px",
          end: "bottom 400px",
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
          trigger: ".about-section", // Elemento que ativa o efeito
          start: "top 70%", // Início do efeito
          end: "top 30%", // Fim do efeito
          // markers: true,
        },
      }
    );
  }, []);

  return (
    <section
      id="sobre"
      className="about-section w-full py-16 text-lg px-[10%] text-white"
    >
      <div className="max-w-5xl flex flex-col  gap-8">
        <h2 className="about-title text-gray-500 font-thin text-5xl max-md:text-3xl text-center max-lg:mt-10">
          Sobre <span className="text-rose-500">Mim</span>
        </h2>

        <p className="animate-about text-lg max-md:text-sm leading-relaxed text-gray-300">
          Sou{" "}
          <span className="text-white font-semibold">
             Desenvolvedor Front-End{" "}
          </span>
          formado em Análise e Desenvolvimento de Sistemas, com foco no desenvolvimento de interfaces web utilizando{" "}
          <span className="text-cyan-400">React</span>,{" "}
          <span className="text-yellow-500">JavaScript</span>,{" "}
          <span className="text-cyan-400">TailwindCSS</span>.
        </p>
        <p className="animate-about text-lg max-md:text-sm leading-relaxed text-gray-300">
          Tenho experiência prática no desenvolvimento de projetos próprios, aplicando conceitos
          de responsividade, organização de componentes e boas práticas de código.
        </p>

        <p className="animate-about text-lg max-md:text-sm leading-relaxed text-gray-300">
           Estou em busca da minha primeira oportunidade profissional como desenvolvedor
           Front-End júnior, onde eu possa aprender na prática, evoluir tecnicamente e
           contribuir com o time.
        </p>

        <p className="animate-about text-lg max-md:text-sm leading-relaxed text-gray-300">
          Tenho familiaridade com metodologias ágeis como{" "}
          <span className="text-white font-medium">Scrum</span> e{" "}
          <span className="text-white font-medium">Kanban</span>, e procuro
          seguir boas práticas de desenvolvimento, priorizando organização,
          performance e usabilidade.
        </p>

        <p className="animate-about text-lg max-md:text-sm leading-relaxed text-gray-300">
          Acredito no{" "}
          <span className="text-white font-medium">aprendizado contínuo</span> e
          estou sempre evoluindo tecnicamente para entregar soluções de valor.
        </p>

        <div className="text-center mt-6 animate-about">
          <a
            href="https://github.com/RicardoMadureiira"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-rose-500 hover:bg-rose-600 transition-colors text-white px-6 py-3 max-md:text-sm rounded-full font-medium"
          >
            Ver meus projetos no GitHub
          </a>

          <section
            id="contact"
            className="animate-about w-full py-16 px-4 bg-zinc-900 text-white"
          >
            <div className="max-w-4xl mx-auto text-center flex flex-col gap-5">
              <p className="text-gray-300 text-lg max-md:text-sm">
                Fique à vontade para entrar em contato! Estou aberto a conexões
                profissionais, colaboração em projetos e oportunidades na área
                de desenvolvimento.
              </p>

              <div className="flex justify-center gap-8 mt-1 text-2xl">
                <a
                  href="mailto:ricardomadureira.dev@gmail.com"
                  className="text-gray-300 hover:text-rose-500 transition"
                  aria-label="Email"
                >
                  <FaEnvelope />
                </a>
                <a
                  href="https://www.linkedin.com/in/ricardo-madureira-490022245/?trk=opento_sprofile_topcard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-rose-500 transition"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/RicardoMadureiira"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-rose-500 transition"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
