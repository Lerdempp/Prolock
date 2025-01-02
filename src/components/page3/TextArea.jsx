import React from "react";

const TextArea = () => {
  return (
    <div
      className="flex flex-col items-start gap-6"
      style={{
        width: "698px", 
        padding: "0",
        position: "absolute",
        top: "237px",
        left: "186px",
        color: "#0A0A0A",
        boxSizing: "border-box",
      }}
    >
      <p
        style={{
          color: "#0A0A0A",
          fontFamily: "'SF Pro Display', sans-serif",
          fontSize: "56px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "64px",
          letterSpacing: "-0.56px",
          margin: "0", 
          width: "565px", 
          whiteSpace: "normal", 
        }}
      >
        Revolutionizing rides, securing smart <br /> journeys
      </p>
      <p
        style={{
          color: "#404040",
          fontFamily: "'SF Pro Display', sans-serif",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "24px",
          letterSpacing: "-0.176px",
          width: "596px", 
          whiteSpace: "normal",
          marginTop: "10px", 
        }}
      >
        Precision mounts for secure, accessible devices on any ride.
      </p>
    </div>
  );
};

export default TextArea;
