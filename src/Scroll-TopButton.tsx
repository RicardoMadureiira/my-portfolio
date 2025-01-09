import { useState, useEffect } from "react";
import { FaAnglesUp } from "react-icons/fa6";

export function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  // Monitora a rolagem da página
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Função para voltar ao topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Transição scroll suave
    });
  };

  return (
    <>
      {/* Se showButton for verdadeiro exibe o botão */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-rose-500 text-black p-3 z-10 shadow-lg hover:bg-rose-600 hover:text-white transition duration-300"
        >
          <FaAnglesUp />
        </button>
      )}
    </>
  );
}
