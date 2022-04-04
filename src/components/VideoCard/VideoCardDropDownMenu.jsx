import React, { useState } from "react";
import { ReactComponent as MoreVertical } from "../../assets/more-vertical.svg";
import { ReactComponent as WatchLater } from "../../assets/watch-later.svg";
import { ReactComponent as AddToPlaylist } from "../../assets/playlist-add.svg";
import { ReactComponent as Like } from "../../assets/like.svg";
import { ReactComponent as LikeFilled } from "../../assets/like-filled.svg";
import "./video-card.css";
function DropdownMenu({
  handleAddToPlaylistHandler,
  addToLikedVideosHandler,
  isVideoLiked,
}) {
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
        leftIcon={isVideoLiked ? <LikeFilled /> : <Like />}
        onClick={() => addToLikedVideosHandler()}
      >
        {isVideoLiked ? 'Remove like ' : 'Like Video'}
      </DropdownItem>
      <DropdownItem leftIcon={<WatchLater />} onClick={() => {}}>
        Watch Later
      </DropdownItem>
    </div>
  );
}

const VideoCardDropDownMenu = ({
  handleAddToPlaylistHandler,
  addToLikedVideosHandler,
  isVideoLiked,
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
        />
      )}
    </div>
  );
};

export default VideoCardDropDownMenu;
