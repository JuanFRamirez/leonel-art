import React from "react";
import { BsInstagram, BsFacebook } from "react-icons/bs";
const Value = ({ text, styleClass }) => {
  const changeURL = (param) => {
    window.open(param);
  };
  return (
    <div className="value-container">
      <p className={styleClass}>{text}</p>
      <BsInstagram
        onClick={() =>
          changeURL(
            "https://www.instagram.com/leonelemilioart/?igshid=1plq2carr1u6n"
          )
        }
      />
      <BsFacebook
        onClick={() =>
          changeURL("https://www.facebook.com/leonelemilio.ramirezroa")
        }
      />
    </div>
  );
};

export default Value;
