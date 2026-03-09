"use client";

import { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

const ExploreCollection = () => {
  const [mounted, setMounted] = useState(false);
  const [slides, setSlides] = useState(5);

  useEffect(() => {
    const updateSlides = () => {
      const w = window.innerWidth;
      if (w < 640) setSlides(1);
      else if (w < 1024) setSlides(2);
      else if (w < 1280) setSlides(3);
      else if (w < 1536) setSlides(4);
      else setSlides(5);
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    setMounted(true);

    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  if (!mounted) return null;

  const items = [
    { title: "Dry Fruits", img: "/images/almonds-1.jpg", link: "/dry-fruits" },
    { title: "Dried Fruits", img: "/images/cranberry.jpg", link: "/" },
    { title: "Dates", img: "/images/Ajwa.jpg", link: "/" },
    { title: "Specialities", img: "/images/SpecialAlmonds.jpg", link: "/" },
    {
      title: "Rice Crackers",
      img: "/images/rice_cracker.jpg",
      link: "/",
    },
    { title: "Chickpease", img: "/images/chickpeas.jpg", link: "/" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    slidesToShow: slides,
    slidesToScroll: 1,
    arrows: true,
    swipeToSlide: true,
    adaptiveHeight: true,
  };

  return (
    <section className="px-2 pt-6 overflow-hidden ">
      <h1 className="text-primary py-6 text-3xl sm:text-4xl lg:text-5xl font-mono text-center uppercase">
        Explore Collection
      </h1>

      <div className="px-2 py-6">
        <Slider {...settings}>
          {items.map((item, index) => (
            <div key={index} className="px-2 py-4">
              <Link
                href={item.link}
                className="group relative block h-[45vh] sm:h-[55vh] lg:h-[60vh] overflow-hidden"
              >
                <Image
                  alt={item.title}
                  src={item.img}
                  fill
                  className="object-cover "
                />

                <div className="absolute  inset-0 bg-primary/90 opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <h2
                    className="text-white text-center uppercase font-semibold font-mono
             px-4 leading-tight
             text-[clamp(1rem,3vw,3rem)]
             opacity-0 -translate-y-6
             group-hover:opacity-100 group-hover:translate-y-0
             transition-all duration-500"
                  >
                    {item.title}
                  </h2>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>

      <div className="flex justify-center py-6">
        <button className="outline-2 outline-black text-black hover:bg-primary hover:uppercase hover:text-white cursor-pointer bg-transparent px-6 py-3">
          All Categories
        </button>
      </div>
    </section>
  );
};

export default ExploreCollection;
