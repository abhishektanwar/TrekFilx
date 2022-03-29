import React from "react";
import CardSlider from "../../components/CardSlider";
import HeroBanner from '../../components/HeroBanner'
import VideoCard from "../../components/VideoCard";
import {v4 as uuid} from 'uuid'

const Home = () => {
  return (
    <div className="app-container">
      <HeroBanner />
      <div
        style={{ display: "flex", justifyContent: "space-around" }}
        className="margin-top-60"
      >

        <CardSlider heading="Featured Videos" />

      </div>
    </div>
  );
};

export default Home;
