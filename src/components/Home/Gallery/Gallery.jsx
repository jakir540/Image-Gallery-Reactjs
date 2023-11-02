import React, { useState } from "react";
import images from "/public/image.json";
import AddImage from "../../AddImage/AddImage";

const Gallery = () => {
  const [image, setImage] = useState(images);

  return (
    <div className="bg-slate-100">
     
      <div className=" relative flex  gap-6 flex-wrap justify-center">
        {image.map((img) => (
          <div className="border border-spacing-3 shadow-xl relative rounded-md">
            <figure className="p-3 mx-auto">
              <img
                src={img.image}
                width="200px"
                alt="Headphone"
                className="rounded-xl"
              />
            </figure>

            <div className="absolute top-5 left-5">
              <label>
                <input type="checkbox" />
              </label>
            </div>
          </div>
        ))}
      </div>

      <AddImage></AddImage>
    </div>
  );
};

export default Gallery;
