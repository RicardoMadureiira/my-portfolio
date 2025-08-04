import { FiArrowLeft } from "react-icons/fi";

export default function Thanks() {
  return (
    <section className="min-h-screen  flex items-center justify-center px-4">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-rose-500 mb-4 animate-fade-in">
          Obrigado pelo contato!
        </h1>

        <p className="text-gray-300 text-lg md:text-xl leading-relaxed animate-fade-in delay-100">
          Sua mensagem foi enviada com sucesso. Em breve entrarei em contato com
          você.
        </p>

        <a
          href="/"
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full text-white font-medium bg-rose-500 hover:bg-rose-600 transition-colors animate-fade-in delay-200"
        >
          <FiArrowLeft className="w-5 h-5" />
          Voltar para o início
        </a>
      </div>
    </section>
  );
}
