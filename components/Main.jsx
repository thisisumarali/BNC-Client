import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import H1 from "./H1";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import CategoryTabs from "./CategoryTabs";
import CategoryMain from "./CategoryMain";

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
              <Button className="px-6 py-3 ">Shop Now</Button>
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
        <div className="grid grid-cols-3 items-center px-6 py-5">
          <div></div>
          <h1 className="text-primary text-5xl font-mono text-center uppercase">
            Explore Collection
          </h1>

          <div className="flex justify-end">
            <Link
              href="/categories"
              className="text-primary flex uppercase gap-2 items-center group"
            >
              All Categories
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <HiOutlineArrowNarrowRight />
              </span>
            </Link>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 px-2 pt-6 uppercase">
          {[
            {
              title: "Dry Fruits",
              img: "/images/Figs.jpg",
              link: "/dry-fruits",
            },
            { title: "Dried Fruits", img: "/images/cranberry.jpg", link: "/" },
            { title: "Dates", img: "/images/Ajwa.jpg", link: "/" },
            {
              title: "Specialities",
              img: "/images/SpecialAlmonds.jpg",
              link: "/",
            },
            { title: "Rice Crackers", img: "/images/chickpeas.jpg", link: "/" },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="group relative h-[60vh] shadow-2xl overflow-hidden"
            >
              <Image
                alt={item.title}
                src={item.img}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>

              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-white text-2xl font-semibold tracking-wide opacity-0 -translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {item.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="w-full min-h-[90vh] bg-primary/90 py-10">
        <H1 className="text-white text-center pb-10">
          Chocolates & Nuts, Perfectly Gifted
        </H1>

        {/* Main Wrapper Center */}
        <div className="flex flex-col items-center gap-8">
          {/* Top Wide Banner */}
          <div className="group relative w-[75vw] h-[30vh] outline overflow-hidden shadow-2xl">
            <Image
              alt="Cranberry"
              src="/images/gift-basket.png"
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
                className="px-6 py-3 lg:px-8 lg:py-4  outline-2 outline-white
          hover:bg-white hover:text-primary font-medium text-white transition hover:uppercase "
              >
                Create Basket
              </Link>
            </div>
          </div>

          {/* 👇 These two cards will be directly UNDER the banner */}
          <div className="flex gap-6 w-[75vw]">
            {/* Left Card */}
            <div className="group relative w-1/2 h-[40vh]   shadow-2xl overflow-hidden">
              <Image
                alt="Rice Crackers"
                src="/images/gift-basket.png"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300" />

              <div className="absolute inset-0 flex items-end justify-around px-6 py-12">
                <div>
                  <h2
                    className="text-white text-2xl lg:text-3xl font-semibold tracking-wide  
     
          opacity-100 translate-y-0
          transition-all duration-500"
                  >
                    Ready Made Gift Baskets
                  </h2>
                  <p className="text-white">
                    Ready-made gift baskets <br /> filled with premium treats
                    for every occasion.
                  </p>
                </div>

                <Link
                  href="/"
                  className="px-4 py-2 lg:px-6 lg:py-3  outline-2 outline-white
          hover:bg-white hover:text-primary font-medium text-white transition hover:uppercase "
                >
                  Buy Basket
                </Link>
              </div>
            </div>

            <div className="group relative w-1/2 h-[40vh]  shadow-2xl overflow-hidden">
              <Image
                alt="Figs"
                src="/images/empty-basket.jpg"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300" />

              <div className="absolute inset-0 flex items-end justify-around px-6 py-12">
                <div>
                  <h2
                    className="text-white text-2xl lg:text-3xl font-semibold tracking-wide
     
          opacity-100 translate-y-0
          transition-all duration-500"
                  >
                    Empty Baskets
                  </h2>
                  <p className="text-white">
                    Simple and elegant empty baskets <br /> ready to use for any
                    event or celebration.
                  </p>
                </div>

                <Link
                  href="/"
                  className="px-4 py-2 lg:px-6 lg:py-3  outline-2 outline-white
          hover:bg-white hover:text-primary font-medium text-white transition hover:uppercase"
                >
                  Buy Basket
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8">
        <H1>Where Does It Come From?</H1>
        <p className="text-center font-sans ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quo
          corrupti iure obcaecati optio numquam <br />
          quos! sit amet consectetur adipisicing elit. Dolor quo
        </p>
        <CategoryMain />
      </section>
    </main>
  );
};

export default Main;
