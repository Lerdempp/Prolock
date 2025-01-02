import React from "react";

const Page5Container = () => {
  return (
    <div
      style={{
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "128px 185px",
        width: "1168px",
        height: "480px",
        borderRadius: "44px",
        background: "#E24F31",
        boxSizing: "border-box",
        position: "absolute",
        top: "1044px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {/* Alt container */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "40px",
          width: "798px",
          height: "224px",
          position: "relative",
        }}
      >
        {/* İlk Yazı */}
        <p
          style={{
            color: "#FFF",
            textAlign: "center",
            fontFamily: `"SF Pro Display"`,
            fontSize: "44px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "64px",
            position: "absolute",
            top: "0px",
          }}
        >
          We’re bringing accessibility to phones and financial services
        </p>

        {/* Form Container */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            width: "466px",
            height: "56px",
            position: "absolute",
            bottom: "0px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {/* Email Input */}
          <div
            style={{
              display: "flex",
              width: "320px",
              height: "56px",
              padding: "16px 24px",
              alignItems: "center",
              gap: "12px",
              borderRadius: "12px",
              border: "1px solid #FFF",
              boxSizing: "border-box",
            }}
          >
            <input
              type="email"
              placeholder="Email address"
              style={{
                width: "100%",
                border: "none",
                outline: "none",
                fontSize: "16px",
                fontFamily: `"SF Pro Display"`,
                fontWeight: "500",
                lineHeight: "24px",
                backgroundColor: "transparent",
                color: "#FFF",
              }}
            />
            <style>
              {`
                input:focus {
                  outline: none !important;
                  box-shadow: none !important;
                }
              `}
            </style>

          </div>

          {/* Subscribe Button */}
          <button
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "16px 32px",
              gap: "8px",
              borderRadius: "12px",
              background: "#771FFF", // Arka plan rengi
              color: "#FFF", // Yazı rengi
              fontFamily: `"SF Pro Display"`,
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "24px",
              textAlign: "right",
              border: "none",
              cursor: "pointer",
            }}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page5Container;
