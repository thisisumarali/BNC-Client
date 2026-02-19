import CategoryMain from "../CategoryMain";
import H1 from "../H1";

const ProductsSection = () => {
  return (
    <section className="py-8">
      <div className="mx-auto w-[95vw] md:w-[85vw] lg:w-[75vw]">
        <H1>Where Does It Come From?</H1>

        <p className="text-center font-sans text-sm lg:text-base mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quo
          corrupti iure obcaecati optio numquam <br />
          quos! sit amet consectetur adipisicing elit. Dolor quo
        </p>

        <CategoryMain />
      </div>
    </section>
  );
};

export default ProductsSection;
