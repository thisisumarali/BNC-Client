"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

const ExploreCollection = () => {
  const items = [
    { title: "Dry Fruits", img: "/images/Figs.jpg", link: "/dry-fruits" },
    { title: "Dried Fruits", img: "/images/cranberry.jpg", link: "/" },
    { title: "Dates", img: "/images/Ajwa.jpg", link: "/" },
    { title: "Specialities", img: "/images/SpecialAlmonds.jpg", link: "/" },
    { title: "Rice Crackers", img: "/images/chickpeas.jpg", link: "/" },
    { title: "Specialities", img: "/images/SpecialAlmonds.jpg", link: "/" },
  ];
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    swipeToSlide: true,

    responsive: [
      {
        breakpoint: 1536,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="px-2 py-6 overflow-hidden">
      <h1 className="text-primary py-6 text-5xl font-mono text-center uppercase">
        Explore Collection
      </h1>

      <div className="px-2 py-6">
        <Slider {...settings}>
          {items.map((item, index) => (
            <div key={index} className="px-1">
              <Link
                href={item.link}
              className="group relative block h-[45vh] sm:h-[55vh] lg:h-[60vh] overflow-hidden"

              >
                <Image
                  alt={item.title}
                  src={item.img}
                  fill
                  className="object-cover lg:rounded-full"
                />

                <div className="absolute lg:rounded-full inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <h2 className="text-white text-2xl font-semibold tracking-wide opacity-0 -translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    {item.title}
                  </h2>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>

      <div className="flex justify-center pt-6 py-8">
        <button className="outline-2 outline-black text-white hover:bg-primary hover:outline-black cursor-pointer bg-primary/90 px-6 py-3">
          All Categories
        </button>
      </div>
    </section>
  );
};

export default ExploreCollection;
