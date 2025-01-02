import React from "react";
import TextArea from "./TextArea";
import telefon2 from "../../assets/images/TELEFONN.svg"; // Telefon2 SVG dosyasını import ettik

const Page3Container = () => {
  return (
    <div
      className="inline-flex justify-end items-center relative"
      style={{
        width: "1386px",
        height: "751px",
        padding: "31px 32px 23px 32px",
        borderRadius: "32px",
        boxSizing: "border-box",
        background: "#FFF",
        position: "relative", // Child componentlerin konumlandırılması için
      }}
    >
      <TextArea />
      <img
        src={telefon2}
        alt="Telefon 2"
        style={{
          position: "absolute",
          top: "0px", // İstediğin konuma göre ayarla
          left: "727px", // İstediğin konuma göre ayarla
          width: "640px", // Genişlik (istediğin boyuta göre ayarla)
          height: "751px", // Oranları koruyarak yükseklik ayarlanır
        }}
      />
    </div>
  );
};

export default Page3Container;
