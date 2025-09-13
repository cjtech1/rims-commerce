"use client";

import Link from "next/link";
import { useState } from "react";

const colors = [
  { id: 1, hex: "#51d0de" }, // Lightning Blue
  { id: 2, hex: "#fea49f" }, // Old Makeup Pink
  { id: 3, hex: "#fbaf08" }, // Goldenrod Yellow
  { id: 4, hex: "#00a0a0" }, // Bluebell Light Blue
];

const CustomizeProducts = () => {
  const tempStock = 5;
  const [currentColor, setCurrentColor] = useState(-1);
  const [quantity, setQuantity] = useState(1);
  const handleQuantity = (type: "i" | "d") => {
    if (type === "i" && quantity != tempStock) setQuantity((prev) => prev + 1);
    if (type === "d" && quantity != 1) setQuantity((prev) => prev - 1);
  };
  return (
    <div>
      {/* COLOR */}
      <div className="mb-6 flex  flex-col gap-1">
        <p className="text-xl font-medium">Choose a Color</p>
        <div className="flex items-center w-full gap-4">
          {colors.map((color, index) => (
            <div
              key={color.id}
              style={{ backgroundColor: color.hex }}
              className={`w-5 h-5 xl:w-6 xl:h-6 rounded-full ring-2 ring-gray-600 cursor-pointer flex items-center justify-center ${
                currentColor === index ? "scale-125 ring-red-500" : ""
              }`}
              onClick={() => setCurrentColor(index)}
            >
              <div
                key={color.id}
                className="w-full h-[1px] bg-red-400 -rotate-45"
              ></div>
            </div>
          ))}
        </div>
      </div>
      {/* SIZE */}
      <div className="mb-6 flex  flex-col gap-1">
        <div>
          <p className="text-xl font-medium">Choose a Size</p>
        </div>
        <div className="flex gap-4">
          <div className="px-2 py-1 bg-red-500 rounded-md text-white cursor-pointer">
            Large
          </div>
          <div className="px-2 py-1 border border-red-500 rounded-md text-red-600 cursor-pointer">
            Medium
          </div>
          <div className="px-2 py-1 bg-red-200 rounded-md text-gray-50 cursor-pointer">
            small
          </div>
        </div>
      </div>
      {/* QUANTITY */}
      <div className="mb-6 flex  flex-col gap-1">
        <div>
          <p className="text-xl font-medium">Choose Quantity</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center flex-row">
            <div className="flex gap-3  bg-gray-100 items-center  rounded-full px-1">
              <p
                className="p-2 cursor-pointer font-semibold"
                onClick={() => handleQuantity("d")}
              >
                -
              </p>
              <p className="p-2 text-xl font-bold">{quantity}</p>
              <p
                className="p-2 cursor-pointer text-xl font-semibold"
                onClick={() => handleQuantity("i")}
              >
                +
              </p>
            </div>
            <div>
              <p className="text-black">
                <span className="text-red-500 font-semibold">
                  Only {tempStock}
                </span>{" "}
                left!
              </p>
            </div>
          </div>
          <div>
            <Link href="">
              <button className=" py-2 border border-red-400 rounded-full text-red-500  font-medium hover:bg-gray-100 transition-colors px-3">
                Add to Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomizeProducts;
