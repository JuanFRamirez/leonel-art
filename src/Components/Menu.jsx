import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MovilMenu from "./MovilMenu";
const Menu = ({ items }) => {
  const [useSize, setSize] = useState(window.innerWidth);
  const handleResize = (innerWidth) => {
    setTimeout(() => {
      setSize(innerWidth);
    }, 300);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      handleResize(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", handleResize(window.innerWidth));
    };
  }, [useSize]);

  if (useSize >= 900) {
    return (
      <div className="menu">
        <div className="logo">
          <Link to={"/"}>
            <img
              src="../imgs/icons/leone_emilio_icon.ico"
              alt="site icon drawn portrait"
            ></img>
          </Link>
        </div>
        <ul>
          {items && items.length
            ? items.map((item, index) => (
                <li key={index}>
                  <Link to={item.link}>{item.text}</Link>
                </li>
              ))
            : null}
        </ul>
      </div>
    );
  } else {
    return <MovilMenu menu={items} />;
  }
};

export default Menu;
