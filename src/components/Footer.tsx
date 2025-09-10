import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mt-6 md:mt-8 bg-gray-100">
      <div className="flex flex-col md:flex-row justify-between py-8 gap-8">
        <div className="flex flex-col gap-1 md:gap-4">
          <h2>RIMS</h2>
          <p className="w-full">
            Here is my address <br />
            at my address
          </p>
          <p>Contact Dev</p>
          <p>2345345</p>
          <div className="flex  gap-4 ">
            <Link href={"/"}>
              <Image src="/instagram.png" alt="" width={15} height={15} />
            </Link>
            <Link href={"/"}>
              <Image src="/facebook.png" alt="" width={15} height={15} />
            </Link>{" "}
            <Link href={"/"}>
              <Image src="/youtube.png" alt="" width={15} height={15} />
            </Link>{" "}
            <Link href={"/"}>
              <Image src="/pinterest.png" alt="" width={15} height={15} />
            </Link>
            <Link href={"/"}>
              <Image src="/x.png" alt="" width={15} height={15} />
            </Link>
          </div>
        </div>
        <div className="hidden md:flex flex-col gap-3">
          <h2>Company</h2>
          <Link href="">Lorem</Link>
          <Link href="">Lorem</Link>
          <Link href="">Lorem</Link>
          <Link href="">Lorem</Link>
          <Link href="">Lorem</Link>
        </div>
        <div className="hidden md:flex flex-col gap-3">
          <h2>Company</h2>
          <Link href="">Lorem</Link>
          <Link href="">Lorem</Link>
          <Link href="">Lorem</Link>
          <Link href="">Lorem</Link>
          <Link href="">Lorem</Link>
        </div>
        <div className="hidden md:flex flex-col gap-3">
          <h2>Company</h2>
          <Link href="">Lorem</Link>
          <Link href="">Lorem</Link>
          <Link href="">Lorem</Link>
          <Link href="">Lorem</Link>
          <Link href="">Lorem</Link>
        </div>
        <div className="flex flex-col gap-3">
          <h2>Subscribe</h2>
          <div className="   border border-black">
            <input
              type="text"
              className="w-3/4 h-[40px] border-none outline-none"
              placeholder="Email Address"
            />
            <button className="py-2 w-1/4 text-white bg-red-500">JOIN</button>
          </div>
          <p>Secure Payments</p>
          <div className="flex gap-4">
            <Link href={"/"}>
              <Image src="/instagram.png" alt="" width={15} height={15} />
            </Link>
            <Link href={"/"}>
              <Image src="/facebook.png" alt="" width={15} height={15} />
            </Link>{" "}
            <Link href={"/"}>
              <Image src="/youtube.png" alt="" width={15} height={15} />
            </Link>{" "}
            <Link href={"/"}>
              <Image src="/pinterest.png" alt="" width={15} height={15} />
            </Link>
            <Link href={"/"}>
              <Image src="/x.png" alt="" width={15} height={15} />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:justify-between mt-4 pb-4 items-center md:items-stretch">
        <div>
          <p>2025 copyright</p>
        </div>
        <div className="flex gap-3 flex-col md:flex-row md:gap-8 items-center md:items-stretch">
          <div>
            <p>Language: Country | language</p>
          </div>
          <div>Currency: $USD</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
