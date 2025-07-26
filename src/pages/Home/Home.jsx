import React, { useEffect } from "react";
import HeroSection from "./HeroSection";
import ProductShowcase from "./ProductShowcase";
import CategoriesSection from "./CategoriesSection";
import ComboPacksShowcase from "./ComboPacksShowcase";
import WhoWeAre from "./WhoWeAre";

function Home() {
  return (
    <div>
      <HeroSection />
      <CategoriesSection />
      <ProductShowcase />
      <ComboPacksShowcase />
      <WhoWeAre />
    </div>
  );
}

export default Home;
