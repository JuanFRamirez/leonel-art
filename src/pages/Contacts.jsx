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
          "Eu nisi magna anim commodo do exercitation aliquip. Aliqua dolor essecillum do ullamco consectetur reprehenderit id do amet nisi do. Estvelit ad magna id cupidatat deserunt laborum dolore consectetur occaecatveniam ad amet eu. Mollit ut fugiat eu magna commodo voluptate amet voluptate amet labore velit. Velit commodo pariatur consectetur esse."
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
