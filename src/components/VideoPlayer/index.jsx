import React from "react";
import { ReactComponent as PlaylistAdd } from "../../assets/playlist-add.svg";
import { ReactComponent as Like } from "../../assets/like.svg";
import { ReactComponent as LikeFilled } from "../../assets/like-filled.svg";
import { ReactComponent as WatchLater } from "../../assets/watch-later.svg";
import { ReactComponent as WatchLaterFilled } from "../../assets/watch-later-filled.svg";
import Button from "../Buttons/Button";
import "./video-player.css";
import { usePlaylist } from "../../Contexts/PlaylistContext";
import { useModal } from "../../Contexts/ModalContext";
import { useAuth } from "../../Contexts/AuthDialogContext";
import usePlaylistApiCalls from "../../Hooks/usePlaylistApiCalls";

const VideoPlayer = ({video}) => {
  const {setShowPlaylistCreationModal,setVideoToAddToPlaylist,userVideoData:{likedPlaylist,watchLaterPlaylist}} = usePlaylist();
  const {showModal} = useModal()
  const {user,setAuthType} = useAuth()
  const { addVideoToLiked,removeVideoFromLiked,addVideoToWatchLater,removeVideoFromWatchLater } = usePlaylistApiCalls()
  const isVideoLiked = likedPlaylist?.find((item)=>item._id === video._id)
  const isVideoWatchLater = watchLaterPlaylist?.find((item)=>item._id === video._id)

  const handleAddToPlaylist = () => {
    if(user.isAuthenticated){
      setVideoToAddToPlaylist(video)
      setShowPlaylistCreationModal(true)
      showModal()
    }
    else{
      setAuthType('login')
      showModal()
    }
  }

  const videoLikeHandler = (video,isLikedVideo)=> {
    if(user.isAuthenticated){
      isLikedVideo ? removeVideoFromLiked(user.encodedToken,video) : addVideoToLiked(user.encodedToken,video)
    }
    else{
      setAuthType('login')
      showModal()
    }
  }

  const videoWatchLaterHandler = (video,isWatchLaterVideo) => {
    if(user.isAuthenticated){
      isWatchLaterVideo ? removeVideoFromWatchLater(user.encodedToken,video) : addVideoToWatchLater(user.encodedToken,video)
    }
    else{
      setAuthType('login')
      showModal()
    }
  }
  return (
    <div>
      <iframe
        width="100%"
        src={`https://www.youtube.com/embed/${video?.youtubeID}`}
        title="Video Player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
        className="yt-video-player"
      ></iframe>
      <div>
        <div className="yt-video-title-container">
          <h3>{video?.title}</h3>
          <div className="yt-video-description-container" style={{marginTop:'-20px'}}>
            <p class="body-typo-md text-light-weight yt-video-views">{`${video?.views} views ${" "}`}</p>
            <div className="flex-row yt-video-action-button-container" >
            <Button
              buttonText={video?.likes}
              buttonStyle={`body-typo-md text-medium-weight secondary-button yt-video-action-btn`}
              icon={
                <span style={{ marginRight: "1rem" }}>
                  {isVideoLiked && user.isAuthenticated ? <LikeFilled /> : <Like /> }
                </span>
              }
              onClick={() => videoLikeHandler(video,isVideoLiked)}
            />
            <Button
              buttonText="Add to Playlist"
              buttonStyle={`body-typo-md text-medium-weight secondary-button yt-video-action-btn`}
              icon={
                <span style={{ marginRight: "1rem" }}>
                  <PlaylistAdd />
                </span>
              }
              onClick={() => handleAddToPlaylist()}
            />
            <Button
              buttonText={isVideoWatchLater && user.isAuthenticated ? 'Added to Watch Later' : 'Watch Later'}
              buttonStyle={`body-typo-md text-medium-weight secondary-button yt-video-action-btn`}
              icon={
                <span style={{ marginRight: "1rem" }}>
                  {isVideoWatchLater && user.isAuthenticated ? <WatchLaterFilled /> : <WatchLater /> }
                </span>
              }
              onClick={() => {videoWatchLaterHandler(video,isVideoWatchLater)}}
            />
            </div>
          </div>
        </div>
      </div>

      <div className="flex-row flex-align-item-center">
        <div
          className="avatar avatar-sm margin-trb-16"
          style={{ marginLeft: "4rem" }}
        >
          <img
            src={video?.channelThumbnail}
            alt="avatar"
            loading="lazy"
            className="responsive-img circular-img"
          />
        </div>

        <div className="flex-column">
          <p className="body-typo-md">{video?.channelName}</p>
          <p className="body-typo-sm">{`${video?.subscribers} Subscribers`}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
