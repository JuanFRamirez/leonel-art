import BigTitle from "../Components/BigTitle";
import Widget from "../Components/Widget";
import Value from "../Components/Value";
import LinkedButton from "../Components/LinkedButton";
const MainPageContainer = () => {
  return (
    <div className="mn">
      <BigTitle title={"LEONEL RAMÍREZ"} style={{ width: "50%" }} />
      <Widget
        styleClass={
          "main-page-w animate__animated animate__fadeInUp animate__delay-2.2s"
        }
        text="Artista visual y diseñador gráfico de República Dominicana. Apasionado del arte y el diseño en todas sus formas y estilos."
      />
      <div className="flex animate__animated animate__fadeInUp animate__delay-2.2s">
      <LinkedButton
        url="gallery"
        text="Ver mi trabajo"
        theme="button button--primary"
      />
      <LinkedButton
        url="contact"
        text="Contacto"
        theme="button button--secondary"
      />
      </div>
      <Value
        text="Mis redes sociales"
        styleClass={"value-text animate__animated animate__fadeInUp"}
      />
      <img
        src="../imgs/caption.png"
        alt="rotating logo"
        className="rotating-logo"
      />
    </div>
  );
};

export default MainPageContainer;
