import React from "react";
import { useLayoutEffect } from "react";
import AnimatedText from "../Components/AnimatedText";
import BigTitle from "../Components/BigTitle";
import GalleryComponent from "../Components/GalleryComponent";
import LinkedButton from "../Components/LinkedButton";
import Subtitle from "../Components/Subtitle";
const Gallery = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="gallery">
      <BigTitle title={"Galería"} />
      <AnimatedText
        text={
          "Aquí una pequeña muestra de mis trabajos realizados. Puede encontrar más en mi Instagram. Cada uno de estos dibujos fue ejecutado empleando diferentes técnicas que he ido dominando a través del tiempo. Aquí se muestran desde prácticas hasta trabajos ganadores de varios concursos."
        }
      />
      <br />
      <GalleryComponent />
      <div style={{ margin: "2rem" }}>
        <Subtitle text={"--Ver mas contenido"} />
        <LinkedButton
          url="https://www.instagram.com/leonelemilioart/?igshid=1plq2carr1u6n"
          text={"Visita mi instagram"}
          theme={"button button--secondary"}
          external={true}
        />
      </div>
    </div>
  );
};

export default Gallery;
