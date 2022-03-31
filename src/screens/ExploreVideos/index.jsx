import React from "react";
import VideoCard from "../../components/VideoCard";
import VideoListingGrid from "../../components/VideoListingGrid";
import { useVideoListing } from "../../Contexts/VideoListingContext";
import "./explore-videos.css";
const ExploreVideos = () => {
  const {videoListingState} = useVideoListing();
  const {videos} = videoListingState;
  return <VideoListingGrid videos={videos} />;
};

export default ExploreVideos;
