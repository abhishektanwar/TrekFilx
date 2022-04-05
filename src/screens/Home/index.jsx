import React from "react";
import CardSlider from "../../components/CardSlider";
import HeroBanner from '../../components/HeroBanner'
import VideoCard from "../../components/VideoCard";
import {v4 as uuid} from 'uuid'
import { useVideoListing } from "../../Contexts/VideoListingContext";
import FeaturedContainer from "../../components/FeaturedContainer";

const Home = () => {
  const {videoListingState:{videos,categories,categoriesData},videoListingDispatch} = useVideoListing();
  // const {videos} = videoListingState;
  const featuredVideos = videos.filter(video => video.featured);
  // console.log("videoListingState",videoListingState)
  return (
    <div className="app-container">
      <HeroBanner />
      <FeaturedContainer
        featuredContainerTitle={"Featured Categories"}
        categories={categories}
        dispatchFunction={videoListingDispatch}
      />
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
