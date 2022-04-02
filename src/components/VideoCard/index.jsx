import React from "react";
import "./video-card.css";
import VideoCardDropDownMenu from "./VideoCardDropDownMenu";
import { useNavigate } from "react-router-dom";
const VideoCard = (props) => {
  const { variant, video } = props;
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
  if (variant === "vertical") {
    return (
      <div class="vertical-card flex-column margin-trb-20">
        <div
          class="image-container badge-container cursor-pointer"
          onClick={() => navigate(`/video/${youtubeID}`)}
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
            <VideoCardDropDownMenu />
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
        <div class="image-container badge-container">
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
        </div>
      </div>
    );
  }
};

export default VideoCard;
