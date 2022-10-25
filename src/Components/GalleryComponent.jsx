import React, { useState } from "react";
import { images } from "./Images";

import { uuid } from "react-uuid";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BsDoorOpen } from "react-icons/bs";
const GalleryComponent = () => {
  const [popUp, setPopup] = useState("");
  return (
    <div className="image-container">
      {images.map((image) => (
        <LazyLoadImage
          key={uuid}
          src={`../imgs/${image}`}
          alt={`${image}`}
          effect="opacity"
          width={"93%"}
          height={"93%"}
          onClick={() => setPopup(image)}
        />
      ))}
      {popUp ? (
        <div className="light-box" onClick={() => setPopup("")}>
          <img src={`../imgs/${popUp}`} alt={`${popUp}`} />
          <p onClick={() => setPopup("")}>
            Cerrar{" "}
            <span>
              <BsDoorOpen />
            </span>
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default GalleryComponent;
