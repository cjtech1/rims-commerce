"use client";

import Image from "next/image";

const CartModal = () => {
  const cartEmpty = false;
  return (
    <div>
      {cartEmpty ? (
        <div>The cart is empty</div>
      ) : (
        <div className="flex flex-col gap-2 text-base w-max bg-white p-4 rounded-md">
          <h1 className="text-xl font-bold">Shopping Cart</h1>

          <div className="flex  justify-between items-center">
            <div className="w-20 h-24">
              <Image
                src="/cart.png"
                alt=""
                width={72}
                height={96}
                className="object-cover rounded-md"
              />
            </div>
            <div className="flex">
              <div className="flex justify-between gap-4 flex-col">
                <div className="flex justify-between gap-8">
                  <div className="">
                    <p className="font-semibold">Product Name</p>
                    <p className="text-sm text-gray-500">Available</p>
                  </div>
                  <div>
                    <p className="p-1 bg-gray-100 rounded-sm">price</p>
                  </div>
                </div>
                <div className="flex gap-8 justify-between text-sm">
                  <div className="text-gray-500">Quantity: 2</div>
                  <div className="text-blue-500">Remove</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <div>Subtotal:</div>
              <div>200</div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500">
                Taxes and shipping charges will be calculated at checkout
              </p>
            </div>
          </div>
          <div className="flex gap-4 justify-between tetx-sm mt-4">
            <button className="py-2 px-4 rounded-md ring-1 ring-gray-300">
              View Cart
            </button>
            <button className="py-2 px-4 rounded-md ring-1 ring-gray-200 bg-black text-white">
              Check Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartModal;
