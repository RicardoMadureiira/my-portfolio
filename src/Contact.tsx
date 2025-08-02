import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Contact() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".animate-contact",
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
          trigger: ".contact-section",
          // markers: true,
          start: "top 400px",
          end: "bottom 400px",
        },
      }
    );

    gsap.fromTo(
      ".contact-title",
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
        ease: "power3.out",
        delay: 0.1,
        scrollTrigger: {
          trigger: ".div-title",
          start: "top 80%",
          end: "top 30%",
          // markers: true,
        },
      }
    );
  });

  return (
    <div
      className="div-title contact-section h-screen mt-32 px-[10%] overflow-hidden"
      id="contato"
    >
      <h2 className="contact-title text-gray-600 text-center text-5xl font-thin ">
        Fale <span className="text-rose-500">comigo</span>
      </h2>

      {/* Contact */}
      <div className=" mt-5 flex items-center justify-center">
        <div className="w-full max-w-4xl p-8 rounded-lg shadow-lg">
          {/* Formulário */}
          <form
            action="https://formspree.io/f/mrblabrk"
            method="POST"
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Nome Completo */}
              <input
                type="text"
                name="name"
                placeholder="Nome Completo"
                className="animate-contact w-full p-3 rounded-md bg-transparent border border-rose-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
                required
              />
              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="animate-contact w-full p-3 rounded-md bg-transparent border border-rose-500 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
                required
              />
              {/* Número de Telefone */}
              <input
                type="text"
                name="phone"
                placeholder="Celular"
                className="animate-contact w-full p-3 rounded-md bg-transparent border border-rose-500 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
              {/* Assunto */}
              <input
                type="text"
                name="subject"
                placeholder="Assunto"
                className="animate-contact w-full p-3 rounded-md bg-transparent border border-rose-500 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
            </div>

            {/* Mensagem */}
            <textarea
              name="message"
              placeholder="Sua mensagem..."
              rows={4}
              className="animate-contact w-full resize-none p-3 rounded-md bg-transparent border border-rose-500 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
              required
            ></textarea>

            {/* Botão */}
            <div className="text-center">
              <button
                type="submit"
                className="animate-contact bg-rose-500 hover:bg-rose-600 text-white hover:text-gray-200 px-6 py-3 rounded-md font-semibold shadow-md"
              >
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
