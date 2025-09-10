"use client";

import Image from "next/image";
import Link from "next/link";

type CardProps = {
  title: string;
  desc: string;
  price: number;
  img: string;
};

const Card = ({ title, desc, price, img }: CardProps) => {
  return (
    <Link href={price != 0 ? "" : "/list"}>
      <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col transition-transform hover:scale-105 hover:shadow-lg border border-gray-100">
        <div className="relative w-full aspect-[4/3]">
          <Image
            src={img}
            alt={title}
            fill
            sizes="(min-width: 640px) 250px, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col p-4 gap-2">
          <div className="flex justify-between items-center mb-1">
            <h2
              className="text-lg font-semibold text-gray-800 truncate"
              title={title}
            >
              {title}
            </h2>
            {price != 0 && (
              <span className="text-base font-bold text-red-500">₹{price}</span>
            )}
          </div>
          {price != 0 && (
            <p className="text-gray-600 text-sm line-clamp-2 mb-2">{desc}</p>
          )}
          <div className="mt-auto flex items-end">
            {price != 0 && (
              <Link href={"/"}>
                <button className="w-full p-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors">
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
