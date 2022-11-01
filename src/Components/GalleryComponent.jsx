import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BsDoorOpen } from "react-icons/bs";
import { useGallery } from "../hooks/useGallery";
const GalleryComponent = () => {
  const [popUp, setPopup] = useState("");
  const images = useGallery();
  return (
    <div className="image-container">
      {images && images.length > 0
        ? images.map((image, index) => (
            <LazyLoadImage
              key={index}
              src={`../imgs/${image}`}
              alt={`${image}`}
              effect="opacity"
              width={"93%"}
              height={"93%"}
              onClick={() => setPopup(image)}
            />
          ))
        : null}
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
