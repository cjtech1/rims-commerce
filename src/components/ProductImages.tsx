"use client";

import Image from "next/image";
import { useState } from "react";

interface ProductImagesProps {
  images?: string[];
}

const ProductImages = ({ images = [] }: ProductImagesProps) => {
  const [index, setIndex] = useState(0);
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  // Basic URL validation
  const isValidImageUrl = (url: string): boolean => {
    if (!url || url.trim() === "") return false;
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  // Fallback images if no images provided
  const defaultImages = [
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80",
  ];

  // Filter out empty, null, invalid URLs, and failed images
  const validImages = images.filter(
    (img) => isValidImageUrl(img) && !failedImages.has(img)
  );
  const displayImages = validImages.length > 0 ? validImages : defaultImages;

  const handleImageError = (imageUrl: string) => {
    setFailedImages((prev) => {
      const newSet = new Set(prev);
      newSet.add(imageUrl);
      return newSet;
    });
    // If current image failed, move to next available image
    if (displayImages[index] === imageUrl && displayImages.length > 1) {
      setIndex((prevIndex) => (prevIndex + 1) % displayImages.length);
    }
  };

  // Reset index if it exceeds available images
  if (index >= displayImages.length) {
    setIndex(0);
  }

  return (
    <div>
      <div className="h-[500px] relative">
        <Image
          src={displayImages[index]}
          alt="Product image"
          fill
          sizes="50vw"
          className="object-cover rounded-md"
          onError={() => handleImageError(displayImages[index])}
        />
      </div>
      {/* Only show thumbnails if there are multiple images */}
      {displayImages.length > 1 && (
        <div className="flex gap-4">
          {displayImages.map((imageUrl, imageIndex) => {
            // Calculate width based on number of images
            const widthClass =
              displayImages.length === 1
                ? "w-full"
                : displayImages.length === 2
                ? "w-1/2"
                : displayImages.length === 3
                ? "w-1/3"
                : "w-1/4";

            return (
              <div
                className={`${widthClass} h-32 gap-4 mt-8 relative cursor-pointer`}
                key={imageIndex}
              >
                <Image
                  src={imageUrl}
                  alt={`Product image ${imageIndex + 1}`}
                  fill
                  sizes="25vw"
                  className="object-cover rounded-md"
                  onClick={() => setIndex(imageIndex)}
                  onError={() => handleImageError(imageUrl)}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductImages;
