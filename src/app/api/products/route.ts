import { ProductsApiResponse } from "@/types/interfaces";
import { NextRequest, NextResponse } from "next/server";
import { ProductService } from "@/lib/services/productService";

// Using centralized product data - no need for local array

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get("limit")
      ? parseInt(searchParams.get("limit")!)
      : undefined;
    const category = searchParams.get("category")
      ? searchParams.get("category")
      : undefined;
    const name = searchParams.get("name")
      ? searchParams.get("name")
      : undefined;

    let products = await ProductService.getFeaturedProducts();

    if (category) {
      products = await ProductService.getProductByCategory(category);
    }

    if (name) {
      products = await ProductService.getProductByName(name);
    }

    // Sort by creation date (newest first)
    // products = products.sort(
    //   (a, b) =>
    //     new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
    // );

    // if (limit && limit > 0) {
    //   products = products.slice(0, limit);
    // }

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
