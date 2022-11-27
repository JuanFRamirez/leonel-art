import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BsDoorOpen } from "react-icons/bs";
import { useGallery } from "../hooks/useGallery";
import Masonry from "react-masonry-css";
const GalleryComponent = () => {
  const [popUp, setPopup] = useState("");
  const images = useGallery();
  const breakPointObj = {
    default: 4,
    3000: 6,
    2000: 5,
    1200: 3,
    1000: 2,
    500: 1,
  };
  return (
    <Masonry
      breakpointCols={breakPointObj}
      style={{ display: "flex", padding: "2rem", gap: "1rem" }}
    >
      {images && images.length > 0
        ? images.map((image, index) => (
            <LazyLoadImage
              key={index}
              src={`../imgs/${image}`}
              alt={`${image}`}
              effect="opacity"
              width={"100%"}
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
    </Masonry>
  );
};

export default GalleryComponent;
