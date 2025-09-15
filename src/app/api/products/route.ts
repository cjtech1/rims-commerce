import { ProductsApiResponse } from "@/types/interfaces";
import { PRODUCTS_DATA, ProductDataHelpers } from "@/lib/data/products";
import { NextRequest, NextResponse } from "next/server";
import { setRequestMeta } from "next/dist/server/request-meta";

// Using centralized product data - no need for local array

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const featuredOnly = searchParams.get("featured") === "true";
    const limit = searchParams.get("limit")
      ? parseInt(searchParams.get("limit")!)
      : undefined;
    const category = searchParams.get("category")
      ? searchParams.get("category")?.toString()
      : undefined;
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Use centralized product data and helper functions
    let products = featuredOnly
      ? ProductDataHelpers.getFeaturedProducts()
      : ProductDataHelpers.getAllProducts();

    if (category) {
      products = products.filter((product) => product.category === category);
    }
    if (featuredOnly) {
      products = products.filter((product) => product.featured);
    }
    // Sort by creation date (newest first)
    products = products.sort(
      (a, b) =>
        new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
    );

    if (limit && limit > 0) {
      products = products.slice(0, limit);
    }

    const response: ProductsApiResponse = {
      success: true,
      data: products,
      message: "Products fetched successfully",
      totalCount: products.length,
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
