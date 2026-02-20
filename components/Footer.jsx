import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaDribbble,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function Footer() {
  const socialIcons = [
    { icon: <FaFacebookF />, href: "/" },
    { icon: <FaInstagram />, href: "/" },
    { icon: <FaTwitter />, href: "/" },
    { icon: <FaGithub />, href: "/" },
    { icon: <FaDribbble />, href: "/" },
  ];

  const footerSections = [
    {
      title: "Quick Links",
      links: ["Home", "About", "Shop", "Meet the Team", "Careers"],
    },
    {
      title: "Categories",
      links: [
        "Dry Fruits",
        "Dates",
        "Dried Fruits",
        "Cracker",
        "Al Mifrah Dates",
      ],
    },
  ];

  return (
    <footer className="bg-primary">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Logo + Description */}
          <div>
            <div className="flex justify-center sm:justify-start">
              <Image
                src="/images/bombay-logo.png"
                alt="Bombay Choc n Nuts"
                width={80}
                height={80}
              />
            </div>

            <p className="mt-6 max-w-md text-center leading-relaxed text-gray-200 sm:max-w-xs sm:text-left">
              Premium sweets crafted with tradition since 1976. Taste the
              richness in every bite.
            </p>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              {socialIcons.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="text-slate-300 hover:text-white transition text-xl"
                  >
                    {item.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            {footerSections.map((section, i) => (
              <div key={i} className="text-center sm:text-left">
                <p className="text-lg font-medium text-gray-100">
                  {section.title}
                </p>
                <ul className="mt-8 space-y-1 text-sm">
                  {section.links.map((link, index) => (
                    <li key={index}>
                      <Link
                        href="/"
                        className="text-gray-300 hover:text-white transition"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact */}
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-gray-100">Contact Us</p>
              <ul className="mt-8 space-y-4 text-sm">
                <li className="flex items-center justify-center gap-2 sm:justify-start">
                  <MdEmail className="text-lg text-gray-100" />
                  <span className="text-gray-300">
                    contact@bombaychocnuts.com
                  </span>
                </li>

                <li className="flex items-center justify-center gap-2 sm:justify-start">
                  <MdPhone className="text-lg  text-gray-100" />
                  <span className="text-gray-300">0330-0266229</span>
                </li>

                <li className="flex items-start justify-center gap-2 sm:justify-start">
                  <MdLocationOn className="text-lg text-gray-100 mt-1" />
                  <address className="text-gray-300 not-italic">
                    Showroom # 2, 34 F, Muhammad Ali Co-operative Housing
                    Society, Karachi
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-500 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-gray-200">
              All rights reserved{" "}
              <Link href="/" className="underline hover:text-white transition">
                Terms & Conditions{" "}
              </Link>
              <Link href="/" className="underline hover:text-white transition">
                Privacy Policy
              </Link>
            </p>

            <p className="mt-4 text-sm text-gray-200 sm:mt-0">
              © {new Date().getFullYear()} Bombay Choc n Nuts
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
