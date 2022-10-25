import React from "react";
import { useLayoutEffect } from "react";
import AnimatedText from "../Components/AnimatedText";
import BigTitle from "../Components/BigTitle";
import GalleryComponent from "../Components/GalleryComponent";
const Gallery = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="gallery">
      <BigTitle title={"Galeria"} />
      <AnimatedText
        text={
          "Eu nisi magna anim commodo do exercitation aliquip. Aliqua dolor essecillum do ullamco consectetur reprehenderit id do amet nisi do. Estvelit ad magna id cupidatat deserunt laborum dolore consectetur occaecatveniam ad amet eu. Mollit ut fugiat eu magna commodo voluptate amet voluptate amet labore velit. Velit commodo pariatur consectetur esse."
        }
      />
      <br />
      <GalleryComponent />
    </div>
  );
};

export default Gallery;
