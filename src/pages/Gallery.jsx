import React from "react";
import { useLayoutEffect } from "react";
import BigTitle from "../Components/BigTitle";
import GalleryComponent from "../Components/GalleryComponent";
const Gallery = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="gallery">
      <BigTitle title={"Galeria"} />
      <p className="about-page-w animate__animated animate__fadeInUp">
        Eu nisi magna anim commodo do exercitation aliquip. Aliqua dolor esse
        cillum do ullamco consectetur reprehenderit id do amet nisi do. Est
        velit ad magna id cupidatat deserunt laborum dolore consectetur occaecat
        veniam ad amet eu. Mollit ut fugiat eu magna commodo voluptate amet
        voluptate amet labore velit. Velit commodo pariatur consectetur esse.
      </p>
      <br />
      <GalleryComponent/>
    </div>
  );
};

export default Gallery;
