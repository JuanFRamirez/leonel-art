import { useState } from "react";

const UseMenu = () => {
  const [menu, setMenu] = useState([
    { id: 1, title: "¤", desc: "lorem ipsum", img: "" },
    { id: 2, title: "¥", desc: "lorem ipsum", img: "" },
    { id: 3, title: "§", desc: "lorem ipsum", img: "" },
    { id: 4, title: "µ", desc: "lorem ipsum", img: "" },
    { id: 5, title: "Ø", desc: "lorem ipsum", img: "" },
    { id: 6, title: "T", desc: "lorem ipsum", img: "" }
  ]);
  return menu;
};

export default UseMenu;
