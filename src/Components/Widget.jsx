import React from "react";
const Widget = ({ styleClass, text, children }) => {
  return (
    <div className={styleClass}>
      <p>{text}</p>
      {children}
    </div>
  );
};

export default Widget;
