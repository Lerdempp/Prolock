import React from "react";
import cycleImage from "../../assets/images/cycle.svg"; // Yeni görseli import ettik

const Card2 = () => {
  return (
    <div
      style={{
        width: "440px",
        height: "540px",
        backgroundColor: "#4F46E5",
        borderRadius: "40px",
        flexShrink: 0,
        padding: "40px",
        boxSizing: "border-box",
        position: "relative", // İçeriklerin yerleştirilmesi için
      }}
    >
      {/* Kart Başlığı */}
      <h2
        style={{
          color: "var(--UI-White, #FFF)",
          textAlign: "center",
          fontFamily: '"SF Pro Display"',
          fontSize: "32px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "32px", /* 100% */
          textTransform: "capitalize",
          position: "absolute",
          top: "56px", // Üstten 56px
          left: "56px", // Soldan 56px
          margin: "0", // Varsayılan boşlukları kaldır
        }}
      >
        CYCLE
      </h2>

      {/* Buton */}
      <button
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
          padding: "6px 24px",
          borderRadius: "8px",
          border: "1px solid var(--UI-White, #FFF)",
          backgroundColor: "transparent", // Butonun içi şeffaf
          color: "var(--UI-White, #FFF)", // Yazı rengi
          textAlign: "right", // Inspect'teki hizalama
          fontFamily: '"SF Pro Display"',
          fontSize: "14px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "24px", /* 171.429% */
          position: "absolute",
          top: "112px", // Üstten 112px
          left: "56px", // Soldan 56px
          cursor: "pointer",
        }}
      >
        Learn more
      </button>

      {/* Görsel */}
      <img
        src={cycleImage}
        alt="Cycle"
        style={{
          width: "328px", // Inspect'teki genişlik
          height: "410px", // Inspect'teki yükseklik
          borderRadius: "24px",
          position: "absolute",
          bottom: "-52px",
          left: "56px",
        }}
      />
    </div>
  );
};

export default Card2;
