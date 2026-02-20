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
    <footer className="relative text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/mix-fruits.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/85" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-6 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
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

            <p className="mt-6 max-w-md text-center leading-relaxed text-gray-300 sm:text-left">
              Premium sweets crafted with tradition since 1976. Taste the
              richness in every bite.
            </p>

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start">
              {socialIcons.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition text-xl"
                  >
                    {item.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2">
            {footerSections.map((section, i) => (
              <div key={i} className="text-center sm:text-left">
                <p className="text-lg font-semibold text-white">
                  {section.title}
                </p>
                <ul className="mt-6 space-y-2 text-sm">
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
              <p className="text-lg font-semibold text-white">Contact Us</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex items-center justify-center gap-3 sm:justify-start">
                  <MdEmail className="text-lg text-white" />
                  <span className="text-gray-300">
                    contact@bombaychocnuts.com
                  </span>
                </li>

                <li className="flex items-center justify-center gap-3 sm:justify-start">
                  <MdPhone className="text-lg text-white" />
                  <span className="text-gray-300">0330-0266229</span>
                </li>

                <li className="flex items-start justify-center gap-3 sm:justify-start">
                  <MdLocationOn className="text-lg text-white mt-1" />
                  <address className="text-gray-300 not-italic leading-relaxed">
                    Showroom # 2, 34 F, Muhammad Ali Co-operative Housing
                    Society, Karachi
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/20 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-gray-300">
              All rights reserved.{" "}
              <Link
                href="/"
                className="underline hover:text-white transition ml-1"
              >
                Terms & Conditions
              </Link>{" "}
              |{" "}
              <Link
                href="/"
                className="underline hover:text-white transition ml-1"
              >
                Privacy Policy
              </Link>
            </p>

            <p className="mt-4 text-sm text-gray-300 sm:mt-0">
              © {new Date().getFullYear()} Bombay Choc n Nuts
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
