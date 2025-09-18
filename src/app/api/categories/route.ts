import { CategoriesApiResponse } from "@/types/interfaces";
import { CategoryDataHelpers } from "@/lib/data/categories";
import { NextRequest, NextResponse } from "next/server";
import { CategoryService } from "@/lib/services/categoryService";

export async function GET(request: NextRequest) {
  try {
    const categories = await CategoryService.getAllCategories();
    const response: CategoriesApiResponse = {
      success: true,
      data: categories,
      message: "Categories fetched successfully",
    };

    return NextResponse.json(response, {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=60",
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Couldn't fetch Categories",
        message: "Couldn't fetch Categories",
        statusCode: 500,
      },
      {
        status: 500,
      }
    );
  }
}
