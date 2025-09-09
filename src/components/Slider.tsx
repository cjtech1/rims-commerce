"use client";

import { transform } from "next/dist/build/swc";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off on selected fashion trends.",
    img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&w=600",
    url: "/collections/summer-sale",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "New Arrivals: Electronics",
    description: "Discover the latest gadgets and smart devices.",
    img: "https://images.pexels.com/photos/3861968/pexels-photo-3861968.jpeg?auto=compress&w=600",
    url: "/collections/electronics-new",
    bg: "bg-gradient-to-r from-blue-50 to-purple-50",
  },
  {
    id: 3,
    title: "Exclusive Home Decor",
    description: "Beautify your home with our handcrafted decor pieces.",
    img: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&w=600",
    url: "/collections/home-decor",
    bg: "bg-gradient-to-r from-green-50 to-yellow-50",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`${slide.bg} w-screen h-full flex flex-col  gap-16 xl:flex-row`}
          >
            {/* TEXT */}
            <div className="h-1/2 flex flex-col items-center justify-center gap-8 pt-4 lg:pt-0 2xl:gap-8 text-center xl:w-1/2 xl:h-full">
              <p className="text-xl lg:text-3xl xl:text-5xl font-extralight">
                {slide.description}
              </p>
              <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">
                {slide.title}
              </h1>
              <Link href={slide.url}>
                <button className="p-2 bg-black text-white rounded-md border border-black border-s hover:bg-gray-100 hover:text-black">
                  Shop Now
                </button>
              </Link>
            </div>
            {/* IMAGE */}
            <div className="h-1/2 relative xl:w-1/2 xl:h-full">
              <Image
                src={slide.img}
                alt=""
                fill
                sizes="100%"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute flex justify-center items-center w-full gap-4 bottom-4">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
              currentSlide === index ? "scale-150" : ""
            }`}
            onClick={() => setCurrentSlide(index)}
          >
            {currentSlide === index && (
              <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
