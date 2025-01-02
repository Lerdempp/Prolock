import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Yönlendirme için hook
import gidon from "../../assets/images/UniversalAdaptor.svg"; // Ürün görseli
import favIcon from "../../assets/images/fav.svg"; // Favori simgesi
import starIcon from "../../assets/icons/star.svg"; // Yıldız simgesi

const Card1 = () => {
  const [showNotification, setShowNotification] = useState(false); // Bildirim durumu
  const navigate = useNavigate(); // Yönlendirme için hook

  const handleImageClick = () => {
    navigate("/UA"); // Yönlendirme yapılacak rota
  };

  const handleFavClick = () => {
    setShowNotification(true); // Bildirimi göster
    setTimeout(() => {
      setShowNotification(false); // 2 saniye sonra bildirimi gizle
    }, 2000);
  };

  const handleTextClick = () => {
    navigate("/UA"); // Yazıya tıklama ile yönlendirme
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        gap: "16px",
        width: "269px",
        height: "285px",
        padding: "24px",
        borderRadius: "30px",
        backgroundColor: "#FFFFFF",
        position: "relative",
      }}
    >
      {/* Ürün Görseli ve Favori Simgesi Container */}
      <div
        style={{
          position: "absolute",
          top: "-87px",
          left: "24px",
          width: "221px",
          padding: "24px",
          borderRadius: "32px",
          backgroundColor: "#F6F6F8",
        }}
      >
        {/* Ürün Görseli */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4px",
            cursor: "pointer", // Tıklanabilir olduğunu göstermek için
          }}
          onClick={handleImageClick} // Yalnızca ürün görselinde yönlendirme
        >
          <div
            style={{
              width: "150px",
              height: "202px",
              flexShrink: 0,
              backgroundImage: `url(${gidon})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              boxShadow: "0px 55px 15px 0px rgba(0, 0, 0, 0)",
            }}
          ></div>
        </div>

        {/* Favori Simgesi */}
        <div
          style={{
            position: "absolute",
            top: "16px",
            right: "17px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "32px",
            height: "32px",
            padding: "4px",
            borderRadius: "50%",
            background: "linear-gradient(180deg, #FD2442 0%, #DD5E6F 100%)",
            boxShadow:
              "0px 26px 7px 0px rgba(234, 93, 111, 0.00), 0px 17px 7px 0px rgba(234, 93, 111, 0.04), 0px 9px 6px 0px rgba(234, 93, 111, 0.13), 0px 4px 4px 0px rgba(234, 93, 111, 0.21), 0px 1px 2px 0px rgba(234, 93, 111, 0.25)",
            cursor: "pointer", // Tıklanabilir olduğunu göstermek için
          }}
          onClick={handleFavClick} // Favori simgesine tıklama
        >
          <img
            src={favIcon}
            alt="Favorite Icon"
            style={{
              width: "24px",
              height: "24px",
            }}
          />
        </div>
      </div>

      {/* Ürün Bilgileri */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          gap: "12px",
          alignSelf: "stretch",
        }}
      >
        {/* 1. Child Container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "8px",
            alignSelf: "stretch",
          }}
        >
          <p
            style={{
              color: "var(--neutral-400, #A3A3A3)",
              fontFamily: "'SF Pro Display', sans-serif",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "normal",
            }}
          >
            Case
          </p>
          <p
            style={{
              color: "#000",
              fontFamily: "'SF Pro Display', sans-serif",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "normal",
              cursor:"pointer",
            }}
            onClick={handleTextClick}
          >
            Universal Adapter
          </p>
        </div>

        {/* 2. Child Container */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            alignSelf: "stretch",
          }}
        >
          <p
            style={{
              color: "#000",
              fontFamily: "'SF Pro Display', sans-serif",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "normal",
              flex: "1 0 0",
            }}
          >
            ₺3200
          </p>
          <img
            src={starIcon}
            alt="Star Icon"
            style={{
              width: "26px",
              height: "26px",
              flexShrink: 0,
            }}
          />
          <p
            style={{
              color: "#000",
              fontFamily: "'SF Pro Display', sans-serif",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "normal",
            }}
          >
            4.8
          </p>
        </div>
      </div>

      {/* Bildirim */}
      {showNotification && (
        <div
          style={{
            position: "absolute",
            bottom: "16px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#000",
            color: "#fff",
            padding: "8px 16px",
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          Favladınız!
        </div>
      )}
    </div>
  );
};

export default Card1;
