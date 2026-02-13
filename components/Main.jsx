import MainBanner from "./Home/MainBanner";
import TopMain from "./Home/TopMain";
import ExploreCollection from "./Home/ExploreCollection";
import BasketSection from "./Home/BasketSection";
import ProductsSection from "./Home/ProductsSection";
import CorporateImage from "./Home/CorporateImage";
import HomeCarousel from "./Home/HomeCarousel";

const Main = () => {
  return (
    <main>
      <MainBanner />
      <ExploreCollection />
      <BasketSection />
      <TopMain />
      <ProductsSection />
      <CorporateImage />
      <HomeCarousel />
    </main>
  );
};

export default Main;
