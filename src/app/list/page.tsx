import Image from "next/image";
import Link from "next/link";

const ListPage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      {/* CAMPAIGN */}
      <div className="flex bg-purple-100 p-2 md:p-4 xl:p-6">
        <div className="w-2/3 flex flex-col gap-2 justify-between">
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
          <Image src="/woman.png" alt="" width={100} height={100} />
        </div>
      </div>
      {/* FILTER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center">
        <div className="grid grid-cols-3  lg:grid-cols-4  gap-4 mt-3">
          <div className="p-1 bg-gray-200 rounded-full text-center">
            <select
              id=""
              name=""
              className="bg-transparent border-none outline-none w-full"
            >
              <option value="">Apple</option>
              <option value="">Banana</option>
              <option value="">Orange</option>
              <option value="">Grape</option>
            </select>
          </div>

          <div className="p-1 bg-gray-200 rounded-full text-center ">
            <select
              id=""
              name=""
              className="bg-transparent border-none outline-none w-full"
            >
              <option value="">Apple</option>
              <option value="">Banana</option>
              <option value="">Orange</option>
              <option value="">Grape</option>
            </select>
          </div>
          <div className="p-1 bg-gray-200 rounded-full text-center ">
            <select
              id=""
              name=""
              className="bg-transparent border-none outline-none w-full"
            >
              <option value="">Apple</option>
              <option value="">Banana</option>
              <option value="">Orange</option>
              <option value="">Grape</option>
            </select>
          </div>
        </div>
        <div className="flex gap-2 mt-4">
          <input
            type="text"
            name=""
            id=""
            placeholder="min price"
            className="w-1/2 p-1 bg-transparent rounded-full text-center border border-black"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="max price"
            className="w-1/2 p-1 bg-transparent rounded-full text-center border border-black"
          />
          <button className="p-1 lg:p-2 md:rounded-md  text-white bg-red-500 rounded-sm">
            APPLY
          </button>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default ListPage;
