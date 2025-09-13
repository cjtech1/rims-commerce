import { Product, ProductsApiResponse } from "@/types/interfaces";
import { fetchExternalImage } from "next/dist/server/image-optimizer";
import { NextRequest, NextResponse } from "next/server";
import { resolve } from "path";

const Product_Data: Product[] = [
  {
    id: 1,
    name: "Classic White Sneakers",
    price: 2499,
    description: "Versatile and stylish sneakers perfect for everyday wear.",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    category: "Electronics",
    inStock: true,
    featured: true,
  },
  {
    id: 2,
    name: "UltraSlim Laptop 14”",
    price: 59999,
    description: "Lightweight laptop with high performance for work and play.",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
    category: "Electronics",
    inStock: true,
    featured: true,
  },
  {
    id: 3,
    name: "SmartFit Pro Watch",
    price: 6999,
    description: "Feature-packed smartwatch with health and fitness tracking.",
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
    category: "Electronics",
    inStock: true,
    featured: true,
  },
  {
    id: 4,
    name: "Noise-Cancelling Headphones",
    price: 2999,
    description:
      "Experience immersive sound quality and active noise cancellation.",
    img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80",
    category: "Electronics",
    inStock: true,
    featured: true,
  },
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const featuredOnly = searchParams.get("featured") === "true";
    const limit = searchParams.get("limit")
      ? parseInt(searchParams.get("limit")!)
      : undefined;
    await new Promise((resolve) => setTimeout(resolve, 100));

    let allProducts: Product[] = Product_Data;
    let featuredProducts: Product[] = [];

    if (featuredOnly)
      featuredProducts = allProducts.filter((product) => product.featured);
    else featuredProducts = allProducts;

    if (limit && limit > 0) featuredProducts = featuredProducts.slice(0, limit);

    featuredProducts.sort(
      (a, b) =>
        new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
    );

    const response: ProductsApiResponse = {
      success: true,
      data: featuredProducts,
      message: "Featured products fetched successfully",
      totalCount: featuredProducts.length,
    };

    return NextResponse.json(response, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=60",
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching sliders:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Internal Server Error",
        message: "Failed to fetch slider data",
        statusCode: 500,
      },
      { status: 500 }
    );
  }
}

//add post as same slider route
