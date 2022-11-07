import React from "react";
import { Link } from "react-router-dom";
const LinkedButton = ({ url, text, theme, external = false }) => {
  const redirectToExternalUrl = () => {
    window.open(url);
  };

  return !external ? (
    <Link to={`/${url}`}>
      <button className={theme}>{text}</button>
    </Link>
  ) : (
    <button className={theme} onClick={() => redirectToExternalUrl(url)}>
      {text}
    </button>
  );
};

export default LinkedButton;
