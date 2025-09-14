import { error } from "console";
import {
  ApiError,
  Categories,
  CategoriesApiResponse,
} from "@/types/interfaces";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";
const DEFAULT_CONFIG: RequestInit = {
  headers: {
    "Content-Type": "application/json",
  },
};

export class CategoryError extends Error {
  constructor(
    message: string,
    public statusCode: number,
    public originalError?: unknown
  ) {
    super(message);
    this.name = "CategoryError";
  }
}

export class CategoryServiece {
  static async getCategories(): Promise<Categories[]> {
    try {
      const url = "/api/categories";

      const response = await fetch(url, {
        ...DEFAULT_CONFIG,
        method: "GET",
        next: {
          revalidate: 300,
        },
      });

      if (!response.ok) {
        throw new CategoryError(
          `Failed to fetch products: ${response.status} ${response.statusText}`,
          response.status
        );
      }
      const data: CategoriesApiResponse = await response.json();
      if (!data.success) {
        const errorData = data as unknown as ApiError;
        throw new CategoryError(
          errorData.message || "Unknown API error",
          errorData.statusCode || response.status
        );
      }

      return data.data;
    } catch (error) {
      if (error instanceof CategoryError) throw error;

      if (error instanceof TypeError) {
        throw new CategoryError(
          "Network error: Please check your connection",
          0,
          error
        );
      }
      throw new CategoryError("Failed to process server response", 500, error);
    }
  }
}
