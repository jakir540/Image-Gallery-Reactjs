import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const isFileselected = props.countClicked > 0;

  return (
    <>
      <div className="lg:flex h-20 items-center ">
        <div>
          {isFileselected ? (
            ""
          ) : (
            <h2 className="text-2xl font-bold">Gallery</h2>
          )}
        </div>

        {isFileselected ? (
          <div className="flex items-center">
            <div className="px-3 flex items-center">
              <label>
                <input
                  checked={isFileselected}
                  className="w-5 h-5"
                  type="checkbox"
                />
              </label>
            </div>
            <div>
              <h3 className="text-2xl font-bold">
                <span>{props.countClicked}</span> File Selected
              </h3>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      {isFileselected ? (
        <div className="text-right ">
          <h3
            onClick={props.onDelete}
            className="text-2xl cursor-pointer font-bold text-red-600 mt-[-50px] pb-3"
          >
            Delete File
          </h3>
        </div>
      ) : (
        ""
      )}
      <hr className="py-4" />
    </>
  );
};

export default Header;
