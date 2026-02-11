import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import H1 from "./H1";

const Main = () => {
  return (
    <main>
      <div className="relative w-full h-[70vh]">
        <Image
          src="/images/Bombay-Banner.png"
          alt="Cranberry"
          fill
          className="object-cover"
          priority
        />
      </div>
      <section className="py-8">
        <H1 className="text-primary">
          Quality Products <br /> Trusted by Thousands.
        </H1>
        <div className="flex justify-center py-6 items-center">
          <div className="relative w-1/3 h-[45vh] bg-primary/10 text-center p-6 px-16">
            <h1 className="text-4xl uppercase pb-2">
              A Taste Of Real Goodness
            </h1>
            <p className="font-sans text-lg font-light py-4">
              Whether you're looking for a yummy snack, need a thoughtful gift,
              or just want to treat yourself, come and check out Bombay Choc N
              Nuts. We're here to make your day a bit sweeter and more
              enjoyable! Step into the sweet world of Bombay Choc N Nuts, a
              wonderful place for everyone in Pakistan who loves sweets and
              snacks! Our store is filled with great choices, from tasty
              chocolates and crunchy biscuits to healthy dry fruits and lots of
              different candies.
            </p>
            <Link href="/">
              <Button className="px-6 py-3">Shop Now</Button>
            </Link>
          </div>
          <div className="relative w-1/3 h-[50vh]">
            <Image
              src="/images/cranberry.jpg"
              alt="Cranberry"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>
      <section className="pt-16">
        <H1 className="text-primary">Explore BCN Collection</H1>
        <div className="flex justify-between pt-6">
          <Link
            href="/"
            className="group relative w-1/4 h-[60vh] outline-white outline shadow-2xl overflow-hidden"
          >
            <Image
              alt="Figs"
              src="/images/Figs.jpg"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>

            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-2xl font-semibold tracking-wide  opacity-0 -translate-y-6  group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                Dry Fruits
              </h2>
            </div>
          </Link>
          <Link
            href="/"
            className="group relative w-1/4 h-[60vh] outline-white outline shadow-2xl overflow-hidden"
          >
            <Image
              alt="Figs"
              src="/images/cranberry.jpg"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>

            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-2xl font-semibold tracking-wide  opacity-0 -translate-y-6  group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                Dried Fruits
              </h2>
            </div>
          </Link>
          <Link
            href="/"
            className="group relative w-1/4 h-[60vh] outline-white outline shadow-2xl overflow-hidden"
          >
            <Image
              alt="Figs"
              src="/images/Ajwa.jpg"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>

            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-2xl font-semibold tracking-wide  opacity-0 -translate-y-6  group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                Dates
              </h2>
            </div>
          </Link>
          <Link
            href="/"
            className="group relative w-1/4 h-[60vh] outline-white outline shadow-2xl overflow-hidden"
          >
            <Image
              alt="Figs"
              src="/images/SpecialAlmonds.jpg"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>

            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-2xl font-semibold tracking-wide  opacity-0 -translate-y-6  group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                Specialites
              </h2>
            </div>
          </Link>
          <Link
            href="/"
            className="group relative w-1/4 h-[60vh] outline-white outline shadow-2xl overflow-hidden"
          >
            <Image
              alt="Figs"
              src="/images/chickpeas.jpg"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>

            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-2xl font-semibold tracking-wide  opacity-0 -translate-y-6  group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                Rice Crackers
              </h2>
            </div>
          </Link>
        </div>
      </section>
      <section className="w-full min-h-[90vh] bg-primary/50 py-10">
        <H1 className="text-white text-center pb-10">
          Chocolates & Nuts, Perfectly Gifted
        </H1>

        {/* Main Wrapper Center */}
        <div className="flex flex-col items-center gap-8">
          {/* Top Wide Banner */}
          <div className="group relative w-[75vw] h-[25vh] outline overflow-hidden shadow-2xl">
            <Image
              alt="Cranberry"
              src="/images/cranberry.jpg"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300" />

            <div className="absolute inset-0 flex items-center justify-around px-6">
              <h2
                className="text-white text-2xl lg:text-5xl font-semibold tracking-wide
          opacity-0 -translate-y-6
          group-hover:opacity-100 group-hover:translate-y-0
          transition-all duration-500"
              >
                Customize Your Basket <br /> With Your Favourite Products.
              </h2>

              <Link
                href="/"
                className="px-6 py-3 lg:px-8 lg:py-4 outline outline-2 outline-white
          hover:bg-white hover:text-primary font-medium text-white transition"
              >
                Create Basket
              </Link>
            </div>
          </div>

          {/* 👇 These two cards will be directly UNDER the banner */}
          <div className="flex gap-6 w-[75vw]">
            {/* Left Card */}
            <Link
              href="/"
              className="group relative w-1/2 h-[40vh]  shadow-2xl overflow-hidden"
            >
              <Image
                alt="Rice Crackers"
                src="/images/chickpeas.jpg"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300" />

              <div className="absolute inset-0 flex items-center justify-center">
                <h2
                  className="text-white text-3xl font-semibold tracking-wide
            opacity-0 -translate-y-6
            group-hover:opacity-100 group-hover:translate-y-0
            transition-all duration-500"
                >
                  Rice Crackers
                </h2>
              </div>
            </Link>

            {/* Right Card */}
            <Link
              href="/"
              className="group relative w-1/2 h-[40vh]  shadow-2xl overflow-hidden"
            >
              <Image
                alt="Figs"
                src="/images/Figs.jpg"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300" />

              <div className="absolute inset-0 flex items-center justify-center">
                <h2
                  className="text-white text-3xl font-semibold tracking-wide
            opacity-0 -translate-y-6
            group-hover:opacity-100 group-hover:translate-y-0
            transition-all duration-500"
                >
                  FIGS
                </h2>
              </div>
            </Link>
          </div>
        </div>
      </section>
      3
    </main>
  );
};

export default Main;
