import React from "react";
import "./Workflow.css";
// import Rectangle73 from "../../../img/Rectangle73.png";
import videoPic from "/Users/nikhilyadav/Documents/niryat_kendra/SIH2022-master/src/img/nikhil.png";

const Workflow = () => {
  return (
    <div className=" mb-10 p-12 bg-[#EF6674] ">
      <h1 className="text-4xl font-bold uppercase mb-4 text-center">
      Wondering how our Nriyat Network operates? 
      </h1>
      <p className="text-md font-medium uppercase mb-4 text-white text-center">
        Take a Look at out Platform Demo
      </p>
      <div className="flex justify-around mediaQuery items-center text-white">
        <div className="grow">
          <ul className="list-decimal ml-[90px] list-inside">
            <li className="text-2xl mr-4 my-4">Sign-up to the platform.</li>
            <li className="text-2xl mr-4 my-3">
            Create a Portal Bill: File your export details electronically. 
            </li>
            <li className="text-2xl mr-4 my-4">Visit DNK: Present your parcel at the nearest Dak Ghar Niryat Kendra.</li>
            <li className="text-2xl mr-4 my-3">
            SEAMLESS EXPORT:  Experience a streamlined export process.
            </li>
            <li className="text-2xl mr-4 my-4">
            Connect with Customers: Reach international buyers effortlessly. 
            </li>
            <li className="text-2xl mr-4 my-3">
            Affordable Solutions: Enjoy cost-effective export options.
            </li>
            <li className="text-2xl mr-4 my-3">
              Chat with the owner and make a booking..
            </li>
            <li className="text-2xl mr-4 my-4">Stay updated by SMS.</li>
          </ul>
        </div>
        <div className="h-1/2 w-1/2">
          {/* <img src={Rectangle73} className='youtubeImg' alt="" /> */}
          <img src={videoPic} className="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Workflow;
