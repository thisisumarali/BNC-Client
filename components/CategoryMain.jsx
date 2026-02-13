import React from "react";
import Image from "next/image";
import CategoryTabs from "./CategoryTabs";

const Card = ({ title }) => {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-lg bg-white">
      <div className="relative h-72 sm:h-96 lg:h-112 w-full">
        <Image
          src="/images/Figs.jpg"
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-44 sm:h-48 lg:h-54 bg-white rounded-t-full flex flex-col items-center justify-center text-center px-4 sm:px-6">
        <h3 className="text-lg sm:text-xl lg:text-2xl mt-2 font-semibold text-gray-800">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 mt-2">
          There are many variations of passages, There are many variations of
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
    "Dry Fruits",
    "Cashews",
    "Dates",
    "Dry Fruits",
    "Cashews",
    "Dates",
    "Dry Fruits",
    "Cashews",
  ];

  return (
    <section>
      <CategoryTabs />

    <div className="py-4 px-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
    {data.map((item, i) => (
      <Card key={i} title={item} />
    ))}
  </div>
</div>

    </section>
  );
};

export default CategoryMain;
