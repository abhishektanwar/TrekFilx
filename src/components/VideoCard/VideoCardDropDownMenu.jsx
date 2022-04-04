import React, { useState } from "react";
import { ReactComponent as MoreVertical } from "../../assets/more-vertical.svg";
import { ReactComponent as WatchLater } from "../../assets/watch-later.svg";
import { ReactComponent as WatchLaterFilled } from "../../assets/watch-later-filled.svg";
import { ReactComponent as AddToPlaylist } from "../../assets/playlist-add.svg";
import { ReactComponent as Like } from "../../assets/like.svg";
import { ReactComponent as LikeFilled } from "../../assets/like-filled.svg";
import "./video-card.css";
import { useAuth } from "../../Contexts/AuthDialogContext";
function DropdownMenu({
  handleAddToPlaylistHandler,
  addToLikedVideosHandler,
  isVideoLiked,
  addToWatchLaterHandler,
  isVideoWatchLater,
}) {
  const { user } = useAuth();
  function DropdownItem(props) {
    return (
      <button className="menu-item" onClick={props.onClick}>
        <span className="icon-button">{props.leftIcon}</span>
        {`  ${props.children}`}
        <span className="icon-button icon-right">{props.rightIcon}</span>
      </button>
    );
  }

  return (
    <div className="dropdown shadow-box">
      <DropdownItem
        leftIcon={<AddToPlaylist />}
        onClick={() => handleAddToPlaylistHandler()}
      >
        Add to Playlist
      </DropdownItem>
      <DropdownItem
        leftIcon={isVideoLiked && user.isAuthenticated && user.isAuthenticated ? <LikeFilled /> : <Like />}
        onClick={() => addToLikedVideosHandler()}
      >
        {isVideoLiked && user.isAuthenticated ? "Remove like " : "Like Video"}
      </DropdownItem>
      <DropdownItem
        leftIcon={isVideoWatchLater && user.isAuthenticated ? <WatchLaterFilled /> : <WatchLater />}
        onClick={() => addToWatchLaterHandler()}
      >
        {isVideoWatchLater && user.isAuthenticated ? "Remove from watch later" : "Watch later"}
      </DropdownItem>
    </div>
  );
}

const VideoCardDropDownMenu = ({
  handleAddToPlaylistHandler,
  addToLikedVideosHandler,
  addToWatchLaterHandler,
  isVideoLiked,
  isVideoWatchLater,
}) => {
  const [openVideoCardDropDownMenu, setOpenVideoCardDropDownMenu] =
    useState(false);
  return (
    <div
      className="video-card-dropdown-button"
      onClick={() => setOpenVideoCardDropDownMenu(!openVideoCardDropDownMenu)}
    >
      <MoreVertical />
      {openVideoCardDropDownMenu && (
        <DropdownMenu
          handleAddToPlaylistHandler={handleAddToPlaylistHandler}
          addToLikedVideosHandler={addToLikedVideosHandler}
          isVideoLiked={isVideoLiked}
          addToWatchLaterHandler={addToWatchLaterHandler}
          isVideoWatchLater={isVideoWatchLater}
        />
      )}
    </div>
  );
};

export default VideoCardDropDownMenu;
