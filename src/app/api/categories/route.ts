import { CategoriesApiResponse } from "@/types/interfaces";
import { NextRequest, NextResponse } from "next/server";
import { resolve } from "path";

const CATEGORIES_DATA = [
  {
    id: 1,
    title: "Fashion & Apparel",
    img: "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=600&q=80",
    category: "Fashion & Apparel",
  },
  {
    id: 2,
    title: "Fashion & Apparel",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    category: "Fashion & Apparel",
  },
  {
    id: 3,
    title: "Home & Decor",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    category: "Home & Decor",
  },
  {
    id: 4,
    title: "Health & Beauty",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    category: "Health & Beauty",
  },
  {
    id: 5,
    title: "Sports & Outdoors",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80",
    category: "Sports & Outdoors",
  },
  {
    id: 6,
    title: "Books & Media",
    img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=600&q=80",
    category: "Books & Media",
  },
];

export async function GET(request: NextRequest) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 300));
    const response: CategoriesApiResponse = {
      success: true,
      data: CATEGORIES_DATA,
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
    console.log("Error in fetching Categories", error);
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
