import { NextRequest, NextResponse } from "next/server";
import { Slide, SliderApiResponse } from "@/types/interfaces";

/**
 * Mock database or data source
 * In a real application, this would come from:
 * - Database (PostgreSQL, MongoDB, etc.)
 * - CMS (Strapi, Sanity, Contentful)
 * - External API
 * - Static files
 */
const SLIDER_DATA: Slide[] = [
  {
    id: 1,
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off on selected fashion trends.",
    img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&w=600",
    url: "/collections/summer-sale",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
    isActive: true,
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-20T15:30:00Z",
  },
  {
    id: 2,
    title: "New Arrivals: Electronics",
    description: "Discover the latest gadgets and smart devices.",
    img: "https://images.pexels.com/photos/3861968/pexels-photo-3861968.jpeg?auto=compress&w=600",
    url: "/collections/electronics-new",
    bg: "bg-gradient-to-r from-blue-50 to-purple-50",
    isActive: true,
    createdAt: "2024-01-16T12:00:00Z",
    updatedAt: "2024-01-21T09:15:00Z",
  },
  {
    id: 3,
    title: "Exclusive Home Decor",
    description: "Beautify your home with our handcrafted decor pieces.",
    img: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&w=600",
    url: "/collections/home-decor",
    bg: "bg-gradient-to-r from-green-50 to-yellow-50",
    isActive: true,
    createdAt: "2024-01-17T14:30:00Z",
    updatedAt: "2024-01-22T11:45:00Z",
  },
];

/**
 * GET /api/sliders
 *
 * Fetches all active slider data for the homepage hero section
 *
 * Query Parameters:
 * - active: boolean (optional) - Filter by active status
 * - limit: number (optional) - Limit the number of results
 *
 * @param request - Next.js request object
 * @returns JSON response with slider data
 */
export async function GET(request: NextRequest) {
  try {
    // Extract query parameters for filtering (industry standard)
    const { searchParams } = new URL(request.url);
    const activeOnly = searchParams.get("active") === "true";
    const limit = searchParams.get("limit")
      ? parseInt(searchParams.get("limit")!)
      : undefined;

    // Simulate database query delay (remove in production)
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Filter data based on query parameters
    let filteredSlides = SLIDER_DATA;

    if (activeOnly) {
      filteredSlides = filteredSlides.filter((slide) => slide.isActive);
    }

    if (limit && limit > 0) {
      filteredSlides = filteredSlides.slice(0, limit);
    }

    // Sort by creation date (newest first) - industry practice
    filteredSlides.sort(
      (a, b) =>
        new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
    );

    // Return success response following REST API conventions
    const response: SliderApiResponse = {
      success: true,
      data: filteredSlides,
      message: "Sliders fetched successfully",
      totalCount: filteredSlides.length,
    };

    return NextResponse.json(response, {
      status: 200,
      headers: {
        // Add caching headers for better performance (industry standard)
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=60",
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    // Proper error handling and logging (industry standard)
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

/**
 * POST /api/sliders
 *
 * Creates a new slider (example for future expansion)
 * In a real app, this would include authentication/authorization
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Basic validation (use zod or joi in production)
    if (!body.title || !body.description || !body.img || !body.url) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation Error",
          message: "Missing required fields: title, description, img, url",
          statusCode: 400,
        },
        { status: 400 }
      );
    }

    // In a real app, you would:
    // 1. Validate user authentication
    // 2. Sanitize input data
    // 3. Save to database
    // 4. Return the created resource

    return NextResponse.json(
      {
        success: true,
        message: "Slider created successfully (mock)",
        data: { id: Date.now(), ...body },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating slider:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Internal Server Error",
        message: "Failed to create slider",
        statusCode: 500,
      },
      { status: 500 }
    );
  }
}
