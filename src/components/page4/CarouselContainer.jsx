import React from "react";
import Card1 from "./Card1"; // Card1 componentini import ettik
import Card2 from "./Card2"; // Card2 componentini import ettik
import Card3 from "./Card3"; // Card3 componentini import ettik
import Card4 from "./Card4"; // Card4 componentini import ettik

const CarouselContainer = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "32px",
        width: "1859px", // Inspect'teki genişlik
        height: "540px", // Inspect'teki yükseklik
        padding: "0", // Padding yoksa dahil edilmedi
        boxSizing: "border-box", // Border ve padding dahil
      }}
    >
      <Card1 /> {/* Card1 bileşenini kullandık */}
      <Card2 /> {/* Card2 bileşeni */}
      <Card3 /> {/* Card3 bileşeni */}
      <Card4 /> {/* Card4 bileşeni */}
    </div>
  );
};

export default CarouselContainer;
