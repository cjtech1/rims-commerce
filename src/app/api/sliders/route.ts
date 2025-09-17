import { NextRequest, NextResponse } from "next/server";
import { SliderApiResponse } from "@/types/interfaces";
import { SliderService } from "@/lib/services/sliderService";

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

    // Fetch sliders from database using the service
    const sliders = await SliderService.getAllSliders(activeOnly, limit);

    // Return success response following REST API conventions
    const response: SliderApiResponse = {
      success: true,
      data: sliders,
      message: "Sliders fetched successfully",
      totalCount: sliders.length,
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

    // Create slider in database
    const newSlider = await SliderService.createSlider({
      title: body.title,
      description: body.description,
      img: body.img,
      url: body.url,
      bg: body.bg || "bg-gradient-to-r from-gray-50 to-gray-100",
      isActive: body.isActive !== undefined ? body.isActive : true,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Slider created successfully",
        data: newSlider,
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
