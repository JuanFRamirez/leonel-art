import React from "react";
import { Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Menu from "./Components/Menu";
import Loader from "./Components/Loader";
import "./App.css";
import PageNotFound from "./pages/PageNotFound";
const MainPageContainer = React.lazy(() => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(import("./pages/MainPageContainer")), 1200)
  ).then();
});

const About = React.lazy(() => import("./pages/About"));
const Gallery = React.lazy(() => import("./pages/Gallery"));
const Contacts = React.lazy(() => import("./pages/Contacts"));

function App() {
  return (
    <div className="wrapper">
      <Suspense fallback={<Loader />}>
        <HashRouter>
          <Menu
            items={[
              { link: "/", text: "Inicio" },
              { link: "about", text: "Acerca de" },
              { link: "gallery", text: "Galería" },
              { link: "contact", text: "Contacto" },
            ]}
          />
          <Routes>
            <Route path="/" element={<MainPageContainer />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </HashRouter>
      </Suspense>
    </div>
  );
}

export default App;
