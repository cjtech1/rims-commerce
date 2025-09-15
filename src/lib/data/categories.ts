import { Categories } from "@/types/interfaces";

/**
 * Centralized Categories Data
 * This is the single source of truth for all category information
 */
export const CATEGORIES_DATA: Categories[] = [
  {
    id: 1,
    title: "Fashion & Apparel",
    img: "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=600&q=80",
    category: "Clothing",
  },
  {
    id: 2,
    title: "Electronics & Gadgets",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    category: "Electronics",
  },
  {
    id: 3,
    title: "Home & Kitchen",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    category: "Home & Kitchen",
  },
  {
    id: 4,
    title: "Health & Beauty",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    category: "Health & Beauty",
  },
  {
    id: 5,
    title: "Sports & Fitness",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80",
    category: "Fitness",
  },
  {
    id: 6,
    title: "Food & Beverages",
    img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=600&q=80",
    category: "Food & Beverages",
  },
  {
    id: 7,
    title: "Footwear",
    img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80",
    category: "Footwear",
  },
  {
    id: 8,
    title: "Accessories",
    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
    category: "Accessories",
  },
  {
    id: 9,
    title: "Sportswear",
    img: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&w=600&q=80",
    category: "Sportswear",
  },
];

/**
 * Helper functions for category data manipulation
 */
export const CategoryDataHelpers = {
  // Get all categories
  getAllCategories: (): Categories[] => CATEGORIES_DATA,

  // Get category by ID
  getCategoryById: (id: number): Categories | undefined =>
    CATEGORIES_DATA.find((category) => category.id === id),

  // Get category by category name
  getCategoryByName: (categoryName: string): Categories | undefined =>
    CATEGORIES_DATA.find(
      (category) =>
        category.category.toLowerCase() === categoryName.toLowerCase()
    ),

  // Get categories with limit
  getCategoriesWithLimit: (limit: number): Categories[] =>
    CATEGORIES_DATA.slice(0, limit),
};
