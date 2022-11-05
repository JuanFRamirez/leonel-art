import React from "react";
const BigTitle = ({ title, style }) => {
  return (
    <h1
      className="intro-title animate__animated animate__fadeInUp"
      style={style}
    >
      {title}
    </h1>
  );
};

export default BigTitle;
