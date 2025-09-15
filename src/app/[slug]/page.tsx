import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";
import { Product, ProductApiResponse } from "@/types/interfaces";
import { notFound } from "next/navigation";

// Fetch product data from API
async function getProduct(slug: string): Promise<Product | null> {
  try {
    const res = await fetch(
      `${
        process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
      }/api/products/${slug}`,
      {
        cache: "force-cache",
      }
    );

    if (!res.ok) {
      if (res.status === 404) {
        return null;
      }
      throw new Error("Failed to fetch product");
    }

    const data: ProductApiResponse = await res.json();
    return data.success ? data.data : null;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

const SinglePage = async ({ params }: { params: { slug: string } }) => {
  const product = await getProduct(params.slug);

  if (!product) {
    notFound();
  }

  // Calculate discounted price (showing original price as crossed out and current as discounted)
  const originalPrice = Math.round(product.price * 1.25); // 25% markup for "original" price
  const currentPrice = product.price;

  return (
    <div>
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
        {/* Image */}
        <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
          <ProductImages images={product.images || [product.img]} />
        </div>
        {/* Text */}
        <div className="w-full lg:w-1/2 flex-col gap-6">
          <h1 className="text-4xl font-medium mb-3">{product.name}</h1>
          <p className="text-gray-500 mb-6">{product.description}</p>
          <div className="flex flex-col gap-2">
            <div className="h-[2px] bg-gray-100" />
            <div className="flex gap-4 items-center">
              <h3 className="text-xl text-gray-500 line-through">
                ₹{originalPrice}
              </h3>
              <h2 className="text-2xl text-black font-semibold">
                ₹{currentPrice}
              </h2>
              {product.inStock ? (
                <span className="text-green-600 text-sm font-medium">
                  In Stock
                </span>
              ) : (
                <span className="text-red-600 text-sm font-medium">
                  Out of Stock
                </span>
              )}
            </div>
            <div className="h-[2px] bg-gray-100" />
          </div>
          <div className="mt-2 p-2">
            <CustomizeProducts />
            <div className="h-[2px] bg-gray-100" />
          </div>
          <div className="text-sm mt-1 mb-2">
            <h4 className="text-lg font-medium mb-1">Category</h4>
            <p className="text-gray-600">{product.category}</p>
          </div>
          <div className="text-sm mt-1 mb-2">
            <h4 className="text-lg font-medium mb-1">Product Details</h4>
            <p className="text-gray-600">
              This high-quality {product.name.toLowerCase()} is carefully
              selected to meet our strict quality standards. Perfect for those
              who appreciate premium products with excellent craftsmanship and
              attention to detail.
            </p>
          </div>
          <div className="text-sm mt-1 mb-2">
            <h4 className="text-lg font-medium mb-1">Features</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Premium quality materials</li>
              <li>Durable construction</li>
              <li>Modern design</li>
              <li>Excellent value for money</li>
              {product.category === "Electronics" && (
                <li>Latest technology integration</li>
              )}
              {product.category === "Clothing" && <li>Comfortable fit</li>}
              {product.category === "Footwear" && (
                <li>Enhanced comfort and support</li>
              )}
            </ul>
          </div>
          <div className="text-sm mt-1 mb-2">
            <h4 className="text-lg font-medium mb-1">Shipping & Returns</h4>
            <p className="text-gray-600">
              Free shipping on orders over ₹999. Easy returns within 30 days. We
              ensure secure packaging and prompt delivery to your doorstep.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
