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
        <div className="flex gap-4">
          <span>Home</span>
          <span>About </span>
          <span>Corporate</span>
          <span>Brands</span>
        </div>
        <Link href="/">
          <Image
            src="/images/logo-red.png"
            width={105}
            height={105}
            alt="Logo"
          />
        </Link>

        <span className=" flex gap-3">
          <span>Loyalty Card </span>
          <span>Contact Us </span>
          <span>Corporate</span>
          <span className="text-xl flex gap-3 text-primary">
            <FaShoppingCart />
            <FaUser />
            <FaMagnifyingGlass />
          </span>
        </span>
      </div>
      <nav className="flex justify-center gap-8  text-[16px] uppercase font-bold font-mono py-2">
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
