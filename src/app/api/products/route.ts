import { ProductsApiResponse } from "@/types/interfaces";
import { PRODUCTS_DATA, ProductDataHelpers } from "@/lib/data/products";
import { NextRequest, NextResponse } from "next/server";

// Using centralized product data - no need for local array

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const featuredOnly = searchParams.get("featured") === "true";
    const limit = searchParams.get("limit")
      ? parseInt(searchParams.get("limit")!)
      : undefined;
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Use centralized product data and helper functions
    let products = featuredOnly
      ? ProductDataHelpers.getFeaturedProducts()
      : ProductDataHelpers.getAllProducts();

    // Apply limit if specified
    if (limit && limit > 0) {
      products = ProductDataHelpers.getProductsWithLimit(limit);
      if (featuredOnly) {
        products = products.filter((product) => product.featured);
      }
    }

    // Sort by creation date (newest first)
    products = ProductDataHelpers.getProductsSortedByDate().filter((product) =>
      featuredOnly ? product.featured : true
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
