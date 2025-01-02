import React from "react";
import global from "../assets/icons/global.svg"
import face from "../assets/icons/face.svg"
import insta from "../assets/icons/insta.svg"
import Twitter from "../assets/icons/Twitter.svg"

const Footer = () => {
  return (
    <div
      style={{
        width: "1420px",
        height: "550px",
        backgroundColor: "white",
        position: "absolute",
        bottom: "11px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#ffffff",
        textAlign: "center",
        borderRadius: "0px 0px 24px 24px",
      }}
    >
      {/* Newsletter alanı */}
      <div
        style={{
          position: "absolute",
          top: "76px",
          right: "92px",
          width: "466px",
          height: "239px",
          backgroundColor: "#ffffff",
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "flex-start",
          padding: "0",
        }}
      >
        <p
          style={{
            color: "var(--neutral-900, #171717)",
            textAlign: "right",
            fontFamily: "SF Pro Display",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "180%",
            margin: "0",
          }}
        >
          Learn about great deals and get personalized recommendations
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginTop: "24px",
            width: "100%",
          }}
        >
          <input
            type="email"
            placeholder="Email address"
            style={{
              flex: 1,
              padding: "16px 24px",
              borderRadius: "12px",
              border: "1px solid #E5E6EF",
              fontFamily: "SF Pro Display",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "24px",
              color: "#6B7280",
              outline: "none",
            }}
          />
          <style>
            {`
              input::placeholder {
                color: var(--Typography-Tertiary, #A0A3BD);
                font-family: 'SF Pro Display';
                font-size: 16px;
                font-style: normal;
                font-weight: 500;
                line-height: 24px;
              }
            `}
          </style>
          <button
            style={{
              padding: "16px 32px",
              backgroundColor: "#771FFF",
              borderRadius: "12px",
              color: "#ffffff",
              fontFamily: "SF Pro Display",
              fontSize: "16px",
              fontWeight: "500",
              lineHeight: "24px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Subscribe
          </button>
        </div>
 {/* Yeni yazı alanı */}
 <p
          style={{
            color: "var(--Typography-Tertiary, #A0A3BD)",
            fontFamily: "SF Pro Display",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "180%", // 28.8px
            position: "absolute",
            bottom: "0", // Alttan sıfır
            right: "0", // Sağdan sıfır
            margin: "0",
            textAlign: "right",
          }}
        >
          *by entering your e-mail address you confirming that you’re agree to subscribe to our newsletter.
        </p>
      </div>

      {/* Menü Container */}
      <div
        style={{
          width: "522px",
          height: "145px",
          flexShrink: 0,
          backgroundColor: "white",
          position: "absolute",
          bottom: "329px",
          left: "97px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          padding: "0 16px",
        }}
      >
        {/* 1. Kolon */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "8px",
          }}
        >
          <p
            style={{
              color: "var(--neutral-900, #171717)",
              fontFamily: "SF Pro Display",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "28px",
            }}
          >
            Our products
          </p>
          <p
            style={{
              color: "var(--neutral-500, #737373)",
              fontFamily: "SF Pro Display",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "28px",
            }}
          >
            Pro Lock H7
          </p>
          <p
            style={{
              color: "var(--neutral-500, #737373)",
              fontFamily: "SF Pro Display",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "28px",
            }}
          >
            Stem mount
          </p>
          <p
            style={{
              color: "var(--neutral-500, #737373)",
              fontFamily: "SF Pro Display",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "28px",
            }}
          >
            Accessories
          </p>
        </div>

        {/* 2. Kolon */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "8px",
          }}
        >
          <p
            style={{
              color: "var(--neutral-900, #171717)",
              fontFamily: "SF Pro Display",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "28px",
            }}
          >
            Services
          </p>
          <p
            style={{
              color: "var(--neutral-500, #737373)",
              fontFamily: "SF Pro Display",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "28px",
            }}
          >
            FAQ
          </p>
          <p
            style={{
              color: "var(--neutral-500, #737373)",
              fontFamily: "SF Pro Display",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "28px",
            }}
          >
            Contact
          </p>
        </div>

        {/* 3. Kolon */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "8px",
          }}
        >
          <p
            style={{
              color: "var(--neutral-900, #171717)",
              fontFamily: "SF Pro Display",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "28px",
            }}
          >
            QUADLOCK
          </p>
          <p
            style={{
              color: "var(--neutral-500, #737373)",
              fontFamily: "SF Pro Display",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "28px",
            }}
          >
            About
          </p>
          <p
            style={{
              color: "var(--neutral-500, #737373)",
              fontFamily: "SF Pro Display",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "28px",
            }}
          >
            Support
          </p>
        </div>
      </div>

        {/* Footer Alt Yazı */}
        <p
        style={{
          color: "var(--neutral-500, #737373)",
          fontFamily: "SF Pro Display",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "28px",
          position: "absolute",
          bottom: "49px", // Alttan boşluk
          left: "50%", // Ortala
          transform: "translateX(-50%)", // Tam ortalama
          textAlign: "center",
        }}
      >
        © 2024
      </p>
      {/* Social Media Icons Container */}
      <div
        style={{
          width: "273px",
          height: "32px",
          display: "inline-flex",
          alignItems: "center",
          gap: "24px",
          position: "absolute",
          bottom: "47px", // Alttan boşluk
          right: "47px", // Sağdan boşluk
        }}
      >
        {/* Global Icon */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <img src={global} alt="Global" style={{ width: "32px", height: "32px" }} />
          <p
            style={{
              color: "#6B7280", // Gri renk
              fontFamily: "SF Pro Display",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "24px",
            }}
          >
            Global
          </p>
        </div>

        {/* Divider */}
        <div
          style={{
            width: "1px",
            height: "100%",
            backgroundColor: "#E5E6EF", // Ayrım çizgisi rengi
          }}
        ></div>

        {/* Facebook Icon */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            backgroundColor: "#F9FAFB", // Arka plan rengi
          }}
        >
          <img src={face} alt="Facebook" style={{ width: "32px", height: "32px" }} />
        </div>

        {/* Instagram Icon */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            backgroundColor: "#F9FAFB",
          }}
        >
          <img src={insta} alt="Instagram" style={{ width: "32px", height: "32px" }} />
        </div>

        {/* Twitter Icon */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            backgroundColor: "#F9FAFB",
          }}
        >
          <img src={Twitter} alt="Twitter" style={{ width: "32px", height: "32px" }} />
        </div>
        </div>
    </div>
    
  );
};

export default Footer;
