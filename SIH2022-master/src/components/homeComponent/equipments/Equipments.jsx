import React from "react";
import "./Equipments.css";

const images = [
  {
    img: "https://s3.ap-south-1.amazonaws.com/www.beroni.in/farmease-app/categories/Tractors.jpg",
    title: "Locate DNK Center"
  },
  {
    img: "https://s3.ap-south-1.amazonaws.com/www.beroni.in/farmease-app/categories/Tillage_Equipment.jpg",
    title: "Export Price Calculator"
  },
  {
    img: "https://s3.ap-south-1.amazonaws.com/www.beroni.in/farmease-app/categories/Seeding_Equipment.jpg",
    title: "Track Consignment"
  },
  {
    img: "https://s3.ap-south-1.amazonaws.com/www.beroni.in/farmease-app/categories/Landscaping_Equipment.jpg",
    title: "News & Notices"
  },
  // {
  //   img: "https://s3.ap-south-1.amazonaws.com/www.beroni.in/farmease-app/categories/Crop_Protection.jpg",
  //   title: "User Guide"
  // },
  // {
  //   img: "https://s3.ap-south-1.amazonaws.com/www.beroni.in/farmease-app/categories/Harvest_Equipment.jpg",
  //   title: "Harvest Equipment"
  // },
  // {
  //   img: "https://s3.ap-south-1.amazonaws.com/www.beroni.in/farmease-app/categories/Post_Harvest.jpg",
  //   title: "Post Harvest"
  // },
  // {
  //   img: "https://s3.ap-south-1.amazonaws.com/www.beroni.in/farmease-app/categories/Haulage.jpg",
  //   title: "Haulage"
  // }
];

const Equipments = () => {
  return (
    <div className="my-6">
      <div className="mx-16">
        <h1 className="text-center text-3xl font-medium my-10">
          OUR FEATURES
        </h1>
        <div className="grid grid-cols-4 gap-8 mb-[100px]">
          {images.map((image) => (
            <div key={image.title} className="w-full relative">
              <h1 className="equipTitle">{image.title}</h1>
              <img className="equipImg" src={image.img} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Equipments;
