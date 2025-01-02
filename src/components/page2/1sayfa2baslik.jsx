import React from "react";

const Sayfa2Baslik = () => {
  return (
    <div
      className="flex flex-col items-center gap-3"
      style={{
        width: "494px",
      }}
    >
      {/* Product Etiketi */}
      <div
        className="flex items-center justify-center"
        style={{
          width: "89px",
          height: "20px",
          padding: "12px 24px",
          borderRadius: "99px",
          backgroundColor: "#EDFF00",
        }}
      >
        <span
          style={{
            color: "var(--stone-800, #292524)",
            fontFamily: "'SF Pro Display', sans-serif",
            fontSize: "12px",
            fontWeight: 500,
            lineHeight: "normal",
          }}
        >
          Product
        </span>
      </div>

      {/* "Our Products" Başlığı */}
      <h2
        style={{
          color: "var(--stone-50, #FAFAF9)", // Yazı rengi
          textAlign: "center", // Metin ortalama
          fontFamily: "'SF Pro Display', sans-serif", // Font ailesi
          fontSize: "32px", // Yazı boyutu
          fontWeight: 600, // Yazı kalınlığı
          fontStyle: "normal", // Normal stil
          lineHeight: "normal", // Satır yüksekliği
          alignSelf: "stretch", // Kendini kapsayıcıya göre genişletir
        }}
      >
        Our Products
      </h2>

      {/* Açıklama Metni */}
      <p
        style={{
          color: "var(--stone-50, #FAFAF9)", // Yazı rengi
          textAlign: "center", // Metin ortalama
          fontFamily: "'SF Pro Display', sans-serif", // Font ailesi
          fontSize: "16px", // Yazı boyutu
          fontWeight: 400, // Yazı kalınlığı
          fontStyle: "normal", // Normal stil
          lineHeight: "24px", // Satır yüksekliği
          paddingTop: "12px", // Üst padding
          alignSelf: "stretch", // Kendini kapsayıcıya göre genişletir
        }}
      >
        Experience safe driving with stylish phone holders designed for your
        comfort. Keep your device secure and easily accessible while staying
        focused on the road.
      </p>
    </div>
  );
};

export default Sayfa2Baslik;
