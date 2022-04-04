import React,{useState} from 'react'
import {ReactComponent as MoreVertical} from '../../assets/more-vertical.svg'
import {ReactComponent as WatchLater} from '../../assets/watch-later.svg'
import {ReactComponent as AddToPlaylist} from '../../assets/playlist-add.svg'
import './video-card.css'
function DropdownMenu({handleAddToPlaylistHandler}) {
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
      <DropdownItem leftIcon={<AddToPlaylist />} onClick={()=>handleAddToPlaylistHandler()}>Add to Playlist</DropdownItem>
      <DropdownItem leftIcon={<WatchLater />} onClick={()=>{}}>Watch Later</DropdownItem>
    </div>
  );
}

const VideoCardDropDownMenu = ({handleAddToPlaylistHandler}) => {
  const [openVideoCardDropDownMenu, setOpenVideoCardDropDownMenu] = useState(false);
  return (
    <div className="video-card-dropdown-button" onClick={() => setOpenVideoCardDropDownMenu(!openVideoCardDropDownMenu)}>
      <MoreVertical />
      {openVideoCardDropDownMenu && <DropdownMenu handleAddToPlaylistHandler={handleAddToPlaylistHandler} />}
    </div>
  );
}

export default VideoCardDropDownMenu
