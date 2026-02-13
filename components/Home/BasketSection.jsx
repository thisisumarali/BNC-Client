import Image from "next/image";
import H1 from "../H1";
import Link from "next/link";

const BasketSection = () => {
  return (
    <section className="w-full min-h-[90vh] bg-white py-8">
      <H1 className="text-center py-6 text-primary">
        Chocolates & Nuts, Perfectly Gifted
      </H1>

      {/* Main Wrapper Center */}
      <div className="flex flex-col items-center gap-8 px-4 lg:px-0">
        {/* Top Wide Banner */}
        <div className="group relative w-full lg:w-[75vw] h-[40vh] outline overflow-hidden shadow-2xl">
          <Image
            alt="Cranberry"
            src="/images/mix-dry.jpg"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300" />

          {/* Responsive overlay content */}
          <div className="absolute inset-0 flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-around px-6 gap-6">
            <h2
              className="text-white text-center lg:text-left text-2xl lg:text-5xl font-semibold tracking-wide
              opacity-0 -translate-y-6
              group-hover:opacity-100 group-hover:translate-y-0
              transition-all duration-500"
            >
              Customize Your Basket <br /> With Your Favourite Products.
            </h2>

            <Link
              href="/create-basket"
              className="px-6 py-3 lg:px-8 lg:py-4 outline-2 outline-white
              hover:bg-white hover:text-primary font-medium text-white transition hover:uppercase"
            >
              Create Basket
            </Link>
          </div>
        </div>

        {/* Bottom Cards */}
        <div className="flex flex-col lg:flex-row gap-6 w-full lg:w-[75vw]">
          {/* Card 1 */}
          <div className="group relative w-full lg:w-1/2 h-[40vh] shadow-2xl overflow-hidden">
            <Image
              alt="Rice Crackers"
              src="/images/walnut-basket.jpg"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300" />

            <div className="absolute inset-0 flex flex-col sm:flex-row items-start sm:items-end justify-between px-6 py-10 gap-6">
              <div>
                <h2 className="text-white text-2xl lg:text-3xl font-semibold tracking-wide">
                  Ready Made Gift Baskets
                </h2>
                <p className="text-white text-sm sm:text-base">
                  Ready-made gift baskets <br /> filled with premium treats for
                  every occasion.
                </p>
              </div>

              <Link
                href="/ready-basket"
                className="px-4 py-2 lg:px-6 lg:py-3 outline-2 outline-white
                hover:bg-white hover:text-primary font-medium text-white transition hover:uppercase"
              >
                Buy Basket
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative w-full lg:w-1/2 h-[40vh] shadow-2xl overflow-hidden">
            <Image
              alt="Figs"
              src="/images/baskets.jpg"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300" />

            <div className="absolute inset-0 flex flex-col sm:flex-row items-start sm:items-end justify-between px-6 py-10 gap-6">
              <div>
                <h2 className="text-white text-2xl lg:text-3xl font-semibold tracking-wide">
                  Empty Baskets
                </h2>
                <p className="text-white text-sm sm:text-base">
                  Simple and elegant empty baskets <br /> ready to use for any
                  event or celebration.
                </p>
              </div>

              <Link
                href="/simple-basket"
                className="px-4 py-2 lg:px-6 lg:py-3 outline-2 outline-white
                hover:bg-white hover:text-primary font-medium text-white transition hover:uppercase"
              >
                Buy Basket
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasketSection;
