import Card from "./Card";

const products = [
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
];

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products &&
        products.map((product, index) => (
          <Card
            key={index}
            title={product.name}
            desc={product.description}
            price={product.price}
            img={product.img}
          />
        ))}
    </div>
  );
};

export default ProductList;
