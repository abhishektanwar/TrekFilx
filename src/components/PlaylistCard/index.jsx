import React from "react";
import { useNavigate } from 'react-router-dom'
import "./playlist-card.css";
const PlaylistCard = ({ playlist }) => {
  const navigate = useNavigate();
  let randomImageNumber = Math.floor(Math.random() * playlist?.videos?.length);
  return (
    <div
      className="playlist-card-container flex-column margin-trb-20"
      onClick={() => navigate(`/playlist/${playlist._id}`)}
    >
      {playlist?.videos?.length > 0 ? (
        <div class="image-container badge-container cursor-pointer">
          <>
            <img
              src={playlist.videos[randomImageNumber].videoThumbnail}
              loading="lazy"
              alt={"imgAlt"}
              class="responsive-img image-container"
            />

            <span className="playlist-count-container typo-md text-bold-medium">
              {playlist?.videos?.length}
            </span>
          </>
        </div>
      ) : (
        <div className="empty-playlist-container">
          <p className="typo-md">Empty playlist</p>
        </div>
      )}

      <div className="playlist-description-box">
        <p className="typo-sm">{playlist.title}</p>
      </div>
    </div>
  );
};

export default PlaylistCard;
