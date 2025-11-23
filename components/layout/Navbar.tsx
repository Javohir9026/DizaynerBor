import Image from "next/image";
import React from "react";
import LogoText from "@/assets/Logo/Text/png/DizaynerBorPngBlack.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b-2 border-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link href={'/'}  className="shrink-0 flex items-center h-20 ">
            <Image
              src={LogoText}
              alt="DizaynerBor"
              width={200} 
              height={40}
              className="object-contain pointer-events-none"
            />
          </Link>

          <div className="hidden md:flex text-[18px] items-center space-x-2 font-semibold text-black">
            <Link href="/" className="hover:bg-gray-200 active:bg-gray-300  rounded-lg transition px-3 py-1">
              Asosiy
            </Link>
            <Link href="/" className="hover:bg-gray-200 active:bg-gray-300 rounded-lg transition px-3 py-1">
              Login
            </Link>
            <Link href="/" className="hover:bg-gray-200 active:bg-gray-300 rounded-lg transition px-3 py-1">
              Register
            </Link>
            <Link href="/" className="hover:bg-gray-200 active:bg-gray-300 rounded-lg transition px-3 py-1">
              About
            </Link>

          </div>

          <div className="md:hidden"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
