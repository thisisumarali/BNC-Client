import React from "react";
import Image from "next/image";
import CategoryTabs from "./CategoryTabs";

const Card = ({ title, image }) => {
  return (
    <div className="relative w-80 rounded-2xl overflow-hidden shadow-lg bg-white">
      <div className="relative h-96 lg:h-112 w-full">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-44 sm:h-48 lg:h-54 bg-white rounded-t-full flex flex-col items-center justify-center text-center px-4 sm:px-6">
        <h3 className="text-lg sm:text-xl lg:text-2xl mt-2 font-semibold text-gray-800">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 mt-2">
          There are many variations of passages.
        </p>
        <button className="mt-3 text-primary font-semibold text-sm sm:text-base">
          Explore Now
        </button>
      </div>
    </div>
  );
};
const CategoryMain = () => {
  const data = [
    { title: "Dry Fruits", image: "/images/walnuts-3.jpg" },
    { title: "Cashews", image: "/images/cashewf1.jpg" },
    { title: "Dates", image: "/images/dates-nut.jpg" },
    { title: "Mix Dry Fruit", image: "/images/mix-dry.jpg" },
    { title: "Pistachios", image: "/images/pistachio.jpg" },
    { title: "Raisins", image: "/images/raisins.jpg" },
    { title: "Pinenuts", image: "/images/pinenuts.jpg" },
    { title: "Figs", image: "/images/figs-1.jpg" },
  ];

  return (
    <section>
      <CategoryTabs />

      <div className="py-4 flex justify-center w-[75vw] px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 ">
          {data.map((item, i) => (
            <Card key={i} title={item.title} image={item.image} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryMain;
