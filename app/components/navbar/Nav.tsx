"use client"
import Image from "next/image";
import logo from "@/public/Logo.png";
import { useRouter } from "next/router";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import useMediaQuery from "@/app/hooks/useMediaQuery";
import Link from "next/link";

type Props = {};
const Nav = (props: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const router = useRouter();

  return (
    <div className="p-3 shadow-lg fixed top-0 z-30 w-full bg-white">
      <div className="flex justify-between items-center w-5/6 mx-auto">
        {/* image */}
        <div className="cursor-pointer" onClick={() => router.push("/")}>
          <Image src={logo} alt="logo" height={70} width={70} className="object-cover" />
        </div>
        {/* links */}
        {isAboveMediumScreens ? (
          <div className="flex gap-4">
            <Link href="/">
              <a className="transition duration-300 text-base hover:text-accent-orange cursor-pointer">Home</a>
            </Link>
            <Link href="/about">
              <a className="transition duration-300 text-base hover:text-accent-orange cursor-pointer">About Us</a>
            </Link>
            <Link href="/services">
              <a className="transition duration-300 text-base hover:text-accent-orange cursor-pointer">Services</a>
            </Link>
            <Link href="/faq">
              <a className="transition duration-300 text-base hover:text-accent-orange cursor-pointer">FAQs</a>
            </Link>
            <Link href="/contact">
              <a className="transition duration-300 text-base hover:text-accent-orange cursor-pointer">Contact</a>
            </Link>
          </div>
        ) : (
          <>
            <button
              className="rounded-full bg-accent-orange p-2 mr-4 text-white"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
            <button
              className="rounded-full bg-accent-orange p-2 text-white"
              onClick={() => router.push("app\components\login\loginform.tsx")} // Navigate to the login page
            >
              Login
            </button>
          </>
        )}
      </div>
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-alice-blue drop-shadow-xl">
          {/* ... (existing code) */}
          <div className={`flex flex-col gap-10 ml-[33%] text-2xl`}>
            <Link href="/">
              <a className="transition duration-300 text-base hover:text-accent-orange cursor-pointer">Home</a>
            </Link>
            <Link href="/about">
              <a className="transition duration-300 text-base hover:text-accent-orange cursor-pointer">About</a>
            </Link>
            <Link href="/services">
              <a className="transition duration-300 text-base hover:text-accent-orange cursor-pointer">Design</a>
            </Link>
            <Link href="/faq">
              <a className="transition duration-300 text-base hover:text-accent-orange cursor-pointer">Project</a>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;