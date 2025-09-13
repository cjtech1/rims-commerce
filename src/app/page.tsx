"use client";

import { useRef } from "react";
import Categories, { CategoriesRef } from "@/components/Categories";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";

const HomePage = () => {
  const categoriesRef = useRef<CategoriesRef>(null);

  const handleScrollLeft = () => {
    categoriesRef.current?.scrollLeft();
  };

  const handleScrollRight = () => {
    categoriesRef.current?.scrollRight();
  };

  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl mb-4">Featured Products</h1>
        <ProductList />
      </div>

      <div className="mt-14 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">Categories</h1>
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={handleScrollLeft}
              className="bg-white rounded-full p-2.5 shadow-md border border-gray-200 hover:bg-gray-50 hover:shadow-lg transition-all duration-200"
              aria-label="Scroll categories left"
            >
              <svg
                className="w-4 h-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={handleScrollRight}
              className="bg-white rounded-full p-2.5 shadow-md border border-gray-200 hover:bg-gray-50 hover:shadow-lg transition-all duration-200"
              aria-label="Scroll categories right"
            >
              <svg
                className="w-4 h-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="relative">
          <Categories ref={categoriesRef} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
