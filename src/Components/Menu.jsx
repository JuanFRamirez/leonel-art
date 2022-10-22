import React from "react";
import { Link } from "react-router-dom";
const Menu = ({items}) => {
  return (
    <div className="menu">
      <ul>
        {items.map((item, index) => (
          <li key={index}><Link to={item.link}>{item.text}</Link></li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
