import React, { useState } from "react";
import images from "/public/image.json";
import AddImage from "../../AddImage/AddImage";
import Header from "../../Header/Header";
import "./Gallery.css";

const Gallery = () => {
  const [gallery, setGallery] = useState(images);
  const [checkedImage, setCheckedImage] = useState([]);
  const [countClicked, setCountClicked] = useState(0);

  //here start drag point function
  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("index", index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // drop the image functinality

  const handleDrop = (e, targetIndex) => {
    e.preventDefault();
    const draggedIndex = e.dataTransfer.getData("index");
    const updatedGallery = [...gallery];

    // Reorder the gallery all image array
    const [draggedImage] = updatedGallery.splice(draggedIndex, 1);

    updatedGallery.splice(targetIndex, 0, draggedImage);

    setGallery(updatedGallery);
  };

  // for checkebox click funtionality and  calculate the total clicked image
  const handleClick = (index) => {
    //toggole checkbox
    if (checkedImage.includes(index)) {
      setCheckedImage(checkedImage.filter((ind) => ind !== index));
      setCountClicked(countClicked - 1);
    } else {
      setCheckedImage([...checkedImage, index]);
      setCountClicked(countClicked + 1);
    }
  };

  // delete all selected image
  const onDelete = () => {
    const updatedGalleryImage = gallery.filter(
      (element, index) => !checkedImage.includes(index)
    );
    // console.log(updatedGalleryImage)
    setGallery(updatedGalleryImage);
    setCheckedImage([]);
    setCountClicked(0);
  };

  return (
    <>
      <Header countClicked={countClicked} onDelete={onDelete}></Header>

      <div className="p-5 relative grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5  lg:gap-6 md:gap-3 gap-2 justify-center">
        {gallery.map((img, index) => (
          <div
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
            draggable={true}
            key={img.id}
            className={`container border border-spacing-3 shadow-xl relative rounded-md cursor-pointer ${
              index === 0 ? "col-span-2 row-span-2" : ""
            } `}
            onClick={() => handleClick(index)}
          >
            <figure className="p-3 mx-auto">
              <img
                src={img.image}
                alt="Headphone"
                className={`rounded-x ${
                  index === 0 ? "w-[400] h-[400]" : "w-[200px]"
                }`}
              />
            </figure>

            <div className="overlay">
              <div className="content"></div>
            </div>

            <div className="absolute top-5 left-5">
              <label>
                <input
                  className="w-5 h-5"
                  type="checkbox"
                  checked={checkedImage.includes(index)}
                  onChange={() => handleClick(index)}
                />
              </label>
            </div>
          </div>
        ))}
      <AddImage></AddImage>
      </div>

    </>
  );
};

export default Gallery;
