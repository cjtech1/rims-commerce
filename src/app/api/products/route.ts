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
    category: "Footwear",
    inStock: true,
    featured: true,
  },
  {
    id: 2,
    name: "Wireless Bluetooth Headphones",
    price: 3999,
    description:
      "High-quality wireless headphones with noise cancellation and 30-hour battery life.",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    category: "Electronics",
    inStock: true,
    featured: true,
  },
  {
    id: 3,
    name: "Cotton Casual T-Shirt",
    price: 899,
    description:
      "Comfortable 100% cotton t-shirt available in multiple colors.",
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
    category: "Clothing",
    inStock: true,
    featured: false,
  },
  {
    id: 4,
    name: "Premium Coffee Beans",
    price: 1299,
    description:
      "Freshly roasted premium coffee beans with rich aroma and bold flavor.",
    img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=600&q=80",
    category: "Food & Beverages",
    inStock: true,
    featured: true,
  },
  {
    id: 5,
    name: "Leather Wallet",
    price: 1799,
    description:
      "Genuine leather wallet with multiple card slots and bill compartment.",
    img: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80",
    category: "Accessories",
    inStock: false,
    featured: true,
  },
  {
    id: 6,
    name: "Smartphone Case",
    price: 699,
    description:
      "Durable protective case with shock absorption and wireless charging support.",
    img: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=600&q=80",
    category: "Electronics",
    inStock: true,
    featured: true,
  },
  {
    id: 7,
    name: "Running Shorts",
    price: 1199,
    description:
      "Lightweight and breathable running shorts with moisture-wicking fabric.",
    img: "https://images.unsplash.com/photo-1506629905607-e9e96b4b4355?auto=format&fit=crop&w=600&q=80",
    category: "Sportswear",
    inStock: true,
    featured: false,
  },
  {
    id: 8,
    name: "Stainless Steel Water Bottle",
    price: 1599,
    description:
      "Insulated water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
    img: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80",
    category: "Home & Kitchen",
    inStock: true,
    featured: true,
  },
  {
    id: 9,
    name: "Gaming Mouse",
    price: 2899,
    description:
      "High-precision gaming mouse with customizable RGB lighting and 16000 DPI sensor.",
    img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=600&q=80",
    category: "Electronics",
    inStock: true,
    featured: true,
  },
  {
    id: 10,
    name: "Yoga Mat",
    price: 1999,
    description:
      "Non-slip yoga mat with excellent cushioning and eco-friendly materials.",
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80",
    category: "Fitness",
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
