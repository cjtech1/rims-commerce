import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";

const SinglePage = () => {
  return (
    <div>
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
        {/* Image */}
        <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
          <ProductImages />
        </div>
        {/* Text */}
        <div className="w-full lg:w-1/2 flex-col gap-6">
          <h1 className="text-4xl font-medium mb-3">Product Name</h1>
          <p className="text-gray-500 mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos; s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
          <div className="flex flex-col gap-2">
            <div className="h-[2px] bg-gray-100" />
            <div className="flex gap-4 items-center">
              <h3 className="text-xl text-gray-500 line-through">500</h3>
              <h2 className="text-2xl text-black font-semibold">400</h2>
            </div>
            <div className="h-[2px] bg-gray-100" />
          </div>
          <div className="mt-2 p-2">
            <CustomizeProducts />
            <div className="h-[2px] bg-gray-100" />
          </div>
          <div className="text-sm mt-1 mb-2">
            <h4 className="text-lg font-medium mb-1">Product Details</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto consectetur explicabo vero aut modi beatae error, iusto
              ex laborum magni dicta provident dolore adipisci sit, nostrum, eum
              iure esse obcaecati.
            </p>
          </div>
          <div className="text-sm mt-1 mb-2">
            <h4 className="text-lg font-medium mb-1">Product Details</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto consectetur explicabo vero aut modi beatae error, iusto
              ex laborum magni dicta provident dolore adipisci sit, nostrum, eum
              iure esse obcaecati.
            </p>
          </div>
          <div className="text-sm mt-1 mb-2">
            <h4 className="text-lg font-medium mb-1">Product Details</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto consectetur explicabo vero aut modi beatae error, iusto
              ex laborum magni dicta provident dolore adipisci sit, nostrum, eum
              iure esse obcaecati.
            </p>
          </div>
          <div className="text-sm mt-1 mb-2">
            <h4 className="text-lg font-medium mb-1">Product Details</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto consectetur explicabo vero aut modi beatae error, iusto
              ex laborum magni dicta provident dolore adipisci sit, nostrum, eum
              iure esse obcaecati.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
