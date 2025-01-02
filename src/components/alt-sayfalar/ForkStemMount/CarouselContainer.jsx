import React, { useState } from "react";

// SVG dosyalarını doğrudan import ediyoruz
import AltSayfa1_0 from "../../../assets/images/AltSayfa1/altgidon.svg";
import AltSayfa1_1 from "../../../assets/images/AltSayfa1/AltSayfa1-1.svg";
import AltSayfa1_2 from "../../../assets/images/AltSayfa1/AltSayfa1-2.svg";
import AltSayfa1_3 from "../../../assets/images/AltSayfa1/AltSayfa1-3.svg";
import AltSayfa1_4 from "../../../assets/images/AltSayfa1/AltSayfa1-4.svg";
import AltSayfa1_5 from "../../../assets/images/AltSayfa1/AltSayfa1-5.svg";

const CarouselContainer = () => {
  // Büyük resmi seçmek için state
  const [selectedImage, setSelectedImage] = useState(AltSayfa1_0);

  // Küçük resimlerin URL'leri
  const smallImages = [AltSayfa1_0, AltSayfa1_1, AltSayfa1_2, AltSayfa1_3, AltSayfa1_4, AltSayfa1_5];

  // Küçük resimlerin listesini filtreliyoruz (seçili resim hariç)
  const filteredImages = smallImages.filter((image) => image !== selectedImage);

  // Küçük resme tıklandığında büyük resmi değiştirmek için fonksiyon
  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignSelf: "stretch",
        width: "564px", // Mavi container genişliği
        boxSizing: "border-box",
        position: "absolute", // Konumu kırmızı alanın içinde sabitlemek için
        top: "0", // Kırmızı alanın üst kısmına
        left: "0", // Kırmızı alanın sol kısmına
      }}
    >
      {/* Mavi Alan */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "619px", // Mavi container yüksekliği
          width: "100%",
          background: "#E7E6E6", // Mavi arka plan
          borderRadius: "16px",
        }}
      >
        {/* Büyük Resim */}
        <img
          src={selectedImage} // Seçilen resim
          alt="Büyük resim"
          style={{
            width: selectedImage === AltSayfa1_0 ? "484px" : "100%", // altgidon.svg için özel genişlik
            height: selectedImage === AltSayfa1_0 ? "560px" : "100%", // altgidon.svg için özel yükseklik
            objectFit: "cover",
            padding: "24px",
          }}
        />
      </div>

      {/* Küçük Resimler Container */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
          marginTop: "12px", // Mavi alan ile küçük resimler arasında boşluk
        }}
      >
        {/* Filtrelenmiş küçük resimler */}
        {filteredImages.map((image, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "101px",
              height: "89px",
              borderRadius: "16px",
              background: "#E7E6E6",
              cursor: "pointer", // Tıklanabilir yapıyoruz
            }}
            onClick={() => handleImageClick(image)} // Küçük resme tıklanınca büyük resmi değiştir
          >
            <img
              src={image} // Küçük resim URL'si
              alt={`Küçük Resim ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "16px",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselContainer;