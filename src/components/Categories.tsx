import Card from "./Card";
const categories = [
  {
    id: 1,
    title: "Fashion & Apparel",
    img: "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Consumer Electronics",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Home & Decor",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    title: "Health & Beauty",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
  },
];

const Categories = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-8">
      {categories &&
        categories.map((category, index) => (
          <Card
            key={index}
            title={category.title}
            img={category.img}
            desc=""
            price={0}
          />
        ))}
    </div>
  );
};

export default Categories;
