import React from "react";

const Background = () => {
  return (
    <div
      style={{
        width: "1440px",
        height: "5915px",
        backgroundColor: "#171717", // Siyah arka plan rengi
        borderRadius: "32px", // Köşe yuvarlama
        position: "absolute", // Tam oturması için
        top: 0,
        left: 0,
      }}
    ></div>
  );
};

export default Background;
