import React from "react";
import HeroBanner from '../../components/HeroBanner'
import VideoCard from "../../components/VideoCard";
const Home = () => {
  return (
    <div className="app-container">
      {/* <img
        src={heroImage5}
        alt="hero-image"
        className="slider-image responsive-image image-container"
      /> */}
      <HeroBanner />
      <VideoCard />
    </div>
  );
};

export default Home;
