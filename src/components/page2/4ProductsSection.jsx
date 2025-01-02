import React from "react";
import { useNavigate } from "react-router-dom"; // React Router'dan useNavigate import ediliyor
import arrowRight from "../../assets/icons/arrow-right.svg";
import asdImage from "../../assets/images/UniversalAdaptor.svg";
import aImage from "../../assets/images/AltSayfa3/AltSayfa3-0.svg";
import BarrowRight from "../../assets/icons/beyaz-arrow-right.svg";

const ProductsSection = () => {
  const navigate = useNavigate(); // useNavigate hook'u tanımlanıyor

  const handleLeftExploreClick = () => {
    navigate("/UA"); // Sol butona tıklayınca yönlendirme yapılacak
    window.scrollTo(0, 0); // Sayfanın en üstüne kaydır
  };

  const handleRightExploreClick = () => {
    navigate("/OFM"); // Sağ butona tıklayınca yönlendirme yapılacak
    window.scrollTo(0, 0); // Sayfanın en üstüne kaydır
  };

  return (
    <div
      style={{
        width: "100%",
        height: "426px",
        display: "flex",
        justifyContent: "space-between",
        gap: "24px",
        borderRadius: "24px",
      }}
    >
      {/* Sol container */}
      <div
        style={{
          flex: "1 0 0",
          alignSelf: "stretch",
          padding: "20px",
          backgroundColor: "#F5F5F4",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          borderRadius: "320px 32px 32px 320px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "center",
            width: "315px",
            height: "426px",
            padding: "375px 200px 19px 16px",
            backgroundColor: "#4F46E5",
            borderRadius: "32px 0px 0px 32px",
            position: "absolute",
            left: "0px",
          }}
        >
          <img
            src={asdImage}
            alt="ASD"
            style={{
              width: "262px",
              height: "289px",
              position: "absolute",
              top: "89px",
              left: "310px",
            }}
          />
          <div
            style={{
              display: "flex",
              height: "28px",
              padding: "8px 23px",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#FAFAF9",
              borderRadius: "999px",
              position: "absolute",
              top: "16px",
              left: "16px",
            }}
          >
            <span
              style={{
                color: "var(--stone-950, #0C0A09)",
                fontFamily: "'SF Pro Display'",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "normal",
              }}
            >
              product
            </span>
          </div>
          <div
            style={{
              alignSelf: "stretch",
              position: "absolute",
              top: "55px",
              left: "16px",
            }}
          >
            <span
              style={{
                color: "var(--neutral-100, #F5F5F5)",
                fontFamily: "SF Pro Display",
                fontSize: "32px",
                fontWeight: "500",
                lineHeight: "normal",
              }}
            >
              Quadlock replacement adapter
            </span>
          </div>
          <div
            style={{
              alignSelf: "stretch",
              position: "absolute",
              top: "141px",
              left: "16px",
            }}
          >
            <span
              style={{
                color: "var(--neutral-200, #E5E5E5)",
                fontFamily: "SF Pro Display",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "normal",
              }}
            >
              1x color - 1x variants
            </span>
          </div>
          <div
            style={{
              alignSelf: "stretch",
              position: "absolute",
              top: "164px",
              left: "16px",
            }}
          >
            <span
              style={{
                color: "var(--neutral-200, #E5E5E5)",
                fontFamily: "SF Pro Display",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "normal",
              }}
            >
              ₺400
            </span>
          </div>
          <div
            style={{
              display: "flex",
              padding: "4px 8px 4px 12px",
              alignItems: "center",
              gap: "4px",
              backgroundColor: "var(--stone-50, #FAFAF9)",
              borderRadius: "37px",
              position: "absolute",
              bottom: "16px",
              left: "16px",
              cursor: "pointer", // Tıklanabilirlik için pointer ekleniyor
            }}
            onClick={handleLeftExploreClick} // Sol buton için tıklama olayı
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

      {/* Sağ container */}
      <div
        style={{
          flex: "1 0 0",
          alignSelf: "stretch",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          background: "#D6D3D1",
          borderRadius: "32px",
        }}
      >
        <img
          src={aImage}
          alt="ASD"
          style={{
            width: "516px",
            height: "571px",
            position: "absolute",
            top: "28px",
            right: "-280px",
            clipPath: "inset(0 280px 173px 0)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            width: "344px",
            height: "426px",
            padding: "20px",
            backgroundColor: "#4F46E5",
            borderRadius: "32px 0px 0px 32px",
            position: "absolute",
            left: "-10px",
            top: "0px",
          }}
        >
          <div
            style={{
              display: "flex",
              height: "28px",
              padding: "8px 23px",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "#FAFAF9",
              borderRadius: "999px",
              marginBottom: "16px",
            }}
          >
            <span
              style={{
                color: "var(--stone-950, #0C0A09)",
                fontFamily: "'SF Pro Display'",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "normal",
              }}
            >
              product
            </span>
          </div>
          <span
            style={{
              color: "var(--neutral-100, #F5F5F5)",
              fontFamily: "SF Pro Display",
              width: "268px",
              fontSize: "32px",
              fontWeight: "500",
              lineHeight: "normal",
              marginBottom: "8px",
            }}
          >
            Quadlock Out <br /> Front Pro
          </span>
          <span
            style={{
              color: "var(--neutral-200, #E5E5E5)",
              fontFamily: "SF Pro Display",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "normal",
              marginBottom: "8px",
            }}
          >
            1x color - 1x variants
          </span>
          <span
            style={{
              color: "var(--neutral-200, #E5E5E5)",
              fontFamily: "SF Pro Display",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "normal",
              marginBottom: "16px",
            }}
          >
            ₺400
          </span>
          <div
            style={{
              width: "99px",
              height: "32px",
              display: "flex",
              padding: "4px 8px 4px 12px",
              alignItems: "center",
              gap: "4px",
              backgroundColor: "var(--stone-800, #292524)",
              borderRadius: "37px",
              position: "absolute",
              bottom: "16px",
              left: "16px",
              cursor: "pointer", // Tıklanabilirlik için pointer ekleniyor
            }}
            onClick={handleRightExploreClick} // Sağ buton için tıklama olayı
          >
            <span
              style={{
                fontSize: "16px",
                fontWeight: "500",
                lineHeight: "normal",
                fontFamily: "'SF Pro Display', sans-serif",
                color: "var(--stone-50, #FAFAF9)",
              }}
            >
              explore
            </span>
            <img
              src={BarrowRight}
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
    </div>
  );
};

export default ProductsSection;
