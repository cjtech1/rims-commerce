"use client";

import { url } from "inspector";
import Image from "next/image";
import { list } from "postcss";
import { useState } from "react";
const images = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80",
  },
];

const ProductImages = () => {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex gap-4">
        {images &&
          images.map((image, index) => (
            <div
              className="w-1/4 h-32 gap-4 mt-8 relative cursor-pointer"
              key={index}
            >
              <Image
                src={image.url}
                alt=""
                fill
                sizes="50vw"
                className="object-cover rounded-md"
                onClick={() => setIndex(index)}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductImages;
