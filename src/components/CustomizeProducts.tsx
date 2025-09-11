"use client";

import { useState } from "react";

const colors = [
  { id: 1, hex: "#51d0de" }, // Lightning Blue
  { id: 2, hex: "#fea49f" }, // Old Makeup Pink
  { id: 3, hex: "#fbaf08" }, // Goldenrod Yellow
  { id: 4, hex: "#00a0a0" }, // Bluebell Light Blue
];

const CustomizeProducts = () => {
  const [currentColor, setCurrentColor] = useState(-1);
  return (
    <div>
      {/* COLOR */}
      <div className="mb-4 flex  flex-col gap-4">
        <p className="text-xl font-medium">Choose a Color</p>
        <div className="flex items-center w-full gap-4">
          {colors.map((color, index) => (
            <div
              key={color.id}
              style={{ backgroundColor: color.hex }}
              className={`w-5 h-5 rounded-full ring-2 ring-gray-600 cursor-pointer flex items-center justify-center ${
                currentColor === index ? "scale-125 ring-red-500" : ""
              }`}
              onClick={() => setCurrentColor(index)}
            ></div>
          ))}
        </div>
      </div>
      {/* SIZE */}
      {/* QUANTITY */}
    </div>
  );
};

export default CustomizeProducts;
