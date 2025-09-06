import Image from "next/image";
import Menu from "./Menu";
import NavBarIcons from "./NavBarIcons";
import SearchBar from "./SearchBar";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-between relative">
      {/* Mobile View */}
      <a href="/" className="flex items-center gap-2 md:hidden">
        <Image src="/logo.png" alt="" width={28} height={28} />
        <h1 className="text-2xl tracking-wide">RIMS</h1>
      </a>
      <Menu />
      {/* Larger Screens */}
      <div className="hidden  h-full w-full md:flex items-center justify-between gap-8 ">
        {/* Left */}
        <div className="w-1/3 xl:w-1/2 flex justify-evenly">
          <a href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="" width={28} height={28} />
            <h1 className="text-2xl tracking-wide">RIMS</h1>
          </a>
          <div className="hidden xl:flex gap-4 items-center">
            <Link href="">Home</Link>
            <Link href="">Shop</Link>
            <Link href="">Deal</Link>
            <Link href="">About</Link>
            <Link href="">Contact</Link>
          </div>
        </div>
        {/* Right */}
        <div className="w-2/3 xl:w-1/2 flex justify-between items-center gap-8">
          <SearchBar />
          <NavBarIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
