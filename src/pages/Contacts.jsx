import React from "react";
import AnimatedText from "../Components/AnimatedText";
import BigTitle from "../Components/BigTitle";
import ContactForm from "../Components/ContactForm";
import TwoSideLayout from "../Components/TwoSideLayout";
import Subtitle from "../Components/Subtitle";
import Value from "../Components/Value";
const Contacts = () => {
  return (
    <div className="contacts">
      <BigTitle title={"Contactos"} />
      <AnimatedText
        text={
          "Para comunicarte conmigo y expresarme tus ideas para proyectos artísticos, cotizaciones, colaboraciones o cualquier actividad de índole artística aquí te dejo mis diferentes redes sociales"
        }
      />
      <TwoSideLayout
        first_children={<ContactForm />}
        second_children={
          <div>
            <Subtitle text={"Redes"} />
            <Value />
            <img src="../imgs/ant_eater.jpg" alt="apple" />
          </div>
        }
      />
    </div>
  );
};

export default Contacts;
