import { useLayoutEffect, useState } from "react";
import { BsList } from "react-icons/bs";
import { TbX } from "react-icons/tb";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger); //acionar rolagem

    gsap.to(".hero-title", {
      y: 0,
      rotate: 360,
      duration: 0.5,
    });

    //Home
    gsap.to("#home-1", {
      y: 0,
      duration: 0.5,
    });

    //Sobre
    gsap.to("#about-2", {
      y: 0,
      duration: 1,
    });

    //Skills
    gsap.to("#skills-3", {
      y: 0,
      duration: 1.2,
    });

    //Projetos
    gsap.to("#projects-4", {
      y: 0,
      duration: 1.4,
    });

    //Contato
    gsap.to("#contact-5", {
      y: 0,
      duration: 1.6,
    });

    return () => {
      gsap.killTweensOf(".hero-title");
    };
  }, []);

  return (
    <div id="home">
      <header className="flex items-center justify-between px-[10%] lg:px-[10%] py-4 bg-zinc-900 fixed w-full top-0 z-50 shadow-md">
        {/* Logo */}
        <a
          id="home"
          href="#home"
          className="text-2xl lg:text-3xl font-titleText text-rose-500 hero-title translate-y-[-400px]"
        >
          Ricardo.
        </a>

        {/* Menu Desktop */}
        <nav className="hidden menu-animate lg:flex gap-8 text-white font-titleText font-extralight">
          <a
            href="#home"
            id="home-1"
            className="border-b-2 nv-animate translate-y-[-400px] border-transparent hover:text-rose-500 hover:border-rose-500 transition duration-300"
          >
            Home
          </a>
          <a
            href="#sobre"
            id="about-2"
            className="hover:border-b-2 nv-animate translate-y-[-400px] border-transparent hover:border-rose-500 transition duration-300 hover:text-rose-500"
          >
            Sobre
          </a>
          <a
            href="#skills"
            id="skills-3"
            className="hover:border-b-2 nv-animate translate-y-[-400px] border-transparent hover:border-rose-500 transition duration-300 hover:text-rose-500"
          >
            Skills
          </a>
          <a
            href="#projetos"
            id="projects-4"
            className="hover:border-b-2 nv-animate translate-y-[-400px] border-transparent hover:border-rose-500 transition duration-300 hover:text-rose-500"
          >
            Projetos
          </a>
          <a
            href="#contato"
            id="contact-5"
            className="hover:border-b-2 nv-animate translate-y-[-400px] border-transparent hover:border-rose-500 transition duration-300 hover:text-rose-500"
          >
            Contato
          </a>
        </nav>

        {/* Botão do Menu Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-rose-500 text-3xl lg:hidden"
        >
          {/* Se menu aberto mostra o  X, se não mostra a lista */}
          {menuOpen ? <TbX /> : <BsList />}
        </button>

        {/* Menu Mobile */}
        <nav
          className={`${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } absolute top-0 right-0 h-screen w-1/3 bg-zinc-900 border-2 border-rose-500 text-white flex flex-col items-center gap-6 py-8 px-4 rounded-l-lg shadow-lg transition-transform duration-500 lg:hidden`}
        >
          {/* Botão de fechar no menu */}
          <button
            onClick={() => setMenuOpen(false)}
            className="top-4 border-2 border-rose-500 rounded-full right-4 text-3xl text-rose-500 hover:text-white"
          >
            <TbX />
          </button>

          {/* Links do menu */}
          <a
            href="#home"
            className="border-b-2 border-transparent hover:border-rose-500 transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#sobre"
            className="border-b-2 border-transparent hover:border-rose-500 transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Sobre
          </a>
          <a
            href="#skills"
            className="border-b-2 border-transparent hover:border-rose-500 transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </a>
          <a
            href="#projetos"
            className="border-b-2 border-transparent hover:border-rose-500 transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Projetos
          </a>
          <a
            href="#contato"
            className="hover:border-b-2 border-rose-500 transition duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Contato
          </a>
        </nav>
      </header>

      {/* Apresentação */}
    </div>
  );
}
