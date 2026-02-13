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
    <header className="flex items-center justify-between lg:justify-around py-8 lg:py-16 px-3 lg:px-0 gap-2">
      <span className="text-xl lg:text-2xl font-extrabold shrink-0">
        <MdOutlineArrowBackIosNew />
      </span>

      <div className="flex bg-primary rounded-br-full text-white text-sm sm:text-base lg:text-xl py-2 lg:py-3 overflow-x-auto no-scrollbar">
        {items.map((item) => {
          const isActive = active === item;

          return (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`
                relative whitespace-nowrap px-5 sm:px-8 lg:px-12 py-2 lg:py-3 transition
                ${
                  isActive
                    ? "bg-white text-primary rounded-br-full -my-2 lg:-my-3 shadow-lg"
                    : ""
                }
              `}
            >
              {item}
            </button>
          );
        })}
      </div>

      <span className="text-xl lg:text-2xl font-extrabold shrink-0">
        <MdOutlineArrowForwardIos />
      </span>
    </header>
  );
}
