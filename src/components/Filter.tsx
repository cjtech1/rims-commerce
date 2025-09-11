"use client";

const Filter = () => {
  return (
    <div className="mt-12 w-full flex flex-col gap-4">
      <div className="w-full flex flex-nowrap gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        <select className="min-w-[120px] p-2 bg-gray-200 rounded-full text-center border-none outline-none">
          <option value="">Apple</option>
          <option value="">Banana</option>
          <option value="">Orange</option>
          <option value="">Grape</option>
        </select>
        <input
          type="text"
          placeholder="min price"
          className="min-w-[100px] p-2 bg-transparent rounded-full text-center border border-black"
        />
        <input
          type="text"
          placeholder="max price"
          className="min-w-[100px] p-2 bg-transparent rounded-full text-center border border-black"
        />
        <select className="min-w-[120px] p-2 bg-gray-200 rounded-full text-center border-none outline-none">
          <option value="">Apple</option>
          <option value="">Banana</option>
          <option value="">Orange</option>
          <option value="">Grape</option>
        </select>
        <select className="min-w-[120px] p-2 bg-gray-200 rounded-full text-center border-none outline-none">
          <option value="">Apple</option>
          <option value="">Banana</option>
          <option value="">Orange</option>
          <option value="">Grape</option>
        </select>
        <select className="min-w-[120px] p-2 bg-gray-200 rounded-full text-center border-none outline-none">
          <option value="">Apple</option>
          <option value="">Banana</option>
          <option value="">Orange</option>
          <option value="">Grape</option>
        </select>
      </div>
      <div className="w-full flex gap-4">
        <select className="min-w-[120px] p-2 bg-gray-200 rounded-full text-center border-none outline-none">
          <option value="">Apple</option>
          <option value="">Banana</option>
          <option value="">Orange</option>
          <option value="">Grape</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
