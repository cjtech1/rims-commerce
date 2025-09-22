"use client";

import Card from "@/components/Card";
import Filter from "@/components/Filter";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/interfaces";
import {
  FeaturedProductService,
  ProductError,
} from "@/lib/services/productApiService";
import { useEffect, useState, useCallback } from "react";
import { useAuth } from "@/hooks/useAuth";

interface User {
  id: number;
  email: string;
  role: string;
}

interface ListContentProps {
  user: User;
  category?: string;
  name?: string;
}

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

const ListContent: React.FC<ListContentProps> = ({ user, category, name }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { isAuthenticated, logout } = useAuth();

  const fetchProducts = useCallback(
    async (category?: string, name?: string) => {
      try {
        setIsLoading(true);
        setError(null);

        const productData = await FeaturedProductService.getProducts({
          ...(category && { category }),
          ...(name && { name }),
        });
        setProducts(productData);
      } catch (err) {
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

  // Fetch products when component mounts or params change
  useEffect(() => {
    fetchProducts(category, name);
  }, [fetchProducts, category, name]);

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      {/* WELCOME MESSAGE */}
      <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold text-gray-900">
              Welcome back, {user.email}!
            </h1>
            <p className="text-sm text-gray-600">
              Discover our exclusive collection of products
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-xs text-gray-500 bg-white px-2 py-1 rounded">
              {user.role}
            </div>
            <button
              onClick={logout}
              className="text-xs text-red-600 hover:text-red-800 bg-red-50 hover:bg-red-100 px-2 py-1 rounded transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* CAMPAIGN */}
      <div className="flex bg-purple-100 p-2 md:p-4 xl:p-6 rounded-lg mb-6">
        <div className="w-2/3 flex flex-col gap-2 justify-between">
          <p className="text-2xl md:text-4xl font-semibold">
            Biggest off on biggest products
          </p>
          <Link href={""}>
            <button className="p-1 lg:p-2 md:rounded-md text-white bg-red-500 rounded-sm hover:bg-red-600 transition-colors">
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
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">All Products For You</h2>
          {(category || name) && (
            <Link
              href="/list"
              className="text-sm text-blue-600 hover:text-blue-800 underline"
            >
              Clear filters
            </Link>
          )}
        </div>

        {/* SEARCH/FILTER INFO */}
        {(category || name) && (
          <div className="flex flex-wrap gap-2 text-sm text-gray-600">
            {category && (
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                Category: {category}
              </span>
            )}
            {name && (
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                Search: {name}
              </span>
            )}
          </div>
        )}

        {/* LOADING STATE */}
        {isLoading && (
          <div className="flex items-center justify-center py-12">
            <div className="flex items-center space-x-2 text-gray-500">
              <svg
                className="animate-spin h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <span>Loading products...</span>
            </div>
          </div>
        )}

        {/* ERROR STATE */}
        {error && !isLoading && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-center">
              <svg
                className="h-5 w-5 text-red-400 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
              <div>
                <h3 className="text-red-800 font-medium">
                  Error loading products
                </h3>
                <p className="text-red-700 text-sm">{error}</p>
                <button
                  onClick={() => fetchProducts(category, name)}
                  className="mt-2 text-sm text-red-600 hover:text-red-800 underline"
                >
                  Try again
                </button>
              </div>
            </div>
          </div>
        )}

        {/* PRODUCTS GRID */}
        {!isLoading && !error && (
          <>
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
            </div>

            {/* NO PRODUCTS FOUND */}
            {products.length === 0 && (
              <div className="text-center py-12">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-3-8a9 9 0 110 18 9 9 0 010-18z"
                  />
                </svg>
                <h3 className="mt-4 text-sm font-medium text-gray-900">
                  No products found
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {category || name
                    ? "Try adjusting your search or filter criteria."
                    : "No products are available at the moment."}
                </p>
                {(category || name) && (
                  <Link
                    href="/list"
                    className="mt-3 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    View all products
                  </Link>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ListContent;
