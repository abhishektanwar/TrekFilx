import React from "react";
import heroImage5 from "../../assets/images/hero-carousel/hero-image5.webp";
import utils from "../../utils";
import Button from "../Buttons/Button";
import { useNavigate } from "react-router-dom";
import "./hero-banner.css";

const HeroBanner = () => {
  const navigate = useNavigate();
  return (
    <div className="hero-image-container">
      <img
        src={utils.getImg("banner.webp")}
        alt="hero-image"
        className="hero-image responsive-image image-container"
      />
      <Button
        buttonText="Explore"
        buttonStyle="hero-image-btn"
        onClick={() => navigate("/explore")}
      />
    </div>
  );
};

export default HeroBanner;
