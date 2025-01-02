import React from "react";
import CarouselContainer from "./CarouselContainer"; // CarouselContainer'ı import ettik
import UrunBilgileri from "./Urunbilgileri"; // UrunBilgileri'yi import ettik
import Footer from "../../Footer2"; // Footer'ı doğru konumdan import ettik

const AltsayfaOutFrontPro = () => {
  return (
    <div
      className="max-w-[1440px] w-full h-[1538px] p-8 bg-neutral-900 rounded-[32px] mx-auto"
      style={{
        boxSizing: "border-box",
        padding: "12px", // Yanlardan ve üstten boşluk
      }}
    >
      {/* İlk Container */}
      <div
        style={{
          display: "inline-flex",
          padding: "153px 132px 91px 132px",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "24px",
          background: "#D7D7D7",
        }}
      >
        {/* İkinci Container (kırmızı container) */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "24px",
            padding: "153px 132px 91px 132px",
            width: "1152px",
            height: "720px",
            position: "relative", // Child'ların içinde konumlandırılması için
          }}
        >
          {/* CarouselContainer burada çağrılıyor */}
          <CarouselContainer />

          {/* UrunBilgileri burada çağrılıyor */}
          <UrunBilgileri />
        </div>
      </div>

      {/* Footer Parent Container */}
      <div
        style={{
          width: "1416px",
          height: "960px",
          borderRadius: "24px", // Köşe yuvarlatma
          background: "white", // Geçici kırmızı arka plan
          boxSizing: "border-box",
          zIndex: 0, // Öne alma
          marginTop:"-500px"
        }}
      >

          <Footer />
        
      </div>
    </div>
  );
};

export default AltsayfaOutFrontPro;