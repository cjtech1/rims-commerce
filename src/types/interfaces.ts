/**
 * Interface definitions for the e-commerce application
 * These types ensure type safety throughout the application
 */

/**
 * Represents a single slide in the hero slider
 */
export interface Slide {
  id: number;
  title: string;
  description: string;
  img: string;
  url: string;
  bg: string;
  isActive?: boolean; // Optional field for UI state
  createdAt?: string; // Optional timestamp
  updatedAt?: string; // Optional timestamp
}

/**
 * API Response wrapper for slider data
 * Following REST API conventions with metadata
 */
export interface SliderApiResponse {
  success: boolean;
  data: Slide[];
  message?: string;
  totalCount?: number;
}

/**
 * Error response structure for consistent error handling
 */
export interface ApiError {
  success: false;
  error: string;
  message: string;
  statusCode: number;
}

/**
 * Generic API response type that can be either success or error
 */
export type ApiResponse<T> =
  | { success: true; data: T; message?: string }
  | ApiError;

// For Products
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  img: string;
  category: string;
  inStock: boolean;
  featured: boolean;
  createdAt?: string; // Optional timestamp
  updatedAt?: string; // Optional timestamp
}

export interface ProductsApiResponse {
  success: boolean;
  data: Product[];
  message?: string;
  totalCount?: number;
}

//For Categories
export interface Categories {
  id: number;
  title: string;
  img: string;
  category: string;
}

export interface CategoriesApiResponse {
  success: boolean;
  data: Product[];
  message?: string;
  totalCount?: number;
}
