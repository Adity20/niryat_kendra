import React from "react";
import "./PreHeader.css";

const PreHeader = () => {
  const width = window.innerWidth;
  console.log(width);
  return (
    <div className="bg-[#be1c2d] px-6 py-2 md:inline-block hidden w-full">
      <div className="flex justify-between items-center ml-6">
        <div className="flex justify-center items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
            className="logo"
            alt=""
          />
          <p className="font-semibold text-white text-xs sm:text-sm ml-1">
            Ministry of Communications
          </p>
        </div>
        <div className="">
          <div className="" id="google_element"></div>
        </div>
        {/* <img
            src="/Users/nikhilyadav/Documents/niryat_kendra/SIH2022-master/src/img/g20.jpeg"
            className="logo"
            alt=""
          /> */}
      </div>
    </div>
  );
};

export default PreHeader;
