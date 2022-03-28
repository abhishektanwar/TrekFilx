import React,{useState} from 'react'
import {ReactComponent as MoreVertical} from '../../assets/more-vertical.svg'
import {ReactComponent as WatchLater} from '../../assets/watch-later.svg'
import {ReactComponent as AddToPlaylist} from '../../assets/playlist-add.svg'
import './video-card.css'
function DropdownMenu() {
  function DropdownItem(props) {
    return (
      <button className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>
        {`  ${props.children}`}
        <span className="icon-button icon-right">{props.rightIcon}</span>
      </button>
    );
  }

  return (
    <div className="dropdown shadow-box">
      <DropdownItem leftIcon={<AddToPlaylist />} onClick={()=>{}}>Add to Playlist</DropdownItem>
      <DropdownItem leftIcon={<WatchLater />} onClick={()=>{}}>Watch Later</DropdownItem>
    </div>
  );
}

const VideoCardDropDownMenu = () => {
  const [openVideoCardDropDownMenu, setOpenVideoCardDropDownMenu] = useState(false);
  return (
    <button className="video-card-dropdown-button" onClick={() => setOpenVideoCardDropDownMenu(!openVideoCardDropDownMenu)}>
      <MoreVertical />
      {openVideoCardDropDownMenu && <DropdownMenu />}
    </button>
  );
}

export default VideoCardDropDownMenu
