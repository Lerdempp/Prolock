import React from "react";
import telefon from "../../assets/images/TELEFON.svg"; // Telefon resmi
import image from "../../assets/images/adapters.svg"; // Image resmi
import gidon2 from "../../assets/images/iki.svg"; // Gidon resmi
import rightArrow from "../../assets/icons/arrow-right.svg"

const HighlightedProduct = () => {
  return (
    <div
      style={{
        height: "540px", // Yükseklik
        alignSelf: "stretch", // Tam genişlik
        borderRadius: "20px", // Köşe yuvarlatma
        backgroundColor: "#D6D3D1", // Arka plan rengi
        display: "flex", // İçeriği hizalamak için flex düzen
        justifyContent: "space-between", // İçerikleri yatayda ayır
        alignItems: "center", // Dikeyde ortala
        position: "relative", // Referans oluşturmak için relative
      }}
    >
      {/* Telefon Resmi */}
      <img
        src={telefon}
        alt="Telefon"
        style={{
          width: "460px", // Genişlik
          height: "550px", // Yükseklik
          objectFit: "contain", // Resim taşmasın
          marginTop:"3px",
          position: "relative", // Konumlandırma için relative
          right: "-110px", // Sağa 15px kaydır
        }}
      />

      {/* Image (highlighted product) */}
      <img
        src={image}
        alt="Highlighted Product"
        style={{
          width: "266px",
          height: "269px",
          flexShrink: 0,
          position: "absolute",
          right: "198px",
          bottom: "0px",
          zIndex: 1,
        }}
      />

      {/* Gidon2 Resmi */}
      <img
        src={gidon2}
        alt="Gidon 2"
        style={{
          width: "180px",
          height: "243px",
          position: "absolute",
          right: "0px",
          top: "297px",
        }}
      />

      {/* Product Feature Section */}
      <div
        style={{
          width: "464px", // Genişlik
          height: "287px", // Yükseklik
          borderRadius: "20px", // Köşe yuvarlatma
          backgroundColor: "#EDFF00", // Arka plan rengi
          padding: "20px", // Genel padding
          boxSizing: "border-box", // Padding dahil
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "absolute", // Sabitlemek için absolute
          top: "0px", // Üstten mesafe
          right: "0px", // Sağdan mesafe
          zIndex: 2,
        }}
      >
        {/* Explore Button */}
        <div
          style={{
            display: "flex",
            width: "98px",
            height: "28px",
            padding: "4px 8px 4px 12px",
            alignItems: "center",
            gap: "4px",
            flexShrink: 0,
            borderRadius: "37px",
            background: "var(--stone-50, #FAFAF9)", // Arka plan rengi
            position: "absolute",
            top: "16px",
            right: "16px",
            zIndex: 10,
          }}
        >
          <span
            style={{
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "normal",
              color: "var(--stone-800, #292524)",
              fontFamily: "'SF Pro Display', sans-serif",
            }}
          >
            explore
          </span>
          <img
            src={rightArrow} // Icon resmi
            alt="Arrow Right"
            style={{
              width: "16px",
              height: "16px",
            }}
          />
        </div>

        {/* Yeni Description Container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "374px",
            height: "116px",
            padding: "0px 0px",
            boxSizing: "border-box",
            position: "relative",
          }}
        >
          {/* Label */}
          <div
            style={{
              display: "flex",
              height: "28px",
              padding: "8px 23px",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              borderRadius: "999px",
              background: "var(--neutral-800, #262626)",
              position: "absolute",
              top: "0px",
              left: "0px",
            }}
          >
            <span
              style={{
                color: "var(--stone-50, #FAFAF9)",
                fontFamily: "'SF Pro Display', sans-serif",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
              }}
            >
              product
            </span>
          </div>

          {/* Başlık */}
          <h2
            style={{
              width: "100%",
              height: "auto",
              color: "var(--stone-950, #0C0A09)",
              fontFamily: "'SF Pro Display', sans-serif",
              fontSize: "32px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "normal",
              marginTop: "40px",
            }}
          >
            quad lock for stem mount
          </h2>

          {/* Açıklama */}
          <p
            style={{
              width: "100%",
              height: "auto",
              color: "var(--stone-950, #0C0A09)",
              fontFamily: "'SF Pro Display', sans-serif",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
              marginTop: "4px",
            }}
          >
            2x color - 2x variants
          </p>

          {/* Fiyat */}
          <p
            style={{
              width: "100%",
              height: "auto",
              color: "var(--stone-950, #0C0A09)",
              fontFamily: "'SF Pro Display', sans-serif",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
              marginTop: "6px",
            }}
          >
            ₺1500
          </p>

          {/* Yeni İçerik */}
          <p
            style={{
              width: "100%",
              color: "var(--stone-950, #0C0A09)",
              fontFamily: "'SF Pro Display', sans-serif",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal",
              marginTop: "81px", // Alt içerik olarak, üstüne boşluk
            }}
          >
            Safe, Robust, Controllable
          </p>
          <p
            style={{
              width: "100%",
              color: "var(--stone-950, #0C0A09)",
              fontFamily: "'SF Pro Display', sans-serif",
              fontSize: "12px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
              marginTop: "6px", // Alt içerik olarak, üstüne boşluk
            }}
          >
            We have designed it in the most robust way by giving importance to
            your comfort.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HighlightedProduct;
