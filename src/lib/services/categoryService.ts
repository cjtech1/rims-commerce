import { query } from "@/lib/db";
import { Categories } from "@/types/interfaces";

export class CategoryServiceError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public originalError?: unknown
  ) {
    super(message);
    this.name = "CategoryServiceError";
  }
}

export class CategoryService {
  static async getAllCategories(): Promise<Categories[]> {
    try {
      const queryText =
        "SELECT id,name as title,slug as category,image_url as img FROM categories";
      const result = await query(queryText);
      return result.rows;
    } catch (err) {
      throw new CategoryServiceError("Category DB fetch Failed", 500, err);
    }
  }
}
