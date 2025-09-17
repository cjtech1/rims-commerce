"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { Slide } from "@/types/interfaces";
import {
  SliderApiService,
  SliderApiError,
} from "@/lib/services/sliderApiService";
import { cn } from "@/lib/utils";

/**
 * Loading Skeleton Component
 * Provides visual feedback while data is being fetched
 */
const SliderSkeleton = () => (
  <div className="h-[calc(100vh-80px)] overflow-hidden">
    <div className="w-screen h-full flex flex-col gap-16 xl:flex-row bg-gray-100 animate-pulse">
      {/* Text Skeleton */}
      <div className="h-1/2 flex flex-col items-center justify-center gap-8 pt-4 lg:pt-0 2xl:gap-8 text-center xl:w-1/2 xl:h-full">
        <div className="h-8 bg-gray-300 rounded w-3/4"></div>
        <div className="h-12 bg-gray-300 rounded w-4/5"></div>
        <div className="h-10 bg-gray-300 rounded w-32"></div>
      </div>
      {/* Image Skeleton */}
      <div className="h-1/2 xl:w-1/2 xl:h-full bg-gray-300"></div>
    </div>
  </div>
);

/**
 * Error Component
 * Displays error message with retry option
 */
const SliderError = ({
  error,
  onRetry,
}: {
  error: string;
  onRetry: () => void;
}) => (
  <div className="h-[calc(100vh-80px)] overflow-hidden">
    <div className="w-screen h-full flex flex-col items-center justify-center gap-4 bg-red-50">
      <div className="text-red-600 text-center max-w-md">
        <h2 className="text-2xl font-semibold mb-2">Unable to Load Slides</h2>
        <p className="text-red-500 mb-4">{error}</p>
        <button
          onClick={onRetry}
          className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  </div>
);

/**
 * Enhanced Slider Component
 *
 * Features:
 * - Fetches data from API instead of hardcoded data
 * - Proper loading states and error handling
 * - Type safety with TypeScript interfaces
 * - Accessible keyboard navigation
 * - Auto-play with pause on hover
 * - Responsive design
 */
const Slider = () => {
  // Component state management following React best practices
  const [slides, setSlides] = useState<Slide[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  /**
   * Fetches slider data from API
   * Using useCallback for performance optimization
   */
  const fetchSlides = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Fetch only active slides with a reasonable limit
      const slidesData = await SliderApiService.getSliders({
        activeOnly: true,
        limit: 5,
      });

      setSlides(slidesData);

      // Reset current slide if new data has fewer slides
      if (slidesData.length > 0) {
        setCurrentSlide(0);
      }
    } catch (err) {
      console.error("Failed to fetch slides:", err);

      // Provide user-friendly error messages
      const errorMessage =
        err instanceof SliderApiError
          ? err.message
          : "Failed to load slider content. Please try again.";

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, []);

  /**
   * Auto-advance slider functionality
   * Only runs when component is not paused and has slides
   */
  useEffect(() => {
    if (slides.length === 0 || isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000); // Slightly slower for better UX

    return () => clearInterval(interval);
  }, [slides.length, isPaused]);

  /**
   * Fetch slides on component mount
   */
  useEffect(() => {
    fetchSlides();
  }, [fetchSlides]);

  /**
   * Keyboard navigation for accessibility
   */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (slides.length === 0) return;

      switch (event.key) {
        case "ArrowLeft":
          setCurrentSlide((prev) =>
            prev === 0 ? slides.length - 1 : prev - 1
          );
          break;
        case "ArrowRight":
          setCurrentSlide((prev) =>
            prev === slides.length - 1 ? 0 : prev + 1
          );
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [slides.length]);

  // Handle loading state
  if (isLoading) {
    return <SliderSkeleton />;
  }

  // Handle error state
  if (error) {
    return <SliderError error={error} onRetry={fetchSlides} />;
  }

  // Handle empty state
  if (slides.length === 0) {
    return (
      <div className="h-[calc(100vh-80px)] overflow-hidden">
        <div className="w-screen h-full flex items-center justify-center bg-gray-50">
          <p className="text-gray-500 text-xl">
            No slides available at the moment.
          </p>
        </div>
      </div>
    );
  }
  // Main slider render
  return (
    <div
      className="h-[calc(100vh-80px)] overflow-hidden relative"
      onMouseEnter={() => setIsPaused(true)} // Pause on hover
      onMouseLeave={() => setIsPaused(false)} // Resume on mouse leave
      role="region"
      aria-label="Image carousel"
      aria-live="polite"
    >
      {/* Slides Container */}
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              slide.bg,
              "w-screen h-full flex flex-col gap-16 xl:flex-row"
            )}
            aria-hidden={currentSlide !== index}
          >
            {/* TEXT CONTENT */}
            <div className="h-1/2 flex flex-col items-center justify-center gap-8 pt-4 lg:pt-0 2xl:gap-8 text-center xl:w-1/2 xl:h-full">
              {/* Description */}
              <p className="text-xl lg:text-3xl xl:text-5xl font-extralight px-4 max-w-4xl">
                {slide.description}
              </p>

              {/* Title */}
              <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold px-4 max-w-4xl">
                {slide.title}
              </h1>

              {/* CTA Button */}
              <Link href={slide.url} aria-label={`Shop ${slide.title}`}>
                <button className="px-6 py-3 bg-black text-white rounded-md border border-black transition-all duration-300 hover:bg-gray-100 hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                  Shop Now
                </button>
              </Link>
            </div>

            {/* IMAGE */}
            <div className="h-1/2 relative xl:w-1/2 xl:h-full">
              <Image
                src={slide.img}
                alt={slide.title} // Better alt text for accessibility
                fill
                sizes="(max-width: 1280px) 100vw, 50vw"
                className="object-cover"
                priority={index === 0} // Prioritize first image for performance
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute flex justify-center items-center w-full gap-4 bottom-4">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={cn(
              "w-3 h-3 rounded-full ring-1 ring-gray-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2",
              currentSlide === index
                ? "scale-150 bg-gray-600"
                : "hover:scale-110"
            )}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}: ${slide.title}`}
            aria-current={currentSlide === index ? "true" : "false"}
          >
            {currentSlide === index && (
              <div className="w-[6px] h-[6px] bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            )}
          </button>
        ))}
      </div>

      {/* Navigation Arrows (Optional - for better UX) */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
        onClick={() =>
          setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
        }
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6"
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
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300"
        onClick={() =>
          setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
        }
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6"
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

      {/* Pause Indicator */}
      {isPaused && (
        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          Paused
        </div>
      )}
    </div>
  );
};

export default Slider;
