"use client";

import {
  useRef,
  forwardRef,
  useImperativeHandle,
  useState,
  useCallback,
  useEffect,
} from "react";
import Card from "./Card";
import { Categories as catg } from "@/types/interfaces";
import {
  CategoryError,
  CategoryServiece,
} from "@/lib/services/categoryService";

const productError = ({
  error,
  onRetry,
}: {
  error: String;
  onRetry: () => void;
}) => <Card title="Error in Loading..." desc="" price={0} img="" />;

export interface CategoriesRef {
  scrollLeft: () => void;
  scrollRight: () => void;
}

const Categories = forwardRef<CategoriesRef>((props, ref) => {
  const [category, setCategory] = useState<catg[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchCategories = useCallback(async () => {
    try {
      setError(null);
      const CategoryData = await CategoryServiece.getCategories();
      setCategory(CategoryData);
    } catch (err) {
      console.error("Failed to fetch slides:", err);

      // Provide user-friendly error messages
      const errorMessage =
        err instanceof CategoryError
          ? err.message
          : "Failed to load slider content. Please try again.";

      setError(errorMessage);
    }
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

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
          {category &&
            category.map((category, index) => (
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
        {category &&
          category.map((category, index) => (
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
