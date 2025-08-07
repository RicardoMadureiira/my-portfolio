import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Cleave from "cleave.js";
import "cleave.js/dist/addons/cleave-phone.br";

// Schema Zod
const schema = z.object({
  name: z.string().min(3, "Nome muito curto"),
  email: z.string().email("Email inválido"),
  phone: z
    .string()
    .min(1, "Telefone obrigatório")
    .regex(
      /^\((11|12|13|14|15|16|17|18|19|21|22|24|27|28|31|32|33|34|35|37|38|41|42|43|44|45|46|47|48|49|51|53|54|55|61|62|63|64|65|66|67|68|69|71|73|74|75|77|79|81|82|83|84|85|86|87|88|89|91|92|93|94|95|96|97|98|99)\)\s9\d{4}-\d{4}$/,
      "Formato: (DD) 9XXXX-XXXX com DDD válido"
    ),
  subject: z.string().min(1, "Assunto obrigatório"),
  message: z.string().min(1, "Mensagem muito curta"),
});

type FormData = z.infer<typeof schema>;

export function Contact() {
  const phoneRef = useRef<HTMLInputElement | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (phoneRef.current) {
      new Cleave(phoneRef.current, {
        delimiters: ["(", ") ", "-"],
        blocks: [0, 2, 5, 4],
        numericOnly: true,
      });
    }

    // GSAP animação
    gsap.fromTo(
      ".animate-contact",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.4,
        delay: 0.1,
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 400px",
          end: "bottom 400px",
        },
      }
    );

    gsap.fromTo(
      ".contact-title",
      { opacity: 0, rotateY: 90, scale: 0.8 },
      {
        opacity: 1,
        rotateY: 0,
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.1,
        scrollTrigger: {
          trigger: ".div-title",
          start: "top 80%",
          end: "top 30%",
        },
      }
    );
  }, []);

  // Função de envio do formulário
  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("https://formspree.io/f/mrblabrk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Mensagem enviada com sucesso!");
      } else {
        console.error("Erro ao enviar formulário:", await response.text());
      }
    } catch (error) {
      console.error("Erro inesperado:", error);
    }
  };

  return (
    <div
      className="contact-section h-screen mt-32 px-[10%] overflow-hidden"
      id="contato"
    >
      <h2 className="contact-title text-gray-600 text-center text-5xl max-md:text-3xl font-thin">
        Fale <span className="text-rose-500">comigo</span>
      </h2>

      <div className="mt-5 flex items-center justify-center">
        <div className="w-full max-w-4xl p-8 rounded-lg shadow-lg">
          <form
            onSubmit={handleSubmit(onSubmit)}
            action="https://formspree.io/f/mrblabrk"
            method="POST"
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="Nome Completo"
                  className="animate-contact w-full p-3 rounded-md bg-transparent border border-rose-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="animate-contact w-full p-3 rounded-md bg-transparent border border-rose-500 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="(DD) 9XXXX-XXXX"
                  className="animate-contact w-full p-3 rounded-md bg-transparent border border-rose-500 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
                  {...register("phone")}
                  ref={(el) => {
                    register("phone").ref(el);
                    phoneRef.current = el;
                  }}
                />
                {errors.phone && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Assunto"
                  className="animate-contact w-full p-3 rounded-md bg-transparent border border-rose-500 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
                  {...register("subject")}
                />
                {errors.subject && (
                  <p className="text-red-400 text-sm mt-1">
                    {errors.subject.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <textarea
                placeholder="Sua mensagem..."
                rows={4}
                className="animate-contact w-full resize-none p-3 rounded-md bg-transparent border border-rose-500 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500"
                {...register("message")}
              />
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="animate-contact bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-md font-semibold shadow-md"
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
