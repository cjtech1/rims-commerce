import { NextRequest, NextResponse } from "next/server";
import { ProductDataHelpers } from "@/lib/data/products";

// Using centralized product data

export async function GET(request: NextRequest, props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  try {
    const { slug } = params;

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 200));

    // Find product by slug using centralized data helper
    const product = ProductDataHelpers.getProductBySlug(slug);

    if (!product) {
      return NextResponse.json(
        {
          success: false,
          error: "Product not found",
          message: `Product with slug "${slug}" not found`,
          statusCode: 404,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: product,
        message: "Product fetched successfully",
      },
      {
        status: 200,
        headers: {
          "Cache-Control": "public, s-maxage=300, stale-while-revalidate=60",
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error fetching product:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Internal Server Error",
        message: "Failed to fetch product data",
        statusCode: 500,
      },
      { status: 500 }
    );
  }
}
