import { Slide } from "@/types/interfaces";

/**
 * Centralized Slider Data
 * This is the single source of truth for all slider information
 */
export const SLIDERS_DATA: Slide[] = [
  {
    id: 1,
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off on selected fashion trends.",
    img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&w=600",
    url: "/collections/summer-sale",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
    isActive: true,
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-20T15:30:00Z",
  },
  {
    id: 2,
    title: "New Arrivals: Electronics",
    description: "Discover the latest gadgets and smart devices.",
    img: "https://images.pexels.com/photos/3861968/pexels-photo-3861968.jpeg?auto=compress&w=600",
    url: "/collections/electronics-new",
    bg: "bg-gradient-to-r from-blue-50 to-purple-50",
    isActive: true,
    createdAt: "2024-01-16T12:00:00Z",
    updatedAt: "2024-01-21T09:15:00Z",
  },
  {
    id: 3,
    title: "Exclusive Home Decor",
    description: "Beautify your home with our handcrafted decor pieces.",
    img: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&w=600",
    url: "/collections/home-decor",
    bg: "bg-gradient-to-r from-green-50 to-yellow-50",
    isActive: true,
    createdAt: "2024-01-17T14:30:00Z",
    updatedAt: "2024-01-22T11:45:00Z",
  },
  {
    id: 4,
    title: "Winter Collection 2024",
    description: "Stay warm and stylish with our winter essentials.",
    img: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&w=600",
    url: "/collections/winter-2024",
    bg: "bg-gradient-to-r from-blue-100 to-indigo-100",
    isActive: true,
    createdAt: "2024-01-18T16:20:00Z",
    updatedAt: "2024-01-23T12:10:00Z",
  },
];

/**
 * Helper functions for slider data manipulation
 */
export const SliderDataHelpers = {
  // Get all sliders
  getAllSliders: (): Slide[] => SLIDERS_DATA,

  // Get slider by ID
  getSliderById: (id: number): Slide | undefined =>
    SLIDERS_DATA.find((slider) => slider.id === id),

  // Get active sliders
  getActiveSliders: (): Slide[] =>
    SLIDERS_DATA.filter((slider) => slider.isActive),

  // Get sliders with limit
  getSlidersWithLimit: (limit: number): Slide[] => SLIDERS_DATA.slice(0, limit),

  // Get sliders sorted by date (newest first)
  getSlidersSortedByDate: (): Slide[] =>
    SLIDERS_DATA.slice().sort(
      (a, b) =>
        new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
    ),
};
