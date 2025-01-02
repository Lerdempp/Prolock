import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/page1/HeroSection";
import ImageSlide1 from "./components/page1/ImageSlide1";
import ImageSlide2 from "./components/page1/ImageSlide2";
import Background from "./components/Background";
import ProductSection from "./components/page2/ProductSection";
import Page3Container from "./components/page3/Page3Container";
import Page4Container from "./components/page4/Page4Container";
import Page5Container from "./components/page5/Page5Container";
import BackgroundFill from "./components/BackgroundFill";
import Footer from "./components/Footer";
import AltSayfa1 from "./components/alt-sayfalar/ForkStemMount/altsayfa";
import AltSayfa2 from "./components/alt-sayfalar/Adapter/altsayfaAdapter";
import AltSayfa3 from "./components/alt-sayfalar/OutFrontPro/altsayfaOutFrontPro";
import AltSayfa4 from "./components/alt-sayfalar/Dampener/altsayfaDampener";
import AltSayfa5 from "./components/alt-sayfalar/Scooter/altsayfaSMM";
import AltSayfa6 from "./components/alt-sayfalar/Handlebar/altsayfaHandlebar";
import AltSayfa7 from "./components/alt-sayfalar/ExtentionPro/altsayfaExtentionPro";
import AltSayfa8 from "./components/alt-sayfalar/Extention/altsayfaExtention";
import Navbar from "./components/page1/Navbar";
import Products from "./components/products/Products";
import Faq from "./components/Faq";
import CartPage from "./components/CartPage";
import CartContainer from "./components/CartContainer"; 

function App() {
  const slides = [ImageSlide1, ImageSlide2];

  // Sepet durumu için state tanımlandı
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Sepeti açıp kapatmak için toggle fonksiyonu
  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  const MainLayout = () => (
    <>
      {/* Siyah Arka Plan */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <Background />
      </div>

      {/* HeroSection */}
      <div
        style={{
          padding: "12px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <HeroSection slides={slides} />
      </div>

      {/* Product Section */}
      <div
        id="product-section"
        style={{
          padding: "32px 144px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <ProductSection />
      </div>

      {/* Page3 Section */}
      <div
        style={{
          marginTop: "64px",
          padding: "32px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Page3Container />
      </div>

      {/* Page4 ve Page5 Section */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Page4Container />
        <Page5Container />
        <BackgroundFill />
      </div>

      {/* Footer */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          marginTop: "calc(32px + 475px)",
        }}
      >
        <Footer />
      </div>
    </>
  );

  return (
    <Router>
      <div
        style={{
          width: "1440px",
          height: "auto",
          margin: "0 auto",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Navbar */}
        <div
          style={{
            position: "absolute",
            top: "13px",
            left: "0px",
            right: "0",
            zIndex: "10",
          }}
        >
          <Navbar toggleCart={toggleCart} /> {/* toggleCart Navbar'a prop olarak gönderildi */}
        </div>

        {/* CartContainer (Navbar'dan bağımsız, sayfanın herhangi bir yerinde açılır) */}
        {isCartOpen && (
          <div
            style={{
              position: "fixed",
              top: "80px", // Navbar'ın altında görünmesi için
              right: "20px", // Sağ tarafa hizalı
              zIndex: "1000",
            }}
          >
            <CartContainer />
          </div>
        )}

        {/* Routes */}
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/products" element={<Products />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/FSM" element={<AltSayfa1 />} />
          <Route path="/UA" element={<AltSayfa2 />} />
          <Route path="/OFM" element={<AltSayfa3 />} />
          <Route path="/VD" element={<AltSayfa4 />} />
          <Route path="/SMM" element={<AltSayfa5 />} />
          <Route path="/HBM" element={<AltSayfa6 />} />
          <Route path="/EAP" element={<AltSayfa7 />} />
          <Route path="/EA" element={<AltSayfa8 />} />
          <Route path="/CP" element={<CartPage />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
