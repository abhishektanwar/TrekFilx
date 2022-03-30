import React from "react";
import "./video-card.css";
import VideoCardDropDownMenu from "./VideoCardDropDownMenu";

const VideoCard = (props) => {
  const { variant } = props;
  const imageUrl =
    "https://yt3.ggpht.com/ytc/AKedOLT73975I62n_lVOvDq0y0rmsJru0etCDFATN0F0=s68-c-k-c0x00ffffff-no-rj";
  if (variant === "vertical") {
    return (
      <div class="vertical-card flex-column margin-trb-20">
        <div class="image-container badge-container">
          <img
            src={imageUrl}
            loading="lazy"
            alt={"imgAlt"}
            class="responsive-img image-container"
          />
        </div>

        <div class="card-text-container flex-column margin-top-20">
          <div class="flex-row">
            <span style={{ width: "80%", whiteSpace: "break-spaces" }}>
              <h6 class="text-bold-weight body-typo-md wrap-word">
                {
                  "Title of video Title of video Title of video Title of video Title of video Title of videoTitle of video Title of video"
                }
              </h6>
            </span>
            <VideoCardDropDownMenu />
            <span className="time-duration">time duration </span>
          </div>
          <p
            className="text-medium-weight body-typo-md wrap-word margin-top-60"
            style={{ display: "inline-block", marginTop: "1rem" }}
          >
            {"Channel Name"}
          </p>
          <div class="text-container-description">
            <p class="body-typo-md text-light-weight">
              {`24K views `}|{` 2 days ago `}
            </p>
          </div>
        </div>
      </div>
    );
  }
  else{
    return (
      <div class="horizontal-card margin-trb-20">
        <div class="image-container badge-container">
          <img
            src={imageUrl}
            loading="lazy"
            alt={"imgAlt"}
            class="responsive-img image-container"
          />
        </div>

        <div class="card-text-container flex-column margin-top-20">
          <div class="flex-row">
            <span style={{ width: "80%", whiteSpace: "break-spaces" }}>
              <h6 class="text-bold-weight body-typo-md wrap-word">
                {
                  "Title of video Title of video Title of video Title of video Title of video Title of videoTitle of video Title of video"
                }
              </h6>
            </span>
            <span className="time-duration">time duration </span>
          </div>
          <p
            className="text-medium-weight body-typo-md wrap-word margin-top-60"
            style={{ display: "inline-block", marginTop: "1rem" }}
          >
            {"Channel Name"} |{` 30K views`}
          </p>
        </div>
      </div>
    );
  }
};

export default VideoCard;
