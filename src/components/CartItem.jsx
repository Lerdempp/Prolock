import React from "react";
import { useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, toggleItemCheck } from "../features/cartSlice";
import check from "../assets/icons/Checkbox.svg";
import check2 from "../assets/icons/Checkbox2.svg";
import minus from "../assets/icons/eksi2.svg";
import plus from "../assets/icons/arti2.svg";

const CartItem = ({ id, name, caseText, price, image, quantity, isChecked }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseQuantity(id)); // Redux increaseQuantity aksiyonu
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity(id)); // Redux decreaseQuantity aksiyonu
  };

  const handleToggleCheckbox = () => {
    dispatch(toggleItemCheck(id)); // Redux toggleItemCheck aksiyonu
  };

  return (
    <div
      style={{
        width: "858px",
        height: "234px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        alignSelf: "stretch",
        borderRadius: "16px",
        background: "#FFF",
        boxShadow:
          "0px 0px 0px 1px rgba(143, 143, 143, 0.04), 0px 49px 14px 0px rgba(143, 143, 143, 0.00), 0px 32px 13px 0px rgba(143, 143, 143, 0.01), 0px 18px 11px 0px rgba(143, 143, 143, 0.02), 0px 8px 8px 0px rgba(143, 143, 143, 0.04), 0px 2px 4px 0px rgba(143, 143, 143, 0.05)",
      }}
    >
      {/* Üst Alan */}
      <div
        style={{
          marginTop: "24px",
          marginLeft: "24px",
          marginBottom: "24px",
          width: "810px",
          display: "flex",
          alignItems: "flex-start",
          gap: "32px",
          alignSelf: "stretch",
        }}
      >
        {/* Checkbox ve Görsel */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "20px",
            flex: "1 0 0",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "24px",
            }}
          >
            <img
              src={isChecked ? check : check2}
              alt="checkbox"
              style={{
                width: "24px",
                height: "24px",
                cursor: "pointer",
              }}
              onClick={handleToggleCheckbox} // Redux aksiyonu
            />
            <div
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "14.4px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "120px",
                  height: "120px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "1.8px",
                  flexShrink: 0,
                  borderRadius: "3.102px",
                  background: "#E7E6E6",
                }}
              >
                <img
                  src={image}
                  alt=""
                  style={{
                    marginTop: "13px",
                    marginLeft: "13px",
                    width: "93px",
                    height: "93px",
                  }}
                />
              </div>
            </div>
          </div>
          {/* Ürün Bilgileri */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "12px",
              flex: "1 0 0",
            }}
          >
            <p
              style={{
                alignSelf: "stretch",
                color: "#000",
                fontFamily: "SF Pro Display",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "32px",
              }}
            >
              {name}
            </p>
            <p
              style={{
                alignSelf: "stretch",
                color: "#737373",
                fontFamily: "SF Pro Display",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
              }}
            >
              {caseText}
            </p>
          </div>
        </div>

        {/* Miktar ve Fiyat */}
        <div
          style={{
            display: "flex",
            width: "72px",
            height: "27px",
            padding: "4px",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: "32px",
            background: "#EDFF00",
          }}
        >
          <img
            src={minus}
            alt="Minus"
            style={{
              width: "16px",
              height: "16px",
              flexShrink: 0,
              cursor: "pointer",
            }}
            onClick={handleDecrease}
          />
          <p
            style={{
              textAlign: "center",
              color: "#000",
              fontFamily: "SF Pro Display",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
              letterSpacing: "-0.64px",
            }}
          >
            {quantity}
          </p>
          <img
            src={plus}
            alt="Plus"
            style={{
              width: "16px",
              height: "16px",
              flexShrink: 0,
              cursor: "pointer",
            }}
            onClick={handleIncrease}
          />
        </div>
      </div>

      {/* Alt Alan */}
      <div
        style={{
          width: "858px",
          height: "56px",
          display: "flex",
          padding: "16px 24px",
          justifyContent: "space-between",
          alignItems: "center",
          alignSelf: "stretch",
          borderTop: "1px solid var(--neutral-300, #D4D4D4)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <p
            style={{
              color: "var(--neutral-500, #737373)",
              fontFamily: "SF Pro Display",
              fontSize: "16px",
              fontWeight: "500",
              lineHeight: "24px",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Remove
          </p>
        </div>
        <p
          style={{
            textAlign: "center",
            color: "#000",
            fontFamily: "SF Pro Display",
            fontSize: "20px",
            fontWeight: "500",
            lineHeight: "20px",
            letterSpacing: "-0.12px",
          }}
        >
          ₺{isChecked ? price * quantity : price * quantity} {/* Subtotal'deki fiyat daima güncellenir */}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
