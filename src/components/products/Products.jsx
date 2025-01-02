import React from "react";
import Footer from "../Footer2";
import Card from "./Card"; // Kart bileşeni import edildi
import Card1 from "./Card1"; // Kart bileşeni import edildi
import Card2 from "./Card2"; // Kart bileşeni import edildi
import Card3 from "./Card3"; // Kart bileşeni import edildi
import Card4 from "./Card4"; // Kart bileşeni import edildi
import Card5 from "./Card5"; // Kart bileşeni import edildi
import Card6 from "./Card6"; // Kart bileşeni import edildi
import Card7 from "./Card7"; // Kart bileşeni import edildi

const Products = () => {
  return (
    <div
      className="max-w-[1440px] w-full h-[1479px] p-8 bg-neutral-900 rounded-[32px] mx-auto"
      style={{
        boxSizing: "border-box",
        padding: "12px", // Yanlardan ve üstten boşluk
      }}
    >
      {/* Gri Alan (Container) */}
      <div
        style={{
          display: "inline-flex",
          padding: "135px 136px 30px 132px", // Yeni padding değerleri
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "24px",
          background: "#D7D7D7",
        }}
      >
        {/* Card Container */}
        <div
          style={{
            marginTop:"20px",
            display: "flex",
            flexWrap: "wrap", // Kartların satır halinde dizilmesi için
            gap: "34px 24px", // Kartlar arasında boşluk
            width: "1148px", // Card container genişliği
            height: "752px", // Card container yüksekliği
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Kartlar */}
          <Card />
          <Card1 />
          <Card2 />
          <Card3 />
          <Card4 />
          <Card5 />
          <Card6 />
          <Card7 />
        </div>
      </div>

      {/* Footer Parent Container */}
      <div
        style={{
          width: "1416px",
          height: "960px",
          borderRadius: "24px", // Köşe yuvarlatma
          background: "white", // Arka plan rengi
          boxSizing: "border-box",
          zIndex: 0, // Öne alma
          marginTop: "-500px", // Negatif margin
        }}
      >
        <Footer />
      </div>
    </div>
  );
};

export default Products;
