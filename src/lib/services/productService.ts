import { Product, ProductsApiResponse, ApiError } from "@/types/interfaces";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";

const DEFAULT_CONFIG: RequestInit = {
  headers: {
    "Content-Type": "application/json",
  },
};

export class ProductError extends Error {
  constructor(
    message: string,
    public statusCode: number,
    public originalError?: unknown
  ) {
    super(message);
    this.name = "FeaturedProductError";
  }
}

export class FeaturedProductService {
  static async getProducts(
    options: { featured?: boolean; limit?: number; category?: string } = {}
  ): Promise<Product[]> {
    try {
      const queryParams = new URLSearchParams();

      if (options.featured !== undefined) {
        queryParams.set("featured", options.featured.toString());
      }
      if (options.limit !== undefined) {
        queryParams.set("limit", options.limit.toString());
      }

      if (options.category !== undefined) {
        queryParams.set("category", options.category);
      }

      console.log(options.category);

      const queryString = queryParams.toString();
      const url = `/api/products${queryString ? `?${queryString}` : ""}`;

      const response = await fetch(url, {
        ...DEFAULT_CONFIG,
        method: "GET",
        next: {
          revalidate: 300,
        },
      });

      if (!response.ok) {
        throw new ProductError(
          `Failed to fetch products: ${response.status} ${response.statusText}`,
          response.status
        );
      }

      const data: ProductsApiResponse = await response.json();

      if (!data.success) {
        const errorData = data as unknown as ApiError;
        throw new ProductError(
          errorData.message || "Unknown API error",
          errorData.statusCode || response.status
        );
      }

      return data.data;
    } catch (error) {
      if (error instanceof ProductError) {
        throw error;
      }

      // Handle network or other errors
      if (error instanceof TypeError) {
        throw new ProductError(
          "Network error: Please check your connection",
          0,
          error
        );
      }

      // Handle JSON parsing errors
      throw new ProductError("Failed to process server response", 500, error);
    }
  }
}

// Create new slider service same as sliderService.ts
