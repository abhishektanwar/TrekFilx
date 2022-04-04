import React, { useCallback, useMemo } from "react";
import "./video-card.css";
import VideoCardDropDownMenu from "./VideoCardDropDownMenu";
import { ReactComponent as DeleteIcon } from "../../assets/delete.svg";
import { useNavigate } from "react-router-dom";
import { usePlaylist } from "../../Contexts/PlaylistContext";
import { useModal } from "../../Contexts/ModalContext";
import { useAuth } from "../../Contexts/AuthDialogContext";
import usePlaylistApiCalls from "../../Hooks/usePlaylistApiCalls";
import { checkVideoInPlaylist } from "../../helpers/helpers";
const VideoCard = (props) => {
  const { variant, video, removeVideoFromPlaylistHandler } = props;
  const {
    title,
    youtubeID,
    channelName,
    videoLength,
    likes,
    views,
    subscribers,
    videoThumbnail,
    channelThumbnail,
    channelLink,
    description,
  } = video;
  const navigate = useNavigate();
  const {
    setShowPlaylistCreationModal,
    setVideoToAddToPlaylist,
    userVideoData: { likedPlaylist, watchLaterPlaylist },
  } = usePlaylist();
  const {
    removeVideoFromLiked,
    addVideoToLiked,
    removeVideoFromWatchLater,
    addVideoToWatchLater,
    addVideoToHistory,
  } = usePlaylistApiCalls();
  const { showModal } = useModal();
  const { user, setAuthType } = useAuth();
  const isVideoLiked = checkVideoInPlaylist(likedPlaylist, video);
  const isWatchLaterVideo = checkVideoInPlaylist(watchLaterPlaylist, video);
  const handleAddToPlaylistHandler = (video) => {
    if (user.isAuthenticated) {
      setVideoToAddToPlaylist(video);
      setShowPlaylistCreationModal(true);
      showModal();
    } else {
      setAuthType("login");
      showModal();
    }
  };

  const addToLikedVideosHandler = (video, isLikedVideo) => {
    if (user.isAuthenticated) {
      isLikedVideo
        ? removeVideoFromLiked(user.encodedToken, video)
        : addVideoToLiked(user.encodedToken, video);
    } else {
      setAuthType("login");
      showModal();
    }
  };

  const videoWatchLaterHandler = (video, isWatchLaterVideo) => {
    if (user.isAuthenticated) {
      isWatchLaterVideo
        ? removeVideoFromWatchLater(user.encodedToken, video)
        : addVideoToWatchLater(user.encodedToken, video);
    } else {
      setAuthType("login");
      showModal();
    }
  };
  if (variant === "vertical") {
    return (
      <div class="vertical-card flex-column margin-trb-20">
        <div
          class="image-container badge-container cursor-pointer"
          onClick={() => {
            addVideoToHistory(user.encodedToken, video);
            navigate(`/video/${youtubeID}`);
          }}
        >
          <img
            src={videoThumbnail}
            loading="lazy"
            alt={"imgAlt"}
            class="responsive-img image-container"
          />
        </div>

        <div class="card-text-container flex-column margin-top-20">
          <div class="flex-row">
            <span style={{ width: "80%", whiteSpace: "break-spaces" }}>
              <h6 class="text-bold-weight body-typo-md wrap-word">{title}</h6>
            </span>
            <VideoCardDropDownMenu
              handleAddToPlaylistHandler={() =>
                handleAddToPlaylistHandler(video)
              }
              addToLikedVideosHandler={() =>
                addToLikedVideosHandler(video, isVideoLiked)
              }
              addToWatchLaterHandler={() =>
                videoWatchLaterHandler(video, isWatchLaterVideo)
              }
              isVideoLiked={isVideoLiked}
              isVideoWatchLater={isWatchLaterVideo}
            />
            <span className="time-duration">{videoLength} </span>
          </div>
          <p
            className="text-medium-weight body-typo-md wrap-word margin-top-60"
            style={{ display: "inline-block", marginTop: "1rem" }}
          >
            {channelName}
          </p>
          <div class="text-container-description">
            <p class="body-typo-md text-light-weight">
              {`${views} ${" "}`}|{`${" "}${likes} likes`}
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div class="horizontal-card margin-trb-20">
        <div
          class="image-container badge-container cursor-pointer"
          onClick={() => {
            addVideoToHistory(user.encodedToken, video);
            navigate(`/video/${youtubeID}`);
          }}
        >
          <img
            src={videoThumbnail}
            loading="lazy"
            alt={"imgAlt"}
            class="responsive-img image-container"
          />
        </div>

        <div class="card-text-container flex-column margin-top-20">
          <div class="flex-row">
            <span style={{ width: "80%", whiteSpace: "break-spaces" }}>
              <h6 class="text-bold-weight body-typo-md wrap-word">{title}</h6>
            </span>
            <span className="time-duration">{videoLength} </span>
          </div>
          <p
            className="text-medium-weight body-typo-md wrap-word margin-top-60"
            style={{ display: "inline-block", marginTop: "1rem" }}
          >
            {channelName} |{` ${views} views`}
          </p>
          <span
            onClick={() => removeVideoFromPlaylistHandler()}
            style={{ marginLeft: "auto" }}
            className="cursor-pointer"
          >
            <DeleteIcon />
          </span>
        </div>
      </div>
    );
  }
};

export default VideoCard;
