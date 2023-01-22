import React from "react";
import { useState } from "react";
import proLogo from "../assets/img/logoPro.png";
import "./Logos.css";

export default function Logos() {
  const logos = [proLogo, proLogo, proLogo, proLogo, proLogo];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(logos);

  const previous = () => {
    const condition = selectedIndex > 0;
    const nextIndex = condition ? selectedIndex - 1 : logos.length - 1;
    setSelectedImage(logos[nextIndex]);
    setSelectedIndex(nextIndex);
  };

  const next = () => {
    const condition = selectedIndex < logos.length - 1;
    const nextIndex = condition ? selectedIndex + 1 : 0;
    setSelectedImage(logos[nextIndex]);
    setSelectedIndex(nextIndex);
  };

  return (
    <div className="container-logo">
      <button className="button-style" onClick={previous}>
        {"<"}
      </button>
      {logos.map((logo, index) => (
        <div>
          <img
            className={`${index === selectedIndex ? "selected" : "logo"}`}
            src={logo}
            alt="No image"
          />
        </div>
      ))}
      <button className="button-style" onClick={next}>
        {">"}
      </button>
    </div>
  );
}
