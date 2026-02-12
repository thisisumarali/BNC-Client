import Image from "next/image";
import Link from "next/link";


const ExploreCollection = () => {
  return (
    <section className="py-8">
      <h1 className="text-primary py-6 text-5xl font-mono text-center uppercase">
        Explore Collection
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 px-2 py-6 uppercase ">
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
            className="group  relative h-[60vh]  overflow-hidden"
          >
            <Image
              alt={item.title}
              src={item.img}
              fill
              className="object-cover rounded-full"
            />

            <div className="absolute rounded-full inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>

            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-2xl font-semibold tracking-wide opacity-0 -translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                {item.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center pt-6 py-8">
        <button className=" outline-2 outline-black text-white hover:bg-primary hover:outline-black cursor-pointer   bg-primary/90 px-6 py-3">
          All Categories
        </button>
      </div>
    </section>
  );
};

export default ExploreCollection;
