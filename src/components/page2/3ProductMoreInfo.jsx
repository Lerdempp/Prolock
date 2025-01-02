import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate import edildi
import arrowRight from "../../assets/icons/arrow-right.svg";
import gidonImage from "../../assets/images/gidon.svg";

const ProductMoreInfo = () => {
  const navigate = useNavigate(); // useNavigate hook'u tanımlandı

  const handleExploreClick = () => {
    navigate("/FSM"); // Yönlendirme yapılacak sayfa
    window.scrollTo(0, 0); // Yönlendirmeden sonra sayfanın en üstüne kaydır
  };

  return (
    <div
      style={{
        height: "389px",
        alignSelf: "stretch",
        borderRadius: "20px",
        backgroundColor: "var(--stone-300, #D6D3D1)",
        position: "relative", // Konumlandırma için gerekli
        overflow: "hidden",
      }}
    >
      {/* Gallery Container */}
      <div
        style={{
          display: "inline-flex",
          height: "389px",
          width: "567px",
          padding: "323px 27px 16px 16px",
          alignItems: "center",
          flexShrink: 0,
          backgroundColor: "#E24F31",
          boxSizing: "border-box",
          borderRadius: "19px 0 0 19px",
          position: "relative",
        }}
      >
        {/* Sol Üstte Product Info Container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "18px",
            width: "354px",
            height: "140px",
            padding: "16px",
            position: "absolute", // Container'ı konumlandırmak için
            top: "16px", // Üstten mesafe
            left: "16px", // Soldan mesafe
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
              borderRadius: "999px", // Yuvarlak köşeler
              backgroundColor: "var(--neutral-800, #262626)", // Arka plan rengi
              position: "absolute", // Konumlandırmak için
              top: "0px", // Üstten 0px boşluk
              left: "0px", // Soldan 0px boşluk
            }}
          >
            <span
              style={{
                color: "var(--stone-50, #FAFAF9)",
                fontFamily: "SF Pro Display",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
              }}
            >
              product
            </span>
          </div>
          <span
            style={{
              color: "var(--stone-50, #FAFAF9)",
              fontFamily: "SF Pro Display",
              fontSize: "32px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "normal",
              position: "absolute",
              top: "46px",
              left: "0px",
            }}
          >
            Pro Lock H7.
          </span>
          <span
            style={{
              color: "var(--stone-50, #FAFAF9)",
              width: "179px",
              fontFamily: "SF Pro Display",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
              position: "absolute",
              top: "96px",
              left: "0px",
            }}
          >
            2x color - 2x variants
          </span>
          <span
            style={{
              color: "var(--stone-50, #FAFAF9)",
              width: "162px",
              fontFamily: "SF Pro Display",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
              position: "absolute",
              top: "121px",
              left: "0px",
            }}
          >
            ₺3200
          </span>
        </div>

        {/* Product Feature Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            width: "100%",
            position: "relative",
          }}
        >
          {/* Text Area */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              alignItems: "flex-start",
              margin: 0,
            }}
          >
            <span
              style={{
                textAlign: "left",
                color: "var(--stone-50, #FAFAF9)",
                fontFamily: "'SF Pro Display', sans-serif",
                fontSize: "12px",
                fontWeight: "500",
                fontStyle: "normal",
                lineHeight: "normal",
              }}
            >
              Safe, Robust, Controllable
            </span>
            <span
              style={{
                textAlign: "left",
                color: "var(--stone-50, #FAFAF9)",
                fontFamily: "'SF Pro Display', sans-serif",
                fontSize: "12px",
                fontWeight: "400",
                fontStyle: "normal",
                lineHeight: "normal",
              }}
            >
              We have designed it in the most robust way by giving importance to{" "}
              <br /> your comfort.
            </span>
          </div>

          {/* Explore Link Container */}
          <div
            style={{
              display: "flex",
              padding: "4px 8px 4px 12px",
              alignItems: "center",
              gap: "4px",
              borderRadius: "37px",
              backgroundColor: "var(--stone-50, #FAFAF9)",
              position: "absolute",
              top: "50%",
              right: "27px",
              transform: "translateY(-50%)",
              cursor: "pointer", // Tıklanabilirlik için cursor pointer
            }}
            onClick={handleExploreClick} // Tıklama olayında yönlendirme
          >
            <span
              style={{
                fontSize: "16px",
                fontWeight: "500",
                lineHeight: "normal",
                fontFamily: "'SF Pro Display', sans-serif",
                color: "var(--stone-900, #292524)",
              }}
            >
              explore
            </span>
            <img
              src={arrowRight}
              alt="Arrow Right"
              style={{
                width: "16px",
                height: "16px",
                flexShrink: 0,
                marginLeft: "8px",
              }}
            />
          </div>
        </div>
      </div>
      <div>
        {/* Diğer bileşenler */}
        <img
          src={gidonImage}
          alt="Gidon"
          style={{
            width: "506px",
            height: "787px",
            flexShrink: 0,
            position: "absolute",
            top: "-70px",
            right: "34px",
          }}
        />
      </div>
    </div>
  );
};

export default ProductMoreInfo;
