import React, { useState } from "react";
import Page4Heading from "./Page4Heading";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import morYuvarlak from "../../assets/icons/morYuvarlak.svg";
import leftArrow from "../../assets/icons/morSol.svg";
import rightArrow from "../../assets/icons/morSağ.svg";

const Page4Container = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Varsayılan durum: Orta

  const cards = [<Card1 />, <Card2 />, <Card3 />, <Card4 />];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0)); // Sol sınıra kadar git
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, 2)); // Sağ sınıra kadar git
  };

  return (
    <div
      style={{
        width: "1440px",
        height: "1140px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      {/* Başlık */}
      <Page4Heading />

      {/* Carousel */}
      <div
        style={{
          marginTop: "80px",
          width: "100%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            transform: `translateX(calc(-${currentIndex * (100 / 5)}%))`, // 3 durum için kaydırma
            transition: "transform 0.5s ease-in-out",
            gap: "32px",
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              style={{
                flex: "0 0 calc(100% / 3)", // 3 durum için genişlik
                boxSizing: "border-box",
              }}
            >
              {card}
            </div>
          ))}
        </div>
      </div>

      {/* Kontroller */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "1168px",
          height: "52px",
          position: "absolute",
          top: "758px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        {/* Sol Buton */}
        <div
          onClick={handlePrev}
          style={{
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            width: "52px",
            height: "52px",
            flexShrink: 0,
            backgroundImage: `url(${morYuvarlak})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            cursor: currentIndex === 0 ? "not-allowed" : "pointer",
            opacity: currentIndex === 0 ? 0.5 : 1,
          }}
        >
          <img
            src={leftArrow}
            alt="Sol Ok"
            style={{
              width: "24px",
              height: "24px",
              flexShrink: 0,
            }}
          />
        </div>

        {/* Slider Bar */}
        <div
          style={{
            width: "976px",
            height: "2px",
            background: "rgba(229, 230, 239, 0.11)",
            borderRadius: "10px",
            position: "relative",
          }}
        >
          {/* Parlak Kısım */}
          <div
            style={{
              width: "325px",
              height: "2px",
              borderRadius: "100px",
              background: "linear-gradient(0deg, #EDFF00, #EDFF00)",
              position: "absolute",
              left: `${(currentIndex / 3) * 100}%`, // Üç durum için hesaplama
              transition: "left 0.5s ease-in-out",
            }}
          ></div>
        </div>

        {/* Sağ Buton */}
        <div
          onClick={handleNext}
          style={{
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            width: "52px",
            height: "52px",
            flexShrink: 0,
            backgroundImage: `url(${morYuvarlak})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            cursor: currentIndex === 2 ? "not-allowed" : "pointer",
            opacity: currentIndex === 2 ? 0.5 : 1,
          }}
        >
          <img
            src={rightArrow}
            alt="Sağ Ok"
            style={{
              width: "24px",
              height: "24px",
              flexShrink: 0,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Page4Container;
