import React from "react";
import { useParams } from "react-router";
import VideoListingGrid from "../../components/VideoListingGrid";
import VideoPlayer from "../../components/VideoPlayer";
import { useVideoListing } from "../../Contexts/VideoListingContext";

const VideoPage = () => {
  const { videoListingState } = useVideoListing();
  const { videos } = videoListingState;
  const { videoId } = useParams();
    const video = videos.find((video) => video.youtubeID === videoId);
  let relatedVideos;
  if(video !== undefined){
    relatedVideos = videos.filter((item)=>item.category === video.category);
  }

  return (
    <div>
      <VideoPlayer video={video} />
      {relatedVideos?.length > 0 ? (
        <>
        <div className="flex-align-item-center flex-justigy-content-center flex-row">
          <h2>Related Videos</h2>
        </div>
        <VideoListingGrid videos={relatedVideos} /></>
      ) : null}
    </div>
  );
};

export default VideoPage;
