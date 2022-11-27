import React, { useEffect } from "react";
import { useState } from "react";
import { images } from "./Images";
const Loader = () => {
  const [image, setImage] = useState("");
  useEffect(() => {
    generateRandomImage();
  }, []);
  const generateRandomImage = () => {
    let randomNumber = Math.floor(Math.random() * images.length);
    setImage(images[randomNumber]);
  };
  return (
    <div className="loading-screen">
      {image && (
        <img
          src={`../imgs/${image}`}
          className="animate__animated animate__fadeIn"
          alt={`${image}`}
        />
      )}
      <h1>Cargando...</h1>
    </div>
  );
};

export default Loader;
