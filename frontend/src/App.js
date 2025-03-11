import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import HeroSection from "./components/herosection";
import ProductShowcase from "./components/product_showcase";
import NutritionInfo from "./components/NutritionInfo";
import LaunchingSection from "./components/launching";
import CertificateSection from "./components/certificate";
import Footer from "./components/footer";


export default function App() {
  return (
    <div>
      <Navbar/>
      <HeroSection />
      <ProductShowcase />
      <NutritionInfo />
      <LaunchingSection />
      <CertificateSection />
      <Footer />
    </div>
  );
}
