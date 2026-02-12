import MainBanner from "./Home/MainBanner";
import TopMain from "./Home/TopMain";
import ExploreCollection from "./Home/ExploreCollection";
import BasketSection from "./Home/BasketSection";
import ProductsSection from "./Home/ProductsSection";

const Main = () => {
  return (
    <main>
      <MainBanner />
      <TopMain />
      <ExploreCollection />
      <BasketSection />
      <ProductsSection />
    </main>
  );
};

export default Main;
