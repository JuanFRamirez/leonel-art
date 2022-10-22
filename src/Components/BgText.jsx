import React from "react";
const BgText = ({ text, top, right }) => {
  return (
    <p
      className="bg-text"
      style={{ top: `${top ? top : 0}%`, right: `${right ? right : 0}%` }}
    >
      {text}
    </p>
  );
};

export default BgText;
