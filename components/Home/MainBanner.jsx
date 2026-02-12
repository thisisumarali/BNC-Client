import Image from "next/image";

const MainBanner = () => {
  return (
    <div className="relative w-full h-screen">
      <Image
        src="/images/walnut-basket.jpg"
        alt="Cranberry"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
};

export default MainBanner;
