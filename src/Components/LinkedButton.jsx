import React from "react";
import { Link } from "react-router-dom";
const LinkedButton = ({url,text,theme}) => {
  return (
    <Link to={`/${url}`}>
      <button className={theme}>{text}</button>
    </Link>
  );
};

export default LinkedButton;
