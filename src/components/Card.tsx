"use client";

import Image from "next/image";
import Link from "next/link";

type CardProps = {
  id: number;
  title: string;
  desc: string;
  price: number;
  img: string;
  category?: string;
  slug?: string;
};

const Card = ({ title, desc, price, img, id, category, slug }: CardProps) => {
  return (
    <Link
      href={
        price != 0
          ? slug
            ? `/${slug}`
            : `/product?id=${id}&category=${category}`
          : `/list?category=${category}`
      }
    >
      <div className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-md border border-gray-100 h-full">
        <div className="relative w-full aspect-[3/2]">
          <Image
            src={img}
            alt={title}
            fill
            sizes="(min-width: 1024px) 192px, (min-width: 640px) 250px, 100vw"
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="flex-1 flex flex-col p-3 gap-1">
          <div className="flex justify-between items-start mb-1">
            <h2
              className="text-sm font-semibold text-gray-800 line-clamp-2 leading-tight"
              title={title}
            >
              {title}
            </h2>
            {price != 0 && (
              <span className="text-sm font-bold text-red-500 ml-2 flex-shrink-0">
                ₹{price}
              </span>
            )}
          </div>
          {price != 0 && desc && (
            <p className="text-gray-600 text-xs line-clamp-2 mb-2">{desc}</p>
          )}
          <div className="mt-auto flex items-end">
            {price != 0 && (
              <Link href={"/"}>
                <button className="w-full p-2 bg-red-500 text-white rounded-md text-sm font-medium hover:bg-red-600 transition-colors">
                  Add to Cart
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
