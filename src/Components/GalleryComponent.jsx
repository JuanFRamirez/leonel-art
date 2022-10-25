import React, { useState } from "react";
import { images } from "./Images";

import { uuid } from "react-uuid";
import { LazyLoadImage } from "react-lazy-load-image-component";
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
        <div className="light-box">
          <img src={`../imgs/${popUp}`} alt={`${popUp}`} />
          <span>link</span><span onClick={()=>setPopup("")}>X</span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default GalleryComponent;
