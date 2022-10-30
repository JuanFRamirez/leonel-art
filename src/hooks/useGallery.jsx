import { useState, useEffect } from "react";
import { images } from "../Components/Images";
export const useGallery = () => {
  const [galleryImages, setGalleryImages] = useState(null);
  useEffect(() => {
    setGalleryImages(images);
  }, []);
  return galleryImages;
};
