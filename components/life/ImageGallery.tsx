"use client"

import { Masonry } from "react-plock";

interface ImageGalleryProps {
  images: { src: string; alt: string; width: number; height: number }[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <Masonry
      items={images}
      config={{
        columns: [ 1, 2, 3, 4 ],
        gap: [ 24, 16, 18, 20 ],
        media: [ 640, 768, 1024, 1280 ],
      }}
      render={(item, idx) => (
        <img key={idx} src={item.src} alt={item.alt} style={{ width: "100%", height: "auto" }} />
      )}
    />
  );
};

export default ImageGallery;