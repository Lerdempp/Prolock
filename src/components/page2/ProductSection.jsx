import React from "react";
import Sayfa2Baslik from "./1sayfa2baslik";
import HighlightedProduct from "./2HighlightedProduct";
import ProductMoreInfo from "./3ProductMoreInfo";
import ProductsSection from "./4ProductsSection";

const ProductSection = () => {
  return (
    <div
      className="flex flex-col items-center"
      style={{
        width: "1152px",
        height: "1621px",
        boxSizing: "border-box",
        margin: "0 auto",
      }}
    >
      {/* "Our Products" Alanı */}
      <Sayfa2Baslik />

      {/* Başlık ile HighlightedProduct Arasındaki Boşluk */}
      <div style={{ height: "64px" }}></div>

      {/* HighlightedProduct Alanı */}
      <div style={{ width: "100%" }}>
        <HighlightedProduct />
      </div>

      {/* HighlightedProduct ile Product More Info Arasındaki Boşluk */}
      <div style={{ height: "24px" }}></div>

      {/* Product More Info Alanı */}
      <div style={{ width: "100%" }}>
        <ProductMoreInfo />
      </div>

      {/* Product More Info ile ProductsSection Arasındaki Boşluk */}
      <div style={{ height: "24px" }}></div>

      {/* ProductsSection Alanı */}
      <div style={{ width: "100%" }}>
        <ProductsSection />
      </div>
    </div>
  );
};

export default ProductSection;
