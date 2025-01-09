import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { AboutMe } from "./AboutMe.tsx";
import { Skills } from "./Skills.tsx";
import { Projects } from "./Projects.tsx";
import { Contact } from "./Contact.tsx";
import { Header } from "./Header.tsx";
import { MyPresentation } from "./MyPresentation.tsx";
import { ScrollToTopButton } from "./Scroll-TopButton.tsx";
import { Footer } from "./Footer.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <MyPresentation />
    <ScrollToTopButton />
    <AboutMe />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </React.StrictMode>
);
