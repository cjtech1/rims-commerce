"use client";

import { useRef, forwardRef, useImperativeHandle } from "react";
import Card from "./Card";

const categories = [
  {
    id: 1,
    title: "Fashion & Apparel",
    img: "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Consumer Electronics",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Home & Decor",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "Health & Beauty",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    title: "Sports & Outdoors",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    title: "Books & Media",
    img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=600&q=80",
  },
];

export interface CategoriesRef {
  scrollLeft: () => void;
  scrollRight: () => void;
}

const Categories = forwardRef<CategoriesRef>((props, ref) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 192 + 24; // w-48 (192px) + gap (24px)
      const scrollAmount = cardWidth * 2; // Scroll by 2 cards at a time
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 192 + 24; // w-48 (192px) + gap (24px)
      const scrollAmount = cardWidth * 2; // Scroll by 2 cards at a time
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useImperativeHandle(ref, () => ({
    scrollLeft,
    scrollRight,
  }));

  return (
    <div className="relative">
      {/* Desktop: Horizontal scrollable layout */}
      <div className="hidden lg:block">
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categories &&
            categories.map((category, index) => (
              <div key={index} className="flex-shrink-0 w-48">
                <Card
                  title={category.title}
                  img={category.img}
                  desc=""
                  price={0}
                />
              </div>
            ))}
        </div>
      </div>

      {/* Mobile and Tablet: Grid layout */}
      <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {categories &&
          categories.map((category, index) => (
            <Card
              key={index}
              title={category.title}
              img={category.img}
              desc=""
              price={0}
            />
          ))}
      </div>
    </div>
  );
});

Categories.displayName = "Categories";

export default Categories;
