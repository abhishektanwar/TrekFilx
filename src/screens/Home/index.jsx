import React from "react";
import CardSlider from "../../components/CardSlider";
import HeroBanner from '../../components/HeroBanner'
import VideoCard from "../../components/VideoCard";
import {v4 as uuid} from 'uuid'
import { useVideoListing } from "../../Contexts/VideoListingContext";

const Home = () => {
  const {videoListingState} = useVideoListing();
  const {videos} = videoListingState;
  const featuredVideos = videos.filter(video => video.featured);
  console.log("videoListingState",videoListingState)
  return (
    <div className="app-container">
      <HeroBanner />
      <div
        style={{ display: "flex", justifyContent: "space-around" }}
        className="margin-top-60"
      >

        <CardSlider heading="Featured Videos" videos={featuredVideos} />

      </div>
    </div>
  );
};

export default Home;
