import { query } from "@/lib/db";
import { Slide } from "@/types/interfaces";

/**
 * SERVER-SIDE ONLY DATABASE SERVICE
 *
 * ⚠️  WARNING: This service contains Node.js modules and database connections.
 * It should ONLY be used in:
 * - API routes (/app/api/*)
 * - Server components
 * - Server actions
 *
 * DO NOT import this in client components (components with "use client")
 * Use SliderApiService instead for client-side operations.
 */

/**
 * Custom error class for database-related errors
 */
export class SliderServiceError extends Error {
  constructor(
    message: string,
    public statusCode: number,
    public originalError?: unknown
  ) {
    super(message);
    this.name = "SliderServiceError";
  }
}

/**
 * Database service for slider operations
 */
export class SliderService {
  /**
   * Get all sliders from database
   * @param activeOnly - Filter only active sliders
   * @param limit - Limit number of results
   * @returns Array of sliders
   */
  static async getAllSliders(
    activeOnly: boolean = false,
    limit?: number
  ): Promise<Slide[]> {
    try {
      let queryText = `
        SELECT 
          id,
          title,
          description,
          image_url as img,
          link_url as url,
          background_class as bg,
          is_active as "isActive",
          created_at as "createdAt",
          updated_at as "updatedAt"
        FROM sliders
      `;

      const params: any[] = [];
      const conditions: string[] = [];

      if (activeOnly) {
        conditions.push("is_active = $1");
        params.push(true);
      }

      if (conditions.length > 0) {
        queryText += ` WHERE ${conditions.join(" AND ")}`;
      }

      queryText += " ORDER BY sort_order ASC, created_at DESC";

      if (limit && limit > 0) {
        queryText += ` LIMIT $${params.length + 1}`;
        params.push(limit);
      }

      const result = await query(queryText, params);
      return result.rows;
    } catch (error) {
      console.error("Error fetching sliders from database:", error);
      throw new SliderServiceError(
        "Failed to fetch sliders from database",
        500,
        error
      );
    }
  }

  /**
   * Get slider by ID from database
   * @param id - Slider ID
   * @returns Slider or null if not found
   */
  static async getSliderById(id: number): Promise<Slide | null> {
    try {
      const queryText = `
        SELECT 
          id,
          title,
          description,
          image_url as img,
          link_url as url,
          background_class as bg,
          is_active as "isActive",
          created_at as "createdAt",
          updated_at as "updatedAt"
        FROM sliders
        WHERE id = $1
      `;

      const result = await query(queryText, [id]);
      return result.rows.length > 0 ? result.rows[0] : null;
    } catch (error) {
      console.error("Error fetching slider by ID from database:", error);
      throw new SliderServiceError(
        "Failed to fetch slider from database",
        500,
        error
      );
    }
  }

  /**
   * Get active sliders from database
   * @returns Array of active sliders
   */
  static async getActiveSliders(): Promise<Slide[]> {
    return await this.getAllSliders(true);
  }

  /**
   * Get sliders sorted by date (newest first)
   * @param activeOnly - Filter only active sliders
   * @returns Array of sliders sorted by creation date
   */
  static async getSlidersSortedByDate(
    activeOnly: boolean = false
  ): Promise<Slide[]> {
    try {
      let queryText = `
        SELECT 
          id,
          title,
          description,
          image_url as img,
          link_url as url,
          background_class as bg,
          is_active as "isActive",
          created_at as "createdAt",
          updated_at as "updatedAt"
        FROM sliders
      `;

      const params: any[] = [];

      if (activeOnly) {
        queryText += " WHERE is_active = $1";
        params.push(true);
      }

      queryText += " ORDER BY created_at DESC";

      const result = await query(queryText, params);
      return result.rows;
    } catch (error) {
      console.error(
        "Error fetching sliders sorted by date from database:",
        error
      );
      throw new SliderServiceError(
        "Failed to fetch sliders from database",
        500,
        error
      );
    }
  }

  /**
   * Create a new slider (for future use)
   * @param sliderData - Slider data to insert
   * @returns Created slider
   */
  static async createSlider(
    sliderData: Omit<Slide, "id" | "createdAt" | "updatedAt">
  ): Promise<Slide> {
    try {
      const queryText = `
        INSERT INTO sliders (title, description, image_url, link_url, background_class, is_active, sort_order)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING 
          id,
          title,
          description,
          image_url as img,
          link_url as url,
          background_class as bg,
          is_active as "isActive",
          created_at as "createdAt",
          updated_at as "updatedAt"
      `;

      const params = [
        sliderData.title,
        sliderData.description,
        sliderData.img,
        sliderData.url,
        sliderData.bg,
        sliderData.isActive,
        0, // default sort_order
      ];

      const result = await query(queryText, params);
      return result.rows[0];
    } catch (error) {
      console.error("Error creating slider in database:", error);
      throw new SliderServiceError(
        "Failed to create slider in database",
        500,
        error
      );
    }
  }

  /**
   * Legacy method for compatibility with existing frontend code
   * @param options - Query options for filtering
   * @returns Array of sliders
   */
  static async getSliders(
    options: {
      activeOnly?: boolean;
      limit?: number;
    } = {}
  ): Promise<Slide[]> {
    return await this.getAllSliders(options.activeOnly || false, options.limit);
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
    const data = await SliderService.getSliders(options);
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
        error instanceof SliderServiceError
          ? error
          : new SliderServiceError("Unknown error", 500, error),
    };
  }
}
