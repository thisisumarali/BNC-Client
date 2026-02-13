import Image from "next/image";
import H1 from "../H1";
import Link from "next/link";
import Button from "../Button";

const TopMain = () => {
  return (
    <section className="py-8">
      <H1 className="text-primary">
        Quality Products <br /> Trusted by Thousands.
      </H1>

      <div className="flex flex-col lg:flex-row justify-center py-6 items-center  px-4 lg:px-0">
        {/* Text Box */}
        <div className="relative w-full lg:w-1/3 h-auto lg:h-[45vh] bg-primary/10 text-center p-6 lg:px-16">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl uppercase pb-2">
            A Taste Of Real Goodness
          </h1>

          <p className="font-sans text-base sm:text-lg font-light py-4 leading-relaxed">
            Whether you're looking for a yummy snack, need a thoughtful gift, or
            just want to treat yourself, come and check out Bombay Choc N Nuts.
            We're here to make your day a bit sweeter and more enjoyable! Step
            into the sweet world of Bombay Choc N Nuts, a wonderful place for
            everyone in Pakistan who loves sweets and snacks! Our store is
            filled with great choices, from tasty chocolates and crunchy
            biscuits to healthy dry fruits and lots of different candies.
          </p>

          <Link href="/">
            <Button className="px-6 py-3">Shop Now</Button>
          </Link>
        </div>

        {/* Image Box */}
        <div className="relative w-full lg:w-1/3 h-[35vh] sm:h-[45vh] lg:h-[50vh]">
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
  );
};

export default TopMain;
