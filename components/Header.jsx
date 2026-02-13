import React from "react";
import Image from "next/image";
import Link from "next/link";
import Topheader from "./Topheader";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const Header = () => {
  const navLinks = [
    { name: "Dry Fruits", href: "/" },
    { name: "Chocolates", href: "/" },
    { name: "Dates", href: "/" },
    { name: "Dryied Fruits", href: "/" },
    { name: "Specialites", href: "/" },
    { name: "Gifting", href: "/" },
  ];

  const linkStyle =
    "relative hover:text-primary transition-colors duration-300 " +
    "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full " +
    "after:bg-primary after:origin-right after:scale-x-0 after:transition-transform after:duration-300 " +
    "hover:after:origin-left hover:after:scale-x-100";

  return (
    <header>
      <Topheader />
      <div className="flex items-center justify-around py-2">
        <span className="text-xl text-primary">
          <FaMagnifyingGlass />
        </span>
        <Link href="/">
          <Image src="/images/logo-red.png" width={80} height={80} alt="Logo" />
        </Link>
        <span className="text-xl text-primary flex gap-3">
          <FaShoppingCart />
          <FaUser />
        </span>
      </div>
      <nav className="flex justify-center gap-8 mt-6 text-[16px] uppercase font-bold font-mono pb-6">
        {navLinks.map((link, index) => (
          <Link key={index} href={link.href} className={linkStyle}>
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
