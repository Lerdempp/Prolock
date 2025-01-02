import React, { useState } from "react";
import chevronRight from "../../assets/icons/Chevron-right.svg";
import chevronLeft from "../../assets/icons/Chevron-left.svg";
import ImageSlide1 from "./ImageSlide1";
import ImageSlide2 from "./ImageSlide2";

function HeroSection() {
  const slides = [ImageSlide1, ImageSlide2]; // Slayt bileşenleri
  const [currentSlide, setCurrentSlide] = useState(0); // Default olarak ilk slayt seçili

  const onLeftClick = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1)); // Sol tıkla bir önceki slayta git
  };

  const onRightClick = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1)); // Sağ tıkla bir sonraki slayta git
  };

  return (
    <div
      className="relative"
      style={{
        width: "1416px",
        height: "1024px",
        padding: "12px",
        borderRadius: "24px",
        backgroundColor: "#D7D7D7",
        overflow: "hidden", // Taşmaları engellemek için
      }}
    >

      {/* Sağ Buton */}
      <div
        style={{
          width: "52px",
          height: "52px",
          borderRadius: "50%",
          cursor: "pointer",
          position: "absolute",
          top: "482px",
          right: "132px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#EDFF00",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Hafif bir gölge
          zIndex: 20, // Butonların üstte olmasını sağla
        }}
        onClick={onRightClick}
      >
        <img
          src={chevronRight}
          style={{
            width: "24px",
            height: "24px",
          }}
          alt="Right Arrow"
        />
      </div>

      {/* Sol Buton */}
      <div
        style={{
          width: "52px",
          height: "52px",
          borderRadius: "50%",
          cursor: "pointer",
          position: "absolute",
          top: "482px",
          left: "132px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#EDFF00",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          zIndex: 20, // Butonların üstte olmasını sağla
        }}
        onClick={onLeftClick}
      >
        <img
          src={chevronLeft}
          style={{
            width: "24px",
            height: "24px",
          }}
          alt="Left Arrow"
        />
      </div>

      {/* Slider Component'leri */}
      <div className="">
        {React.createElement(slides[currentSlide])} {/* currentSlide index'ine göre slider'ı render et */}
      </div>

      {/* Açıklama Metni */}
      <div
        style={{
          position: "absolute",
          top: "852px",
          left: "132px",
          color: "#0C0A09",
          fontFamily: '"SF Pro Display"',
          fontSize: "16px",
          fontWeight: "500",
        }}
      >
        Our products help you securely <br />
        mount your phones, ensuring <br />
        stability and convenience.
      </div>
    </div>
  );
}

export default HeroSection;
