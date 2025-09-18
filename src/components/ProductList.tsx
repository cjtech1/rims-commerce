"use client";
import Card from "./Card";
import { Product } from "@/types/interfaces";
import {
  FeaturedProductService,
  ProductError,
} from "@/lib/services/productApiService";
import { error } from "console";
import { useCallback, useEffect, useState } from "react";

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

const ProductList = () => {
  const [product, setProduct] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Fetch only active slides with a reasonable limit
      const ProductData = await FeaturedProductService.getProducts({
        limit: 8,
      });

      setProduct(ProductData);
    } catch (err) {
      console.error("Failed to fetch slides:", err);

      // Provide user-friendly error messages
      const errorMessage =
        err instanceof ProductError
          ? err.message
          : "Failed to load slider content. Please try again.";

      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {product &&
        product.map((product, index) => (
          <Card
            key={index}
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
  );
};

export default ProductList;
