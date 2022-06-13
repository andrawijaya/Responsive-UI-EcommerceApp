import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchProducts } from "../redux/products/products_actions";

import MainBanner from "../components/MainBanner/MainBanner";
import Categories from "../components/Categories/Categories";
import BestProducts from "../components/BestProducts/BestProducts";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import Hero from "../components/Hero/Hero";

const HomePage = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const featuredProducts = products.filter(
    (product) => product.featured === true
  );

  const bestProducts = products.filter((product) => product.best === true);

  return (
    <>
      <MainBanner />
      <Categories />
      <BestProducts bestProducts={bestProducts} />
      <Hero
        subtitleHeading="extra"
        subtitleFooter="online"
        offer="50% off"
        title="Anime collection"
        text="free shipping on orders over 200k"
      />
      <FeaturedProducts featuredProducts={featuredProducts} />
      {/* <ClientSlider /> */}
    </>
  );
};

export default HomePage;
