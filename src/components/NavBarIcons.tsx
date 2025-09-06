"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CartModal from "./CartModal";

const NavBarIcons = () => {
  const [profile, setProfile] = useState(false);
  const [notification, setNotification] = useState(false);
  const [cart, setCart] = useState(false);
  return (
    <div className="hidden md:flex items-center gap-4 xl:gap-6 relative">
      <Image
        src="/profile.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={() => setProfile((prev) => !prev)}
      />
      {profile && (
        <div className="flex flex-col gap-2 absolute top-8 z-20 shadow-md p-2 rounded-md text-sm">
          <Link href="/">Profile</Link>
          <div className="cursor-pointer">Log Out</div>
        </div>
      )}
      <Image
        src="/notification.png"
        alt=""
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <div onClick={() => setCart((prev) => !prev)} className="cursor-pointer">
        <Image src="/cart.png" alt="" width={22} height={22} />
        <div className="absolute -top-4 -right-2 w-6 h-6 bg-[#F35C7A] rounded-full  text-center text-white">
          2
        </div>
      </div>
      {cart && (
        <div className="absolute p-4 top-12 rounded-md shadow-md right-0 flex flex-col gap-6 z-20 ">
          <CartModal />
        </div>
      )}
    </div>
  );
};

export default NavBarIcons;
