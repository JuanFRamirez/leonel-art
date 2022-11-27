import React from "react";
import BigTitle from "../Components/BigTitle";
import Eye from "../Components/Eye";
import Subtitle from "../Components/Subtitle";
import Widget from "../Components/Widget";
import { Link } from "react-router-dom";
import { useLayoutEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import BgText from "../Components/BgText";
const About = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about">
      <div className="container-1">
        <BigTitle title={"Sobre mí"} />
        <div className="sub">
          <Widget
            styleClass={
              "about-page-w animate__animated animate__fadeInUp animate__delay-2.2s"
            }
            text={
              "Soy Leonel Emilio Ramirez, artista visual, Publicista y diseñador gráfico con más de 7 años de experiencia en el campo de las artes. Soy egresado del centro educativo (modalidad en artes visuales) Manuel del Cabral fe y Alegría.  Ganador de concursos como son: expresiones en papel en su 6ta, 7ma y 8va edicion y arte en cuarentena, organizado por la facultad de artes de la Universidad autónoma de santo domingo (UASD). Manejo una gran variedad de técnicas ilustrativas secas y humedas que me permiten crear de manera satisfactoria lo que el cliente necesite."
            }
            children={
              <>
                <img
                  src="../imgs/leonel_emilio.jpeg"
                  alt="portrait of the artist"
                  className="image image__portrait"
                />
                <div className="reveal"></div>
              </>
            }
          />
          <div style={{ position: "relative", overflow: "hidden" }}>
            <img
              src="../imgs/leonel_emilio_drawn.jpg"
              alt="self portrait drawn using pointillism"
              className="image image__side_image"
            />
            <Subtitle text={"Leonel-art"} />
            <BgText text={"ARTE"} top={"20"} right={"0"} />
          </div>
        </div>
      </div>
      <div className="container-2">
        <div>
          <Subtitle text="Hagamos arte" />
        </div>
        <div className="eye-container">
          <Eye />
        </div>
        <div className="about-img-container">
          <Link to={"/gallery"}>
            Ver la galeria{" "}
            <span>
              <BsArrowRight />
            </span>
          </Link>
          <img
            src={"../imgs/lion.jpeg"}
            alt="pencil drawn lion"
            style={{ width: "250px" }}
          />
          <BgText text={"VISUAL"} top={"-100"} right={"25"} />
        </div>
      </div>
    </div>
  );
};

export default About;
