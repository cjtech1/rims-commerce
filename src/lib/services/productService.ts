import { Product } from "@/types/interfaces";
import { query } from "../db";

export class ProductServiceError extends Error {
  constructor(
    message: string,
    public statusCode: number,
    public originalError?: unknown
  ) {
    super(message);
    this.name = "ProductService error";
  }
}

export class ProductService {
  static async getFeaturedProducts(): Promise<Product[]> {
    try {
      const queryText = `
        SELECT 
          p.id as id,
          p.name as name,
          p.slug as slug,
          p.description as description,
          p.price as price,
          p.in_stock as "inStock",
          p.featured as featured,
          p.created_at as "createdAt",
          p.updated_at as "updatedAt",
          c.name as category,
          pi.image_url as img
        FROM products p
        JOIN categories c ON p.category_id = c.id
        LEFT JOIN product_images pi ON p.id = pi.product_id AND pi.sort_order = 0
        WHERE p.in_stock = true AND p.featured = true
        ORDER BY p.created_at DESC
        LIMIT 8
      `;
      const result = await query(queryText);
      return result.rows;
    } catch (error) {
      throw new ProductServiceError(
        "Failed to fetch featured products from database",
        500,
        error
      );
    }
  }

  static async getProductByCategory(category: string): Promise<Product[]> {
    try {
      const queryText = `
      SELECT 
      p.id as id,
      p.name as name,
      p.slug as slug,
      p.description as description,
      p.price as price,
      p.in_stock as "inStock",
      p.featured as featured,
      p.created_at as "createdAt",
      p.updated_at as "updatedAt",
      c.name as category,
      pi.image_url as img,
      COALESCE(
        ARRAY_AGG(pi2.image_url ORDER BY pi2.sort_order) FILTER (WHERE pi2.image_url IS NOT NULL),
        ARRAY[]::text[]
      ) as images
    FROM products p
    JOIN categories c ON p.category_id = c.id
    LEFT JOIN product_images pi ON p.id = pi.product_id AND pi.sort_order = 0
    LEFT JOIN product_images pi2 ON p.id = pi2.product_id
    WHERE c.slug = $1
    GROUP BY p.id, c.name, pi.image_url
      `;
      const result = await query(queryText, [category]);
      return result.rows;
    } catch (error) {
      throw new ProductServiceError(
        "Failed to fetch product from database",
        500,
        error
      );
    }
  }
  static async getProductByName(name: string): Promise<Product[]> {
    try {
      const queryText = `
      SELECT 
      p.id as id,
      p.name as name,
      p.slug as slug,
      p.description as description,
      p.price as price,
      p.in_stock as "inStock",
      p.featured as featured,
      p.created_at as "createdAt",
      p.updated_at as "updatedAt",
      c.name as category,
      pi.image_url as img,
      COALESCE(
        ARRAY_AGG(pi2.image_url ORDER BY pi2.sort_order) FILTER (WHERE pi2.image_url IS NOT NULL),
        ARRAY[]::text[]
      ) as images
    FROM products p
    JOIN categories c ON p.category_id = c.id
    LEFT JOIN product_images pi ON p.id = pi.product_id AND pi.sort_order = 0
    LEFT JOIN product_images pi2 ON p.id = pi2.product_id
    WHERE p.name ILIKE '%' || $1 || '%'
    GROUP BY p.id, c.name, pi.image_url
      `;
      const result = await query(queryText, [name]);
      return result.rows;
    } catch (error) {
      throw new ProductServiceError(
        "Failed to fetch product from database",
        500,
        error
      );
    }
  }

  static async getProductBySlug(slug: string): Promise<Product[]> {
    try {
      const queryText = `
      SELECT 
      p.id as id,
      p.name as name,
      p.slug as slug,
      p.description as description,
      p.price as price,
      p.in_stock as "inStock",
      p.featured as featured,
      p.created_at as "createdAt",
      p.updated_at as "updatedAt",
      c.name as category,
      pi.image_url as img,
      COALESCE(
        ARRAY_AGG(pi2.image_url ORDER BY pi2.sort_order) FILTER (WHERE pi2.image_url IS NOT NULL),
        ARRAY[]::text[]
      ) as images
    FROM products p
    JOIN categories c ON p.category_id = c.id
    LEFT JOIN product_images pi ON p.id = pi.product_id AND pi.sort_order = 0
    LEFT JOIN product_images pi2 ON p.id = pi2.product_id
    WHERE p.slug = $1
    GROUP BY p.id, c.name, pi.image_url
      `;
      const result = await query(queryText, [slug]);
      return result.rows;
    } catch (error) {
      throw new ProductServiceError(
        "Failed to fetch product from database",
        500,
        error
      );
    }
  }
}
