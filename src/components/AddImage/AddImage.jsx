import React from "react";
import { ImImage } from "react-icons/im";
const AddImage = () => {
  return (
    <div  className="flex flex-col items-center justify-center w-[200px] h-[200px] border border-spacing-4 rounded-md">
      <div>
        <ImImage className="text-2xl"></ImImage>{" "}
      </div>
      <div className="text-2xl font-semibold mt-7">Add Images</div>
    </div>
  );
};

export default AddImage;
