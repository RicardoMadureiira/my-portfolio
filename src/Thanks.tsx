export default function Thanks() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-zinc-900 text-white px-4">
      <div className="text-center max-w-xl">
        <h1 className="text-3xl font-bold text-rose-500 mb-4">
          Mensagem enviada com sucesso!
        </h1>
        <p className="text-lg text-gray-300">
          Obrigado por entrar em contato. Em breve responderei sua mensagem!
        </p>
        <a
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-rose-500 hover:bg-rose-600 rounded-full text-white font-medium transition-colors"
        >
          Voltar para o início
        </a>
      </div>
    </section>
  );
}
