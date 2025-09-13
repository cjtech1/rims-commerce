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
