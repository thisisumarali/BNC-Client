"use client";
import { useState } from "react";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

export default function CategoryTabs() {
  const [active, setActive] = useState("All");

  const items = [
    "All",
    "Dates",
    "Dry Fruits",
    "Dried Fruits",
    "Crackers",
    "Specialities",
  ];

  return (
    <header className="flex justify-around items-center py-12 lg:py-16">
      <span className="text-2xl font-extrabold">
        <MdOutlineArrowBackIosNew />
      </span>
      <div className="flex bg-primary rounded-br-full text-white text-xl  py-3">
        {items.map((item, i) => {
          const isActive = active === item;

          return (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`
                relative px-12 lg:px-16 py-3 transition
                ${isActive ? "bg-white text-primary rounded-br-full  -my-3 shadow-lg" : ""}
              `}
            >
              {item}
            </button>
          );
        })}
      </div>
      <span className="text-2xl font-extrabold">
        <MdOutlineArrowForwardIos />
      </span>
    </header>
  );
}
