import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex h-20 items-center ">
        <div>
          <h2 className="text-2xl font-bold">Gallery</h2>
        </div>

        <div className="flex items-center">
          <div className="px-3 flex items-center">
            <label>
              <input className="w-5 h-5" type="checkbox" />
            </label>
          </div>
          <div>
            <h3 className="text-2xl font-bold">File Selected</h3>
          </div>
        </div>
      </div>

      <div className="text-right ">
        <h3 className="text-2xl font-bold text-red-600 mt-[-50px] pb-3">Delete File</h3>
      </div>
      <hr className="py-4" />
    </>
  );
};

export default Header;
