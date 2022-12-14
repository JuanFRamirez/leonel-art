import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import UseMenu from "../hooks/useMenu";
const Eye = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const menu = UseMenu();
  useEffect(() => {
    const handleMouseMove = (event) => {
      setCoords({
        x: (event.clientX * 100) / window.innerWidth,
        y: (event.clientY * 100) / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="eye-socket">
      {menu?.map((item, index) => (
        <li className="menu__eye" key={index} style={{ "--i": index }}>
          {item.title}
        </li>
      ))}
      <div className="eye">
        <div
          className="eye-ball"
          style={{ left: `${coords.x}%`, top: `${coords.y}%` }}
        ></div>
      </div>
    </div>
  );
};
export default Eye;
