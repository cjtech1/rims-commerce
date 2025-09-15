import { NextRequest, NextResponse } from "next/server";
import { SliderApiResponse } from "@/types/interfaces";
import { SliderDataHelpers } from "@/lib/data/sliders";

/**
 * Using centralized slider data
 * Single source of truth for all slider information
 */

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

    // Use centralized data and helper functions
    let filteredSlides = activeOnly
      ? SliderDataHelpers.getActiveSliders()
      : SliderDataHelpers.getAllSliders();

    // Sort by creation date (newest first)
    filteredSlides = SliderDataHelpers.getSlidersSortedByDate().filter(
      (slide) => (activeOnly ? slide.isActive : true)
    );

    if (limit && limit > 0) {
      filteredSlides = filteredSlides.slice(0, limit);
    }

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
