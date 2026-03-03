export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full px-6 sm:px-[10%] lg:px-[20%] pb-8 mt-20">
      <div className="border-t border-rose-500/30 pt-6 text-center">
        <p className="text-zinc-500 text-sm sm:text-base tracking-wide">
          Copyright &copy; {currentYear} |
          <span className="text-zinc-300 font-medium"> Ricardo Silva</span>
        </p>
        <p className="text-zinc-600 text-xs mt-2 italic">
          Desenvolvido com React, TypeScript & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
