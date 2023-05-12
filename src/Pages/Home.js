import React from "react";
import Info from "../Components/Info/Info";
import MarketPlace from "../Components/MarketPlace/MarketPlace";
import Services from "../Components/Services/Services";
import FiverrBusiness from "../Components/FiverrBusiness";
import NewBanner2 from "../Components/Banner/NewBanner2";
import Team from "../Components/Team/Team";
import Newsletter from "../Components/Newsletter/Newsletter";
import ProductCategory from "../Components/ProductCategory/ProductCategory";
import HeroBanner from "../Components/Banner/HeroBanner";
import { useSelector } from "react-redux";
import HomeBanner from "../Components/Banner/HomeBanner";
import ServiceSlider from "../Components/ServiceSlider/ServiceSlider";
const Home = () => {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  return (
    <div>
      {/* <NewBanner2 /> */}
      {isLoggedIn ? <HomeBanner /> : <HeroBanner />}
      <ProductCategory />
      <ServiceSlider />
      {/* <Services /> */}
      <Info />
      <MarketPlace />
      {/* <Team /> */}
      <FiverrBusiness />
      <Newsletter />
    </div>
  );
};

export default Home;
