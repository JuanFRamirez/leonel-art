import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
const MovilMenu = (menu) => {
  console.log(menu.menu, menu.length);
  const [activeMenu, setActiveMenu] = useState(false);
  return (
    <div>
      <div className="movil-menu">
        <AiOutlineMenu
          style={{ transform: `scale(1.5)` }}
          onClick={() => setActiveMenu(!activeMenu)}
        />
      </div>
      <ul
        className={
          activeMenu ? "movil-menu-items translatedX" : "movil-menu-items"
        }
      >
        <img
          src="../imgs/icons/leone_emilio_icon.ico"
          style={{ borderRadius: "50%", width: "5rem" }}
        />
        {menu.menu && menu.menu.length > 0
          ? menu.menu.map((item, index) => (
              <li key={index}>
                <Link to={item.link} onClick={() => setActiveMenu(false)}>
                  {item.text}
                </Link>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default MovilMenu;
