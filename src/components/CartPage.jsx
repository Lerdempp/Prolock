import React from "react";
import { useSelector } from "react-redux";
import Footer from "./Footer2";
import CartItem from "./CartItem";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);

  // Sadece işaretli ürünlerin toplam fiyatını hesapla
  const totalAmount = cartItems
    .filter((item) => item.isChecked) // İşaretli ürünler
    .reduce((total, item) => total + item.price * item.quantity, 0);

  // Sadece işaretli ürünlerin toplam miktarını hesapla
  const totalItems = cartItems
    .filter((item) => item.isChecked) // İşaretli ürünler
    .reduce((count, item) => count + item.quantity, 0);

  return (
    <div
      className="max-w-[1440px] w-full bg-neutral-900 rounded-[32px] mx-auto"
      style={{
        boxSizing: "border-box",
        padding: "12px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "1416px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            minHeight: "683px",
            background: "#D7D7D7",
            borderRadius: "24px",
            padding: "153px 132px 91px 132px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "24px",
            boxSizing: "border-box",
          }}
        >
          {/* Ürün Listesi */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              flex: 1,
            }}
          >
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  caseText={item.case}
                  price={item.price}
                  image={item.image}
                  quantity={item.quantity}
                  isChecked={item.isChecked}
                />
              ))
            ) : (
              <p
                style={{
                  textAlign: "center",
                  color: "#292524",
                  fontSize: "16px",
                  fontFamily: "SF Pro Display",
                }}
              >
                Your cart is empty.
              </p>
            )}
          </div>

          {/* Sağdaki Alan */}
          <div
            style={{
              display: "flex",
              width: "270px",
              padding: "16px 12px 12px 12px",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "20px",
              borderRadius: "16px",
              background: "#FFF",
            }}
          >
            {/* Subtotal */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "12px",
                alignSelf: "stretch",
                padding: "12px",
                borderRadius: "16px",
                background: "#FFF",
              }}
            >
              <p
                style={{
                  alignSelf: "stretch",
                  color: "#000",
                  fontFamily: "SF Pro Display",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "16px",
                  letterSpacing: "-0.084px",
                }}
              >
                Subtotal ({totalItems})
              </p>

              <p
                style={{
                  alignSelf: "stretch",
                  color: "#000",
                  fontFamily: "SF Pro Display",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "20px",
                }}
              >
                ₺{totalAmount.toLocaleString("tr-TR")}
              </p>
            </div>

            {/* Buy Now Butonu */}
            <div
              style={{
                display: "flex",
                padding: "9px 12px",
                justifyContent: "center",
                alignItems: "center",
                gap: "4px",
                alignSelf: "stretch",
                borderRadius: "12px",
                background: "#EDFF00",
                cursor: "pointer",
              }}
            >
              <p
                style={{
                  color: "#000",
                  fontFamily: "SF Pro Display",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "24px",
                  letterSpacing: "-0.176px",
                }}
              >
                Buy Now
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            width: "100%",
            background: "white",
            borderRadius: "24px",
            marginTop: "500px",
          }}
        >
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
