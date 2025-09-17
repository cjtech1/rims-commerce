import { Slide, SliderApiResponse, ApiError } from "@/types/interfaces";

/**
 * Configuration for API requests
 */
const DEFAULT_CONFIG: RequestInit = {
  headers: {
    "Content-Type": "application/json",
  },
};

/**
 * Custom error class for API-related errors
 */
export class SliderApiError extends Error {
  constructor(
    message: string,
    public statusCode: number,
    public originalError?: unknown
  ) {
    super(message);
    this.name = "SliderApiError";
  }
}

/**
 * Client-side Slider API Service
 * This service makes HTTP requests to your API endpoints
 * Should be used in client components and browser environments
 */
export class SliderApiService {
  /**
   * Fetches all active sliders from the API
   *
   * @param options - Query options for filtering
   * @returns Promise<Slide[]> - Array of slide objects
   * @throws SliderApiError - When API request fails
   */
  static async getSliders(
    options: {
      activeOnly?: boolean;
      limit?: number;
    } = {}
  ): Promise<Slide[]> {
    try {
      // Build query parameters
      const queryParams = new URLSearchParams();

      if (options.activeOnly !== undefined) {
        queryParams.set("active", options.activeOnly.toString());
      }

      if (options.limit !== undefined) {
        queryParams.set("limit", options.limit.toString());
      }

      const queryString = queryParams.toString();
      const url = `/api/sliders${queryString ? `?${queryString}` : ""}`;

      // Make API request with proper error handling
      const response = await fetch(url, {
        ...DEFAULT_CONFIG,
        method: "GET",
        // Add cache configuration for better performance
        next: {
          revalidate: 300, // Revalidate every 5 minutes
        },
      });

      // Check if response is ok
      if (!response.ok) {
        throw new SliderApiError(
          `Failed to fetch sliders: ${response.status} ${response.statusText}`,
          response.status
        );
      }

      const data: SliderApiResponse = await response.json();

      // Handle API-level errors
      if (!data.success) {
        const errorData = data as unknown as ApiError;
        throw new SliderApiError(
          errorData.message || "Unknown API error",
          errorData.statusCode || response.status
        );
      }

      return data.data;
    } catch (error) {
      // Re-throw SliderApiError as-is
      if (error instanceof SliderApiError) {
        throw error;
      }

      // Handle network or other errors
      if (error instanceof TypeError) {
        throw new SliderApiError(
          "Network error: Please check your connection",
          0,
          error
        );
      }

      // Handle JSON parsing errors
      throw new SliderApiError("Failed to process server response", 500, error);
    }
  }

  /**
   * Creates a new slider (for future admin functionality)
   *
   * @param sliderData - Partial slider data to create
   * @returns Promise<Slide> - Created slider object
   */
  static async createSlider(
    sliderData: Omit<Slide, "id" | "createdAt" | "updatedAt">
  ): Promise<Slide> {
    try {
      const response = await fetch("/api/sliders", {
        ...DEFAULT_CONFIG,
        method: "POST",
        body: JSON.stringify(sliderData),
      });

      if (!response.ok) {
        throw new SliderApiError(
          `Failed to create slider: ${response.status} ${response.statusText}`,
          response.status
        );
      }

      const data = await response.json();

      if (!data.success) {
        throw new SliderApiError(
          data.message || "Failed to create slider",
          data.statusCode || response.status
        );
      }

      return data.data;
    } catch (error) {
      if (error instanceof SliderApiError) {
        throw error;
      }

      throw new SliderApiError("Failed to create slider", 500, error);
    }
  }
}

/**
 * Hook-like function for use with React components
 * This pattern is common in modern React applications
 *
 * Usage example:
 * const { data, loading, error } = await useSliderData();
 */
export async function useSliderData(options?: {
  activeOnly?: boolean;
  limit?: number;
}) {
  try {
    const data = await SliderApiService.getSliders(options);
    return {
      data,
      loading: false,
      error: null,
    };
  } catch (error) {
    return {
      data: [],
      loading: false,
      error:
        error instanceof SliderApiError
          ? error
          : new SliderApiError("Unknown error", 500, error),
    };
  }
}
