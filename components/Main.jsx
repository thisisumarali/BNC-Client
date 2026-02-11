import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import H1 from "./H1";

const Main = () => {
  return (
    <main>
      <div className="relative w-full h-[70vh]">
        <Image
          src="/images/dates.jpg"
          alt="Cranberry"
          fill
          className="object-cover"
          priority
        />
      </div>
      <H1>
        Quality Products <br /> Trusted by Thousands.
      </H1>
      <div className="flex justify-center py-6 items-center">
        <div className="relative w-1/3 h-[45vh] bg-primary/10 text-center p-6 px-16">
          <h1 className="text-4xl uppercase pb-2">A Taste Of Real Goodness</h1>
          <p className="font-sans text-lg font-light py-4">
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
      <H1>Categories</H1>
      <div className="flex justify-between py-6">
        <span className="w-1/4 h-[60vh] outline-black outline">
          {/* <Image alt="image" src={}/> */}
        </span>
      </div>
    </main>
  );
};

export default Main;
