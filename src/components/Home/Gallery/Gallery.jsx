import React, { useState } from "react";
import images from "/public/image.json";
import AddImage from "../../AddImage/AddImage";

const Gallery = () => {
  const [gallery, setGallery] = useState(images);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("index", index);
    // console.log(e, index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    // console.log(e);
  };

  const handleDrop = (e, targetIndex) => {
    e.preventDefault();
    const draggedIndex = e.dataTransfer.getData("index");
    const updatedGallery = [...gallery];

    // Reorder the gallery all image array
    const [draggedImage] = updatedGallery.splice(draggedIndex, 1);
    
    updatedGallery.splice(targetIndex, 0, draggedImage);

    setGallery(updatedGallery);
  };

  return (
    <div className="bg-slate-100">
      <div className=" relative flex  gap-6 flex-wrap justify-center">
        {gallery.map((img, index) => (
          <div
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
            draggable={true}
            key={img.id}
            className="border border-spacing-3 shadow-xl relative rounded-md"
          >
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
                <input className="w-5 h-5" type="checkbox" />
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
