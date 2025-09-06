"use client";
import { link } from "fs";
import Image from "next/image";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <Image
        src="/menu.png"
        alt=""
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="flex flex-col absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] items-center justify-center gap-8 text-xl z-10 ">
          <a href="/">Home</a>
          <a href="">Shop</a>
          <a href="">Deals</a>
          <a href="">Cart(1)</a>
          <a href="">Contact</a>
          <a href="">About</a>
          <a href="">LogOut</a>
        </div>
      )}
    </div>
  );
};

export default Menu;
