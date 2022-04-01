import React from "react";
import { ReactComponent as Explore } from "../../assets/explore.svg";
import { ReactComponent as History } from "../../assets/history.svg";
import { ReactComponent as PlaylistAdd } from "../../assets/playlist-add.svg";
import { ReactComponent as Like } from "../../assets/like.svg";
import { ReactComponent as WatchLater } from "../../assets/watch-later.svg";

import "./video-player.css";
import Button from "../Buttons/Button";
const VideoPlayer = () => {
  return (
    <div>
      <iframe
        width="100%"
        src={``}
        title="Video Player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
        className="yt-video-player"
      ></iframe>
      <div>
        <div className="yt-video-title-container">
          <h3>Title here</h3>
          <div className="yt-video-description-container" style={{marginTop:'-20px'}}>
            <p class="body-typo-md text-light-weight yt-video-views">{`${"views"} ${" "}`}</p>
            <div className="flex-row yt-video-action-button-container" >
            <Button
              buttonText="45K"
              buttonStyle={`body-typo-md text-medium-weight secondary-button yt-video-action-btn`}
              icon={
                <span style={{ marginRight: "1rem" }}>
                  <Like />
                </span>
              }
              onClick={() => {}}
            />
            <Button
              buttonText="Add to Playlist"
              buttonStyle={`body-typo-md text-medium-weight secondary-button yt-video-action-btn`}
              icon={
                <span style={{ marginRight: "1rem" }}>
                  <PlaylistAdd />
                </span>
              }
              onClick={() => {}}
            />
            <Button
              buttonText="Watch Later"
              buttonStyle={`body-typo-md text-medium-weight secondary-button yt-video-action-btn`}
              icon={
                <span style={{ marginRight: "1rem" }}>
                  <WatchLater />
                </span>
              }
              onClick={() => {}}
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
            src="https://yt3.ggpht.com/q6UXzenrtqGQQ9BO4q4Od-0R0WueoHPsykBmjIMzh_0-E3CzHRLKXBoeyP56_mJgxxQGN5JhOls=s88-c-k-c0x00ffffff-no-rj"
            alt="avatar"
            loading="lazy"
            className="responsive-img circular-img"
          />
        </div>

        <div className="flex-column">
          <p className="body-typo-md">Channel Name</p>
          <p className="body-typo-sm">245K Subscribers</p>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
