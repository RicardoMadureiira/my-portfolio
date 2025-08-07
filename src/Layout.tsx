import { useLocation, Routes, Route } from "react-router-dom";

import { Header } from "./Header";
import { ScrollToTopButton } from "./Scroll-TopButton";
import { MyPresentation } from "./MyPresentation";
import { AboutMe } from "./AboutMe";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import Thanks from "./Thanks";

export function Layout() {
  const location = useLocation();
  const isThanksPage = location.pathname === "/thanks";

  return (
    <>
      {!isThanksPage && <Header />}
      {!isThanksPage && <ScrollToTopButton />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <MyPresentation />
              <AboutMe />
              <Skills />
              <Projects />
              <Contact />
            </>
          }
        />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>

      {!isThanksPage && <Footer />}
    </>
  );
}
