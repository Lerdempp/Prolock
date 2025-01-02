import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import resim from "../assets/images/AltSayfa1/AltSayfa1-0.svg";
import minus from "../assets/icons/eksi2.svg";
import plus from "../assets/icons/arti2.svg";

const CartContainer = () => {
  const [quantity, setQuantity] = useState(1); // Başlangıç miktarı
  const [isVisible, setIsVisible] = useState(true); // Görünürlük durumu
  const navigate = useNavigate(); // React Router navigate fonksiyonu

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1); // Miktarı artır
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1); // Miktarı azalt
    }
  };

  const handleGoToCart = () => {
    setIsVisible(false); // CartContainer'ı gizle
    navigate("/CP"); // Yönlendirme işlemi
  };

  // Eğer isVisible false ise, CartContainer'ı render etme
  if (!isVisible) {
    return null;
  }

  return (
    <div
      style={{
        marginRight: "120px",
        marginTop: "20px",
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "flex-start",
        borderRadius: "16px",
        width: "444px",
        height: "auto",
        overflow: "hidden",
        background: "#FFF",
      }}
    >
      {/* 1.child */}
      <div
        style={{
          display: "flex",
          padding: "24px",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "24px",
          width: "444px",
          height: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "396px",
            height: "64px",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "63.256px",
              height: "64px",
              padding: "8px 7.256px 8px 8px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: 0,
              borderRadius: "8px",
              background: "#D7D7D7",
            }}
          >
            <img
              src={resim}
              alt="resim"
              style={{
                width: "48px",
                height: "48px",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              height: "48px",
              width: "237px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "10px",
            }}
          >
            <span
              style={{
                color: "#0C0A09",
                fontFamily: '"SF Pro Display"',
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "24px",
                letterSpacing: "-0.176px",
                alignSelf: "stretch",
              }}
            >
              Vibration Dampener
            </span>
            <span
              style={{
                color: "#171717",
                fontFamily: '"SF Pro Display"',
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "24px",
                letterSpacing: "-0.176px",
                alignSelf: "stretch",
              }}
            >
              3200₺
            </span>
          </div>
          <div
            style={{
              background: "#EDFF00",
              display: "flex",
              width: "72px",
              height: "27px",
              padding: "4px",
              justifyContent: "space-between",
              alignItems: "center",
              flexShrink: 0,
              borderRadius: "32px",
            }}
          >
            <img
              src={minus}
              alt="minus"
              onClick={handleDecrease}
              style={{
                width: "16px",
                height: "16px",
                flexShrink: 0,
                cursor: "pointer",
              }}
            />
            <span
              style={{
                color: "#000",
                fontFamily: '"SF Pro Display"',
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
                letterSpacing: "-0.64px",
              }}
            >
              {quantity}
            </span>
            <img
              src={plus}
              alt="plus"
              onClick={handleIncrease}
              style={{
                width: "16px",
                height: "16px",
                flexShrink: 0,
                cursor: "pointer",
              }}
            />
          </div>
        </div>
      </div>
      {/* 2.child */}
      <div
        style={{
          width: "444px",
          height: "68px",
          display: "flex",
          alignItems: "flex-start",
          alignSelf: "stretch",
          borderTop: "1px solid var(--neutral-300, #D4D4D4)",
          backgroundColor: "blue",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "222px",
            height: "68px",
            padding: "10px 24px",
            alignItems: "center",
            backgroundColor: "#FFF",
            borderRight: "1px solid var(--neutral-300, #D4D4D4)",
            boxSizing: "border-box",
            borderRadius: "0 0 0 16px",
            flexDirection: "column",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          <span
            style={{
              color: "#000",
              fontFamily: '"SF Pro Display"',
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "20px",
              letterSpacing: "-0.084px",
              alignSelf: "stretch",
            }}
          >
            Subtotal ({quantity} item):
          </span>

          <span
            style={{
              color: "#000",
              fontFamily: '"SF Pro Display"',
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "20px",
              letterSpacing: "-0.12px",
              alignSelf: "stretch",
            }}
          >
            {quantity * 3200}₺
          </span>
        </div>

        <div
          style={{
            display: "flex",
            width: "222px",
            height: "68px",
            padding: "10px 12px",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#EDFF00",
            boxSizing: "border-box",
            borderRadius: "0 0 16px 0",
            cursor: "pointer",
          }}
          onClick={handleGoToCart}
        >
          <span
            style={{
              color: "#000",
              fontFamily: '"SF Pro Display"',
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "24px",
              letterSpacing: "-0.176px",
            }}
          >
            Go to cart
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartContainer;
