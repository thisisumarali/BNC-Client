"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "../Button";

const CorporateImage = () => {
  return (
    <section className="w-[75vw] py-16 flex justify-center">
      <div className=" px-4">
        {/* Main Wrapper */}
        <div className="relative overflow-hidden rounded-xl border border-primary/20 bg-[#fbf7f2] shadow-sm">
          {/* Soft background glow */}
          <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-transparent" />

          <div className="relative grid grid-cols-1 items-center gap-10 p-8 md:p-12 md:grid-cols-2 ">
            {/* Left Image */}
            <div className="relative h-80 w-full md:h-105">
              <Image
                src="/images/CorporateImage.png"
                alt="Corporate Gift Box"
                fill
                priority
                className="object-contain drop-shadow-2xl"
              />
            </div>

            {/* Right Content */}
            <div className="text-center md:text-left">
              {/* Chips */}
              <div className="mb-6 flex flex-wrap justify-center gap-3 md:justify-start">
                <span className="rounded-full border border-primary/30 bg-white px-4 py-2 text-sm text-primary shadow-sm">
                  🎁 Free Gift Wrap
                </span>
                <span className="rounded-full border border-primary/30 bg-white px-4 py-2 text-sm text-primary shadow-sm">
                  🚚 Same Day Delivery
                </span>
                <span className="rounded-full border border-primary/30 bg-white px-4 py-2 text-sm text-primary shadow-sm">
                  📍 Premium Imported Dates
                </span>
              </div>

              <h1 className="text-4xl font-semibold font-mono leading-tight text-black md:text-5xl">
                Premium Dry Fruits & Dates <br />
                <span className="font-sans uppercase text-black/70">
                  for Corporate & Wedding Gifts
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-lg font-light text-black/70">
                Build luxurious gift boxes with premium dry fruits, imported
                dates and gourmet treats — crafted to elevate every moment.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
                <Link href="/build-your-box">
                  <Button className="w-full bg-primary px-8 py-4 text-white hover:opacity-90 sm:w-auto">
                    Corporate Gift Box →
                  </Button>
                </Link>

                <Link href="/best-sellers">
                  <button className="w-full rounded-full border border-primary/40 bg-white px-8 py-4 font-medium text-primary shadow-sm transition hover:bg-primary/5 sm:w-auto">
                    Shop Best Sellers →
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Features Strip */}
          <div className="relative grid grid-cols-1 gap-4 border-t border-primary/15 bg-white/70 p-6 md:grid-cols-3">
            <div className="flex items-center justify-center gap-3 md:justify-start">
              <span className="text-xl text-primary">⭐</span>
              <div>
                <p className="font-semibold text-black">4.9 Rating</p>
                <p className="text-sm text-black/60">on Google</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 md:justify-start">
              <span className="text-xl text-primary">🚚</span>
              <div>
                <p className="font-semibold text-black">Fast Delivery</p>
                <p className="text-sm text-black/60">in Karachi</p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 md:justify-start">
              <span className="text-xl text-primary">🎀</span>
              <div>
                <p className="font-semibold text-black">Custom Branding</p>
                <p className="text-sm text-black/60">for Companies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateImage;
