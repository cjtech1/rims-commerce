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
  {
    id: 13,
    name: "Vitamin C Serum",
    slug: "vitamin-c-serum",
    price: 1899,
    description:
      "Brightening vitamin C serum with 20% L-Ascorbic acid. Reduces dark spots, improves skin texture, and provides antioxidant protection. Suitable for all skin types.",
    img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80",
    ],
    category: "Health & Beauty",
    inStock: true,
    featured: true,
    createdAt: "2024-01-27T10:15:00Z",
    updatedAt: "2024-02-01T12:45:00Z",
  },
  {
    id: 14,
    name: "Electric Toothbrush",
    slug: "electric-toothbrush",
    price: 3499,
    description:
      "Rechargeable electric toothbrush with sonic technology and multiple brushing modes. Includes travel case and 2 brush heads. 2-week battery life.",
    img: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1598662779058-21ee9d849c55?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1585867646754-1ccb2ce9d7a1?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=600&q=80",
    ],
    category: "Health & Beauty",
    inStock: true,
    featured: false,
    createdAt: "2024-01-28T14:30:00Z",
    updatedAt: "2024-02-02T09:20:00Z",
  },
  {
    id: 15,
    name: "Face Moisturizer SPF 30",
    slug: "face-moisturizer-spf-30",
    price: 1599,
    description:
      "Daily face moisturizer with broad-spectrum SPF 30 protection. Lightweight, non-greasy formula that hydrates skin while protecting from UV damage.",
    img: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1595348020491-571b84c9f5be?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=600&q=80",
    ],
    category: "Health & Beauty",
    inStock: true,
    featured: true,
    createdAt: "2024-01-29T11:45:00Z",
    updatedAt: "2024-02-03T16:30:00Z",
  },
  {
    id: 16,
    name: "Hair Styling Cream",
    slug: "hair-styling-cream",
    price: 1299,
    description:
      "Premium hair styling cream for all hair types. Provides medium hold with natural finish. Enriched with argan oil for added shine and nourishment.",
    img: "https://images.unsplash.com/photo-1584360853618-2a9cbe1e2e72?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1584360853618-2a9cbe1e2e72?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1616789076667-62d1f89fa1c3?auto=format&fit=crop&w=600&q=80",
    ],
    category: "Health & Beauty",
    inStock: true,
    featured: false,
    createdAt: "2024-01-30T13:20:00Z",
    updatedAt: "2024-02-04T14:15:00Z",
  },
  {
    id: 17,
    name: "Slim Fit Jeans",
    slug: "slim-fit-jeans",
    price: 2499,
    description:
      "Modern slim fit jeans with stretch denim for comfort and mobility. Classic 5-pocket design with premium hardware. Available in multiple washes.",
    img: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?auto=format&fit=crop&w=600&q=80",
    ],
    category: "Clothing",
    inStock: true,
    featured: true,
    createdAt: "2024-01-31T10:00:00Z",
    updatedAt: "2024-02-05T15:30:00Z",
  },
  {
    id: 18,
    name: "Woolen Sweater",
    slug: "woolen-sweater",
    price: 3799,
    description:
      "Cozy woolen sweater with cable knit design. Made from premium merino wool for warmth and softness. Perfect for cold weather styling.",
    img: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1571945153237-4929e783af4a?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    ],
    category: "Clothing",
    inStock: true,
    featured: false,
    createdAt: "2024-02-01T11:30:00Z",
    updatedAt: "2024-02-06T12:20:00Z",
  },
  {
    id: 19,
    name: "Summer Dress",
    slug: "summer-dress",
    price: 2199,
    description:
      "Lightweight floral summer dress with flowing silhouette. Made from breathable cotton blend fabric. Perfect for casual outings and warm weather.",
    img: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=600&q=80",
    ],
    category: "Clothing",
    inStock: true,
    featured: true,
    createdAt: "2024-02-02T14:15:00Z",
    updatedAt: "2024-02-07T10:45:00Z",
  },
  {
    id: 20,
    name: "Non-Stick Cookware Set",
    slug: "non-stick-cookware-set",
    price: 8999,
    description:
      "Professional 12-piece non-stick cookware set with ceramic coating. Includes pots, pans, and utensils. Dishwasher safe and suitable for all stovetops.",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1574781330855-d0db09c7b224?auto=format&fit=crop&w=600&q=80",
    ],
    category: "Home & Kitchen",
    inStock: true,
    featured: true,
    createdAt: "2024-02-03T09:30:00Z",
    updatedAt: "2024-02-08T14:20:00Z",
  },
  {
    id: 21,
    name: "Coffee Maker",
    slug: "coffee-maker",
    price: 5499,
    description:
      "Programmable drip coffee maker with 12-cup capacity. Features auto-shutoff, pause and serve, and permanent filter. Perfect for daily coffee brewing.",
    img: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80",
    ],
    category: "Home & Kitchen",
    inStock: true,
    featured: false,
    createdAt: "2024-02-04T12:45:00Z",
    updatedAt: "2024-02-09T16:30:00Z",
  },
  {
    id: 22,
    name: "Kitchen Knife Set",
    slug: "kitchen-knife-set",
    price: 3999,
    description:
      "Professional 8-piece kitchen knife set with wooden block. High-carbon stainless steel blades with ergonomic handles. Includes chef's knife, paring knife, and utility knives.",
    img: "https://images.unsplash.com/photo-1594736797933-d0ef26d0d222?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1594736797933-d0ef26d0d222?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=600&q=80",
    ],
    category: "Home & Kitchen",
    inStock: true,
    featured: true,
    createdAt: "2024-02-05T15:20:00Z",
    updatedAt: "2024-02-10T11:15:00Z",
  },
  {
    id: 23,
    name: "Leather Dress Shoes",
    slug: "leather-dress-shoes",
    price: 4999,
    description:
      "Classic oxford leather dress shoes with goodyear welt construction. Perfect for formal occasions and business attire. Made from premium full-grain leather.",
    img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1580902394724-9b5194692b4e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1574445635293-e9b4e16a5eb7?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80",
    ],
    category: "Footwear",
    inStock: true,
    featured: true,
    createdAt: "2024-02-06T10:30:00Z",
    updatedAt: "2024-02-11T13:45:00Z",
  },
  {
    id: 24,
    name: "Running Shoes",
    slug: "running-shoes",
    price: 5999,
    description:
      "High-performance running shoes with responsive cushioning and breathable mesh upper. Designed for long-distance running with excellent support and durability.",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=600&q=80",
    ],
    category: "Footwear",
    inStock: true,
    featured: false,
    createdAt: "2024-02-07T14:20:00Z",
    updatedAt: "2024-02-12T09:30:00Z",
  },
  {
    id: 25,
    name: "Canvas High-Top Sneakers",
    slug: "canvas-high-top-sneakers",
    price: 1899,
    description:
      "Classic canvas high-top sneakers with vintage styling. Comfortable rubber sole and durable canvas upper. Available in multiple colors for casual wear.",
    img: "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1571107424251-4dc7d81b1c4e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80",
    ],
    category: "Footwear",
    inStock: true,
    featured: true,
    createdAt: "2024-02-08T11:45:00Z",
    updatedAt: "2024-02-13T15:20:00Z",
  },
  {
    id: 26,
    name: "Stainless Steel Watch",
    slug: "stainless-steel-watch",
    price: 7999,
    description:
      "Premium stainless steel watch with automatic movement and sapphire crystal glass. Water-resistant to 100m with luminous hands and markers.",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1539874754764-5a96559165b0?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1586763619108-967d07353d97?auto=format&fit=crop&w=600&q=80",
    ],
    category: "Accessories",
    inStock: true,
    featured: true,
    createdAt: "2024-02-09T09:15:00Z",
    updatedAt: "2024-02-14T12:40:00Z",
  },
  {
    id: 27,
    name: "Leather Belt",
    slug: "leather-belt",
    price: 1999,
    description:
      "Classic genuine leather belt with silver buckle. Hand-stitched edges and premium craftsmanship. Available in black and brown colors.",
    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1586763619108-967d07353d97?auto=format&fit=crop&w=600&q=80",
    ],
    category: "Accessories",
    inStock: true,
    featured: false,
    createdAt: "2024-02-10T13:30:00Z",
    updatedAt: "2024-02-15T16:25:00Z",
  },
  {
    id: 28,
    name: "Sunglasses",
    slug: "sunglasses",
    price: 2999,
    description:
      "Stylish aviator sunglasses with UV400 protection and polarized lenses. Lightweight metal frame with adjustable nose pads for comfortable wear.",
    img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=600&q=80",
    ],
    category: "Accessories",
    inStock: true,
    featured: true,
    createdAt: "2024-02-11T16:45:00Z",
    updatedAt: "2024-02-16T10:30:00Z",
  },
  {
    id: 29,
    name: "Athletic Tank Top",
    slug: "athletic-tank-top",
    price: 1399,
    description:
      "Moisture-wicking athletic tank top with mesh panels for ventilation. Perfect for workouts and training. Made from quick-dry performance fabric.",
    img: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1506629905607-e9e96b4b4355?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80",
    ],
    category: "Sportswear",
    inStock: true,
    featured: false,
    createdAt: "2024-02-12T08:20:00Z",
    updatedAt: "2024-02-17T11:50:00Z",
  },
  {
    id: 30,
    name: "Compression Leggings",
    slug: "compression-leggings",
    price: 2199,
    description:
      "High-waisted compression leggings with side pockets. Four-way stretch fabric provides support and comfort during intense workouts.",
    img: "https://images.unsplash.com/photo-1506629905607-e9e96b4b4355?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1506629905607-e9e96b4b4355?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1571945153237-4929e783af4a?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80",
    ],
    category: "Sportswear",
    inStock: true,
    featured: true,
    createdAt: "2024-02-13T12:35:00Z",
    updatedAt: "2024-02-18T14:15:00Z",
  },
  {
    id: 31,
    name: "Sports Hoodie",
    slug: "sports-hoodie",
    price: 2799,
    description:
      "Comfortable sports hoodie with kangaroo pocket and adjustable drawstring hood. Made from soft cotton-poly blend for warmth and durability.",
    img: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1571945153237-4929e783af4a?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    ],
    category: "Sportswear",
    inStock: true,
    featured: true,
    createdAt: "2024-02-14T15:10:00Z",
    updatedAt: "2024-02-19T09:25:00Z",
  },
  {
    id: 32,
    name: "Organic Green Tea",
    slug: "organic-green-tea",
    price: 899,
    description:
      "Premium organic green tea with antioxidants and natural flavor. Hand-picked leaves from high-altitude gardens. Perfect for daily wellness routine.",
    img: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80",
    ],
    category: "Food & Beverages",
    inStock: true,
    featured: false,
    createdAt: "2024-02-15T10:40:00Z",
    updatedAt: "2024-02-20T13:20:00Z",
  },
  {
    id: 33,
    name: "Artisan Chocolate Bar",
    slug: "artisan-chocolate-bar",
    price: 1599,
    description:
      "Premium dark chocolate bar made with 70% cocoa from ethically sourced beans. Rich, complex flavor with notes of vanilla and caramel.",
    img: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1481391319762-47dff72954d9?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80",
    ],
    category: "Food & Beverages",
    inStock: true,
    featured: true,
    createdAt: "2024-02-16T14:25:00Z",
    updatedAt: "2024-02-21T16:45:00Z",
  },
  {
    id: 34,
    name: "Protein Powder",
    slug: "protein-powder",
    price: 3299,
    description:
      "Whey protein powder with 25g protein per serving. Supports muscle growth and recovery. Available in chocolate and vanilla flavors.",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80",
    ],
    category: "Food & Beverages",
    inStock: true,
    featured: true,
    createdAt: "2024-02-17T11:55:00Z",
    updatedAt: "2024-02-22T08:30:00Z",
  },
  {
    id: 35,
    name: "Adjustable Dumbbells",
    slug: "adjustable-dumbbells",
    price: 15999,
    description:
      "Space-saving adjustable dumbbells with weight range from 5-50 lbs per dumbbell. Quick weight adjustment system with secure locking mechanism.",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1591343395902-d08b83c6b4c5?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80",
    ],
    category: "Fitness",
    inStock: true,
    featured: true,
    createdAt: "2024-02-18T09:10:00Z",
    updatedAt: "2024-02-23T12:05:00Z",
  },
  {
    id: 36,
    name: "Resistance Bands Set",
    slug: "resistance-bands-set",
    price: 2499,
    description:
      "Complete resistance bands set with 5 different resistance levels. Includes door anchor, handles, and ankle straps for full-body workouts.",
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1591343395902-d08b83c6b4c5?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=600&q=80",
    ],
    category: "Fitness",
    inStock: true,
    featured: false,
    createdAt: "2024-02-19T13:45:00Z",
    updatedAt: "2024-02-24T15:30:00Z",
  },
  {
    id: 37,
    name: "Foam Roller",
    slug: "foam-roller",
    price: 1899,
    description:
      "High-density foam roller for muscle recovery and myofascial release. Helps reduce muscle soreness and improve flexibility after workouts.",
    img: "https://images.unsplash.com/photo-1591343395902-d08b83c6b4c5?auto=format&fit=crop&w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1591343395902-d08b83c6b4c5?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=600&q=80",
    ],
    category: "Fitness",
    inStock: true,
    featured: true,
    createdAt: "2024-02-20T16:20:00Z",
    updatedAt: "2024-02-25T10:15:00Z",
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
