import React, { useState } from "react";
import Footer from "./Footer2";
import ArtiIcon from "../assets/icons/arti.svg"; // "+" ikonu
import EksiIcon from "../assets/icons/eksi.svg"; // "-" ikonu

const Faq = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const toggleDescription = (index) => {
    if (selectedButton === index) {
      // Kapanırken direkt gizle
      setIsTransitioning(false);
      setTimeout(() => setSelectedButton(null), 0); // Transition kaldırılıyor
    } else {
      // Açılırken transition başlat
      setSelectedButton(index);
      setTimeout(() => setIsTransitioning(true), 0);
    }
  };

  const renderButton = (index, title, content) => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        borderRadius: "16px",
        background: "#FFF",
        boxShadow: "0px 5px 16px rgba(8, 15, 52, 0.06)",
        fontSize: "16px",
        fontWeight: "500",
        fontFamily: "SF Pro Display",
        color: "#171717",
        padding: "16px",
        boxSizing: "border-box",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => toggleDescription(index)}
      >
        <span
          style={{
            color: "var(--Neutral-800, #170F49)",
            fontFeatureSettings: "'liga' off, 'clig' off",
            fontFamily: "SF Pro Display",
            fontSize: "22px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "28px",
            marginLeft: "15px",
          }}
        >
          {selectedButton === index ? `Close ${title}` : title}
        </span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "11px",
            gap: "4px",
            borderRadius: "8px",
            background: selectedButton === index ? "#EDFF00" : "var(--slate-50, #F8AFC)",
            width: "36px",
            height: "36px",
          }}
        >
          <img
            src={selectedButton === index ? EksiIcon : ArtiIcon}
            alt={selectedButton === index ? "Eksi" : "Artı"}
            style={{
              width: selectedButton === index ? "18px" : "14px",
              height: selectedButton === index ? "2px" : "14px",
              cursor: "pointer",
            }}
          />
        </div>
      </div>
      <div
        style={{
          maxHeight: selectedButton === index ? "500px" : "0px",
          overflow: "hidden",
          transition: isTransitioning && selectedButton === index ? "max-height 0.7s ease-in-out" : "none", // Sadece açılmada transition
        }}
      >
        <div
          style={{
            marginTop: "16px",
            padding: selectedButton === index ? "16px" : "0px",
            borderRadius: "8px",
            background: "#F9F9F9",
            boxShadow: "0px 5px 16px rgba(8, 15, 52, 0.06)",
            color: "var(--Neutral-600, #6F6C90)",
            fontFeatureSettings: "'liga' off, 'clig' off",
            fontFamily: "SF Pro Display",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "30px",
            transition: isTransitioning && selectedButton === index ? "padding 0.3s ease-in-out, opacity 0.3s ease-in-out" : "none", // Sadece açılırken transition
            opacity: selectedButton === index ? 1 : 0,
          }}
        >
          {content}
        </div>
      </div>
    </div>
  );

  return (
    <div
      style={{
        width: "1440px",
        height: "1261px",
        padding: "12px",
        borderRadius: "32px",
        background: "var(--neutral-900, #171717)",
        boxSizing: "border-box",
        margin: "0 auto",
        fontFamily: "SF Pro Display",
      }}
    >
      {/* Gri Alan */}
      <div
        style={{
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "137px 148px 176px 148px",
          width: "1416px",
          height: "721px",
          borderRadius: "24px",
          background: "#D7D7D7",
          boxSizing: "border-box",
          margin: "0 auto",
        }}
      >
        {/* Container */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "16px",
            width: "1072px",
            height: "auto",
            borderRadius: "24px",
            background: "#E1E1E1",
            boxSizing: "border-box",
          }}
        >
          {/* Sol Kolon */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "16px",
              width: "50%",
              height: "auto",
              padding: "24px",
              boxSizing: "border-box",
            }}
          >
            {renderButton(0, "How to install?", "Follow our step-by-step installation guide provided with the product or watch the installation video on our website for a detailed walkthrough.")}
            {renderButton(1, "What is the Fork Stem Mount?", "The Fork Stem Mount is designed to be easily installed at the center of your motorcycle’s handlebars, allowing you to securely and steadily mount your device. It offers quick installation and maximum stability.")}
            {renderButton(2, "Why choose ProLock products?", "ProLock offers innovative, secure, and durable mounting solutions trusted by millions worldwide. Our products are designed for active lifestyles.")}
          </div>
          {/* Sağ Kolon */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "16px",
              width: "50%",
              height: "auto",
              padding: "24px",
              boxSizing: "border-box",
            }}
          >
            {renderButton(3, "How is ProLock different from others?", "ProLock stands out with its patented dual-stage locking mechanism, ensuring your device remains secure even in extreme conditions.")}
            {renderButton(4, "What advantages do we offer?", "Our products provide ease of use, versatility across devices and environments, and robust performance that ensures customer satisfaction.")}
            {renderButton(5, "Are ProLock products waterproof?", "Yes, all ProLock products are designed to be waterproof, making them suitable for use in various weather conditions.")}
          </div>
        </div>
      </div>

      {/* Footer Parent Container */}
      <div
        style={{
          width: "1416px",
          height: "960px",
          borderRadius: "24px",
          background: "white",
          boxSizing: "border-box",
          zIndex: 0,
          marginTop: "-500px",
        }}
      >
        <Footer />
      </div>
    </div>
  );
};

export default Faq;
