import React from "react";
import ellipse4051 from "../../../assets/icons/Ellipse4051.svg";
import EasyAttachIcon from "../../../assets/icons/EasyAttachIcon.svg";
import StrongSecureIcon from "../../../assets/icons/StrongSecureIcon.svg";
import WorldwideShippingIcon from "../../../assets/icons/WorldwideShippingIcon.svg";
import OptimalViewingIcon from "../../../assets/icons/OptimalViewingIcon.svg";

const UrunBilgileri = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "28px",
        width: "564px",
        position: "absolute",
        top: "0",
        right: "0",
      }}
    >
      {/* 1. Container */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "16px",
          alignSelf: "stretch",
          width: "564px",
          boxSizing: "border-box",
        }}
      >
        {/* Başlık ve Fiyat */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            alignSelf: "stretch",
            width: "564px",
            height: "38px",
          }}
        >
          <span
            style={{
              color: "var(--stone-800, #292524)",
              fontFamily: '"SF Pro Display"',
              fontSize: "32px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "normal",
            }}
          >
            Universal Adapter
          </span>
          <span
            style={{
              color: "var(--stone-950, #0C0A09)",
              textAlign: "center",
              fontFamily: '"SF Pro Display"',
              fontSize: "32px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal",
            }}
          >
            ₺3200
          </span>
        </div>

        {/* Cases ve Butonlar */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "8px",
            alignSelf: "stretch",
          }}
        >
          <span
            style={{
              color: "var(--stone-600, #57534E)",
              fontFamily: '"SF Pro Display"',
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "24px",
              alignSelf: "stretch",
            }}
          >
            Cases
          </span>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {/* Pro Butonu */}
            <div
              style={{
                display: "flex",
                height: "48px",
                padding: "6px 12px",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "8px",
                background: "#000",
              }}
            >
              <span
                style={{
                  color: "#FFF",
                  fontFamily: '"SF Pro Display"',
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "normal",
                }}
              >
                Universal Adapter
              </span>
            </div>

                   </div>
        </div>
      </div>

      {/* 2. Container */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "20px",
          alignSelf: "stretch",
          width: "564px",
        }}
      >
        {/* Add to card* bölümü */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "12px 0px",
            borderRadius: "12px",
            background: "#EDFF00",
            alignSelf: "stretch",
          }}
        >
          <span
            style={{
              color: "#292524",
              fontFamily: '"SF Pro Display"',
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal",
            }}
          >
            Add to cart*
          </span>
        </div>

        {/* Alt yazılar */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "12px",
            alignSelf: "stretch",
            width: "564px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              width: "326px",
              height: "19px",
            }}
          >
            <img
              src={ellipse4051}
              alt="Ellipse 4051"
              style={{
                width: "12px",
                height: "12px",
              }}
            />
            <span
              style={{
                color: "#000",
                fontFamily: '"SF Pro Display"',
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "normal",
              }}
            >
              Designed and manufactured by Pro Lock H7
            </span>
          </div>
          <span
          style={{
            color: "#000", // Siyah renk
            fontFamily: '"SF Pro Display"', // Yazı tipi
            fontSize: "16px", // Font boyutu
            fontStyle: "normal", // Normal yazı stili
            fontWeight: "400", // Genel yazı kalınlığı
            lineHeight: "normal", // Satır yüksekliği normal
          }}
        >
          <span style={{ fontWeight: "600" }}>
            *Our Pro Lock H7 Universal Adaptors
          </span>{" "}
          feature a secure locking mechanism compatible with all twist and lock mounts
          and can be directly adhered to phones, cases, and most flat metal or plastic
          surfaces.
        </span>

        </div>
      </div>

      {/* 3. Container */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "16px",
          alignSelf: "stretch",
          width: "564px",
        }}
      >
        {/* 3. Container'ın 1. Child'ı */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            alignSelf: "stretch",
            width: "564px",
            height: "48px",
          }}
        >
          {/* 1. Buton */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "12px",
              gap: "4px",
              flex: "1 0 0",
              borderRadius: "38px",
              background: "#FFF",
            }}
          >
            <img
              src={EasyAttachIcon}
              alt="Easy attach / detach"
              style={{
                width: "16px",
                height: "16px",
              }}
            />
            <span
              style={{
                color: "#000",
                fontFamily: '"SF Pro Display"',
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "normal",
              }}
            >
              Easy attach / detach
            </span>
          </div>

          {/* 2. Buton */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "12px",
              gap: "4px",
              flex: "1 0 0",
              borderRadius: "38px",
              background: "#FFF",
            }}
          >
            <img
              src={StrongSecureIcon}
              alt="Strong & Secure"
              style={{
                width: "16px",
                height: "16px",
              }}
            />
            <span
              style={{
                color: "#000",
                fontFamily: '"SF Pro Display"',
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "normal",
              }}
            >
              Strong & Secure
            </span>
          </div>
        </div>
 {/* 3. Container'ın 2. Row'u */}
 <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            alignSelf: "stretch",
            width: "564px",
            height: "48px",
          }}
        >
          {/* Worldwide Shipping Button */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "12px",
              gap: "4px",
              flex: "1 0 0",
              borderRadius: "38px",
              background: "#FFF",
            }}
          >
            <img
              src={WorldwideShippingIcon}
              alt="Worldwide shipping"
              style={{
                width: "16px",
                height: "16px",
              }}
            />
            <span
              style={{
                color: "#000",
                fontFamily: '"SF Pro Display"',
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "normal",
              }}
            >
              Worldwide shipping
            </span>
          </div>

          {/* Optimal Viewing Angle Button */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "12px",
              gap: "4px",
              flex: "1 0 0",
              borderRadius: "38px",
              background: "#FFF",
            }}
          >
            <img
              src={OptimalViewingIcon}
              alt="Optimal viewing angle"
              style={{
                width: "16px",
                height: "16px",
              }}
            />
            <span
              style={{
                color: "#000",
                fontFamily: '"SF Pro Display"',
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "normal",
              }}
            >
              Optimal viewing angle
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrunBilgileri;
