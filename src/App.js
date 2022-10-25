import React from "react";
import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Components/Menu";
import Loader from "./Components/Loader";
import "./App.css";
const MainPageContainer = React.lazy(() => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(import("./Components/MainPageContainer")), 1200)
  ).then();
});

const About = React.lazy(() => import("./pages/About"));
const Gallery = React.lazy(() => import("./pages/Gallery"));
const Contacts = React.lazy(() => import("./pages/Contacts"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Menu
          items={[
            { link: "/", text: "Inicio" },
            { link: "about", text: "Acerca de" },
            { link: "gallery", text: "Galeria" },
            { link: "contact", text: "Contacto" },
          ]}
        />
        <Routes>
          <Route path="/" element={<MainPageContainer />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
