import React from "react";
import CardSlider from "../../components/CardSlider";
import HeroBanner from '../../components/HeroBanner'
import { useVideoListing } from "../../Contexts/VideoListingContext";
import FeaturedContainer from "../../components/FeaturedContainer";
import { useDocumentTitle } from '../../helpers/helpers'

const Home = () => {
  const {videoListingState:{videos,categories,},videoListingDispatch} = useVideoListing();
  const featuredVideos = videos.filter(video => video.featured);
  useDocumentTitle("Trek Flix");
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
