import React from "react";

const BackgroundFill = () => {
  return (
    <div
      style={{
        width: "1420px",
        height: "409px",
        borderRadius: "24px 24px 0px 0px",
        background: "#FFF",
        marginLeft:"10px",
        marginTop:"80px",
        padding: "10px", // Inspect'teki padding değerlerini ekledim
        boxSizing: "border-box", // Padding ve border dahil
        display: "flex", // İçeriği yerleştirmek için esneklik sağlandı
        flexShrink: 0, // Boyutun küçülmesini önlemek için
      }}
    >
      {/* İçerik buraya gelecek */}
    </div>
  );
};

export default BackgroundFill;
