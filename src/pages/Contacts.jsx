import React from "react";
import AnimatedText from "../Components/AnimatedText";
import BigTitle from "../Components/BigTitle";
import ContactForm from "../Components/ContactForm";
import TwoSideLayout from "../Components/TwoSideLayout";
const Contacts = () => {
  return (
    <div className="contacts">
      <BigTitle title={"Contactos"} />
      <AnimatedText
        text={
          "Eu nisi magna anim commodo do exercitation aliquip. Aliqua dolor essecillum do ullamco consectetur reprehenderit id do amet nisi do. Estvelit ad magna id cupidatat deserunt laborum dolore consectetur occaecatveniam ad amet eu. Mollit ut fugiat eu magna commodo voluptate amet voluptate amet labore velit. Velit commodo pariatur consectetur esse."
        }
      />
      <TwoSideLayout first_children={<ContactForm/>} second_children={""}/>
    </div>
  );
};

export default Contacts;
