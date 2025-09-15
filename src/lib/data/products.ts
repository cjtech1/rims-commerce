import { Product } from "@/types/interfaces";

/**
 * Centralized Product Data
 * This is the single source of truth for all product information
 * Used by all APIs and components to ensure consistency
 */
export const PRODUCTS_DATA: Product[] = [
  {
    id: 1,
    name: "Classic White Sneakers",
    slug: "classic-white-sneakers",
    price: 2499,
    description:
      "Versatile and stylish sneakers perfect for everyday wear. Made with premium materials and designed for comfort and durability. Features breathable mesh lining, cushioned insole, and non-slip rubber outsole.",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1571107424251-4dc7d81b1c4e?auto=format&fit=crop&w=600&q=80",
    ],
    category: "Footwear",
    inStock: true,
    featured: true,
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-20T15:30:00Z",
  },
  {
    id: 2,
    name: "Wireless Bluetooth Headphones",
    slug: "wireless-bluetooth-headphones",
    price: 3999,
    description:
      "High-quality wireless headphones with noise cancellation and 30-hour battery life. Premium sound quality with deep bass and crystal-clear highs. Comfortable over-ear design with soft cushioning.",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80",
    ],
    category: "Electronics",
    inStock: true,
    featured: true,
    createdAt: "2024-01-16T09:30:00Z",
    updatedAt: "2024-01-21T14:20:00Z",
  },
  {
    id: 3,
    name: "Cotton Casual T-Shirt",
    slug: "cotton-casual-t-shirt",
    price: 899,
    description:
      "Comfortable 100% cotton t-shirt available in multiple colors. Pre-shrunk fabric ensures perfect fit after washing. Soft texture and breathable material for all-day comfort.",
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1571945153237-4929e783af4a?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=600&q=80",
    ],
    category: "Clothing",
    inStock: true,
    featured: false,
    createdAt: "2024-01-17T11:15:00Z",
    updatedAt: "2024-01-22T16:45:00Z",
  },
  {
    id: 4,
    name: "Premium Coffee Beans",
    slug: "premium-coffee-beans",
    price: 1299,
    description:
      "Freshly roasted premium coffee beans with rich aroma and bold flavor. Sourced from high-altitude farms and expertly roasted to perfection. Perfect for espresso, drip coffee, or French press.",
    img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=600&q=80",
    ],
    category: "Food & Beverages",
    inStock: true,
    featured: true,
    createdAt: "2024-01-18T13:20:00Z",
    updatedAt: "2024-01-23T10:10:00Z",
  },
  {
    id: 5,
    name: "Leather Wallet",
    slug: "leather-wallet",
    price: 1799,
    description:
      "Genuine leather wallet with multiple card slots and bill compartment. Handcrafted with attention to detail and built to last. Compact design that fits comfortably in your pocket.",
    img: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1586763619108-967d07353d97?auto=format&fit=crop&w=600&q=80",
    ],
    category: "Accessories",
    inStock: false,
    featured: true,
    createdAt: "2024-01-19T15:45:00Z",
    updatedAt: "2024-01-24T12:30:00Z",
  },
  {
    id: 6,
    name: "Smartphone Case",
    slug: "smartphone-case",
    price: 699,
    description:
      "Durable protective case with shock absorption and wireless charging support. Military-grade drop protection with raised edges for screen and camera protection.",
    img: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1565849904461-04cb6ba246d3?auto=format&fit=crop&w=600&q=80",
    ],
    category: "Electronics",
    inStock: true,
    featured: true,
    createdAt: "2024-01-20T08:30:00Z",
    updatedAt: "2024-01-25T17:15:00Z",
  },
  {
    id: 7,
    name: "Running Shorts",
    slug: "running-shorts",
    price: 1199,
    description:
      "Lightweight and breathable running shorts with moisture-wicking fabric. Built-in compression shorts and multiple pockets for secure storage during workouts.",
    img: "https://images.unsplash.com/photo-1506629905607-e9e96b4b4355?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1506629905607-e9e96b4b4355?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1571945153237-4929e783af4a?auto=format&fit=crop&w=600&q=80",
    ],
    category: "Sportswear",
    inStock: true,
    featured: false,
    createdAt: "2024-01-21T10:00:00Z",
    updatedAt: "2024-01-26T14:40:00Z",
  },
  {
    id: 8,
    name: "Stainless Steel Water Bottle",
    slug: "stainless-steel-water-bottle",
    price: 1599,
    description:
      "Insulated water bottle that keeps drinks cold for 24 hours or hot for 12 hours. Leak-proof design with wide mouth opening for easy filling and cleaning.",
    img: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?auto=format&fit=crop&w=600&q=80",
    ],
    category: "Home & Kitchen",
    inStock: true,
    featured: true,
    createdAt: "2024-01-22T16:20:00Z",
    updatedAt: "2024-01-27T11:25:00Z",
  },
  {
    id: 9,
    name: "Gaming Mouse",
    slug: "gaming-mouse",
    price: 2899,
    description:
      "High-precision gaming mouse with customizable RGB lighting and 16000 DPI sensor. Programmable buttons and ergonomic design for extended gaming sessions.",
    img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1563297007-0686b8f8c2c0?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1540829917886-91ab031b1764?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1545127398-14699f92334b?auto=format&fit=crop&w=600&q=80",
    ],
    category: "Electronics",
    inStock: true,
    featured: true,
    createdAt: "2024-01-23T12:10:00Z",
    updatedAt: "2024-01-28T09:50:00Z",
  },
  {
    id: 10,
    name: "Yoga Mat",
    slug: "yoga-mat",
    price: 1999,
    description:
      "Non-slip yoga mat with excellent cushioning and eco-friendly materials. 6mm thick for optimal comfort and joint protection during yoga practice.",
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1591343395902-d08b83c6b4c5?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=600&q=80",
    ],
    category: "Fitness",
    inStock: true,
    featured: true,
    createdAt: "2024-01-24T14:30:00Z",
    updatedAt: "2024-01-29T16:20:00Z",
  },
  {
    id: 11,
    name: "Denim Jacket",
    slug: "denim-jacket",
    price: 3299,
    description:
      "Classic denim jacket with modern fit and vintage wash. Perfect layering piece for any season. Made from premium denim with classic button closure.",
    img: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=600&q=80",
    ],
    category: "Clothing",
    inStock: true,
    featured: true,
    createdAt: "2024-01-25T11:45:00Z",
    updatedAt: "2024-01-30T13:35:00Z",
  },
  {
    id: 12,
    name: "Mechanical Keyboard",
    slug: "mechanical-keyboard",
    price: 4999,
    description:
      "RGB mechanical keyboard with tactile switches and customizable lighting. Perfect for gaming and professional work with durable construction.",
    img: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=600&q=80",
    ],
    category: "Electronics",
    inStock: true,
    featured: false,
    createdAt: "2024-01-26T09:20:00Z",
    updatedAt: "2024-01-31T15:10:00Z",
  },
];

/**
 * Helper functions for product data manipulation
 */
export const ProductDataHelpers = {
  // Get all products
  getAllProducts: (): Product[] => PRODUCTS_DATA,

  // Get product by ID
  getProductById: (id: number): Product | undefined =>
    PRODUCTS_DATA.find((product) => product.id === id),

  // Get product by slug
  getProductBySlug: (slug: string): Product | undefined =>
    PRODUCTS_DATA.find((product) => product.slug === slug),

  // Get products by category
  getProductsByCategory: (category: string): Product[] =>
    PRODUCTS_DATA.filter(
      (product) => product.category.toLowerCase() === category.toLowerCase()
    ),

  // Get featured products
  getFeaturedProducts: (): Product[] =>
    PRODUCTS_DATA.filter((product) => product.featured),

  // Get in-stock products
  getInStockProducts: (): Product[] =>
    PRODUCTS_DATA.filter((product) => product.inStock),

  // Get products with limit
  getProductsWithLimit: (limit: number): Product[] =>
    PRODUCTS_DATA.slice(0, limit),

  // Get products sorted by date (newest first)
  getProductsSortedByDate: (): Product[] =>
    [...PRODUCTS_DATA].sort(
      (a, b) =>
        new Date(b.createdAt!).getTime() - new Date(a.createdAt!).getTime()
    ),

  // Get unique categories
  getUniqueCategories: (): string[] => {
    const categoriesSet = new Set(
      PRODUCTS_DATA.map((product) => product.category)
    );
    return Array.from(categoriesSet);
  },
};
