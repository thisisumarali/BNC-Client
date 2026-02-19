"use client";

import { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";

const HomeCarousel = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const items = [
    {
      title: "Long Established Fact",
      img: "/images/Figs.jpg",
      link: "/dry-fruits",
    },
    { title: "Long Established Fact", img: "/images/cranberry.jpg", link: "/" },
    { title: "Long Established Fact", img: "/images/Ajwa.jpg", link: "/" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section className="py-8">
      <div className="mx-auto w-[75vw]">
        <div className="rounded-3xl overflow-hidden">
          <Slider {...settings}>
            {items.map((item, index) => (
              <div key={index}>
                <div className="relative h-screen flex items-end">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    priority
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-black/10" />

                  <div className="relative w-full px-16 pb-12 z-10">
                    <div
                      className="bg-white/20 backdrop-blur-xl
                               border border-white/30
                               rounded-2xl
                               px-10
                               h-[22vh]
                               flex items-center justify-between
                               text-white shadow-xl"
                    >
                      <div className="max-w-xl">
                        <h2 className="text-5xl font-semibold py-2">
                          {item.title}
                        </h2>
                        <p className="text-xl font-sans py-2 text-white/80">
                          It is a long established fact that a reader will be
                          distracted by readable content when looking at its
                          layout.
                        </p>
                      </div>

                      <button className="bg-transparent border-white border-2 text-white px-12 py-4 rounded-3xl text-sm font-medium hover:bg-primary transition">
                        Shop Now →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default HomeCarousel;
