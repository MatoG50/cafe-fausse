import { useState } from "react";
import img1 from "../assets/gallery-cafe-interior.webp";
import img2 from "../assets/gallery-ribeye-steak.webp";
import img3 from "../assets/gallery-special-event.webp";

const Gallery = () => {
  const images = [img1, img2, img3];
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            className="w-full h-48 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setSelected(img)}
          />
        ))}
      </div>

      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
        >
          <img
            src={selected}
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-xl"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
