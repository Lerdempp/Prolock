import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import cartIcon from "../../assets/icons/add-to-basket.svg";
import Logo from "../../assets/images/logo.jpg";

const Navbar = ({ toggleCart }) => {
  const [activeButton, setActiveButton] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    if (buttonName === "Home") {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (buttonName === "Products") {
      navigate("/products");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (buttonName === "FAQ") {
      navigate("/faq");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex items-center justify-between p-[17px_137px_0_123px] ${
        isScrolled ? "" : "bg-transparent"
      } transition-all duration-300 fixed top-[15px] left-0 right-0 z-50`}
      style={{
        height: "72px",
      }}
    >
      {/* Logo */}
      <img src={Logo} alt="Logo" className="w-[50px] h-[50px]" />

      {/* Menü Öğeleri */}
      <div
        className="flex items-center gap-[6px] p-[6px] rounded-full bg-[var(--neutral-100,#F5F5F5)]"
        style={{
          width: "auto",
          minWidth: "312px",
          height: "48px",
        }}
      >
        {["Home", "Products", "FAQ"].map((buttonName) => (
          <button
            key={buttonName}
            onClick={() => handleButtonClick(buttonName)}
            className={`px-4 py-2 rounded-[16px] transition-colors duration-300 ${
              activeButton === buttonName
                ? "bg-custom-yellow text-stone-800"
                : "bg-transparent text-stone-500"
            } hover:text-stone-800 font-inter text-[14px] font-medium normal-case flex-grow`}
          >
            {buttonName}
          </button>
        ))}
      </div>

      {/* Sepet Simgesi */}
      <div
        className="flex justify-center items-center rounded-full gap-[8px] cursor-pointer"
        style={{
          width: "70px",
          height: "52px",
          backgroundColor: "#EDFF00",
        }}
        onClick={toggleCart} // Sepet simgesine tıklanınca toggleCart çağrılır
      >
        <img src={cartIcon} alt="Cart" className="w-[32px] h-[32px]" />
      </div>
    </div>
  );
};

export default Navbar;
