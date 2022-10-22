import React from "react";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
const Value = ({ text, styleClass }) => {
  return (
    <div className="value-container">
      <p className={styleClass}>{text}</p>
      <BsInstagram />
      <BsFacebook />
      <BsTwitter />
    </div>
  );
};

export default Value;
