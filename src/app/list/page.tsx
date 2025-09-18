"use client";
import Card from "@/components/Card";
import Filter from "@/components/Filter";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { Product } from "@/types/interfaces";
import {
  FeaturedProductService,
  ProductError,
} from "@/lib/services/productService";
import { useEffect, useState, useCallback } from "react";

/*const products = [
  {
    id: 1,
    name: "Classic White Sneakers",
    price: 2499,
    description: "Versatile and stylish sneakers perfect for everyday wear.",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "UltraSlim Laptop 14”",
    price: 59999,
    description: "Lightweight laptop with high performance for work and play.",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "SmartFit Pro Watch",
    price: 6999,
    description: "Feature-packed smartwatch with health and fitness tracking.",
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Noise-Cancelling Headphones",
    price: 2999,
    description:
      "Experience immersive sound quality and active noise cancellation.",
    img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "Eco-Friendly Water Bottle",
    price: 499,
    description: "Reusable and stylish bottle to keep you hydrated all day.",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
];*/

const CardSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    {Array.from({ length: 4 }).map((_, index) => (
      <Card
        key={index}
        title="Loading..."
        desc=""
        price={0}
        img=""
        id={0}
        category=""
        slug=""
      />
    ))}
  </div>
);

const productError = ({
  error,
  onRetry,
}: {
  error: String;
  onRetry: () => void;
}) => (
  <Card
    title="Error in Loading..."
    desc=""
    price={0}
    img=""
    id={0}
    category=""
    slug=""
  />
);

const ListPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();

  const category = searchParams.get("category") || undefined;
  const name = searchParams.get("name") || undefined;

  const fetchProducts = useCallback(
    async (category?: string, name?: string) => {
      try {
        setIsLoading(true);
        setError(null);

        const productData = await FeaturedProductService.getProducts({
          featured: false,
          ...(category && { category }),
          ...(name && { name }),
        });
        setProducts(productData);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        const errorMessage =
          err instanceof ProductError
            ? err.message
            : "Failed to load products. Please try again.";
        setError(errorMessage);
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  // Refetch whenever the search params change
  useEffect(() => {
    fetchProducts(category, name);
  }, [fetchProducts, category, name]);

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      {/* CAMPAIGN */}
      <div className="flex bg-purple-100 p-2 md:p-4 xl:p-6">
        <div className="w-2/3 flex flex-col gap-2 justify-between ">
          <p className="text-2xl md:text-4xl  font-semibold">
            Biggest off on biggest products
          </p>
          <Link href={""}>
            <button className="p-1 lg:p-2 md:rounded-md  text-white bg-red-500 rounded-sm">
              Buy Now
            </button>
          </Link>
        </div>
        <div className="relative w-1/3 flex justify-center items-center">
          <Image src="/woman.png" alt="" fill className="object-contain" />
        </div>
      </div>
      {/* FILTER */}
      <Filter />

      <div className="flex flex-col gap-4 mt-8">
        <div>
          <h2 className="text-xl font-semibold">All Products For You</h2>
        </div>
        {isLoading && (
          <div className="opacity-60">
            <p>Loading products...</p>
          </div>
        )}
        {error && !isLoading && (
          <div className="text-red-500 text-sm">{error}</div>
        )}
        {!isLoading && !error && (
          <>
            {name && (
              <p className="text-sm text-gray-500">
                Search results for: <span className="font-medium">{name}</span>
              </p>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <Card
                  key={product.id}
                  id={product.id}
                  title={product.name}
                  desc={product.description}
                  price={product.price}
                  img={product.img}
                  category={product.category}
                  slug={product.slug || ""}
                />
              ))}
              {products.length === 0 && (
                <div className="col-span-full text-sm text-gray-500">
                  No products found.
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ListPage;
