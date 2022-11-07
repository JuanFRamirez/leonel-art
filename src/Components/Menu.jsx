import React from "react";
import { Link } from "react-router-dom";
const Menu = ({ items }) => {
  return (
    <div className="menu">
      <div className="logo">
        <Link to={"/"}>
          <img src="../imgs/icons/leone_emilio_icon.ico" alt="site icon drawn portrait"></img>
        </Link>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
