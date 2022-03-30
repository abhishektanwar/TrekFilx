import React from 'react'
import { Link } from 'react-router-dom'
import {v4 as uuid } from 'uuid';
import {ReactComponent as Explore} from '../../assets/explore.svg'
import {ReactComponent as History} from '../../assets/history.svg'
import {ReactComponent as PlaylistAddCheck} from '../../assets/playlist-add-check.svg'
import {ReactComponent as Like} from '../../assets/like.svg'
import './aside-nav.css'
const AsideNav = () => {
  return (
    <div className="aside-nav-container">
      <ul>
        <Link to="/explore" style={{textDecoration:'none'}} >
          
          <li className="aside-nav-item body-typo-md text-medium-weight"> <Explore /><span style={{marginLeft:'1rem'}}> Explore</span></li>
        </Link>
        <Link to="/liked-videos" style={{textDecoration:'none'}} >
          
          <li className="aside-nav-item body-typo-md text-medium-weight"> <Like /><span style={{marginLeft:'1rem'}}> Liked Videos</span></li>
        </Link>
        
          
        <Link to="/playlists" style={{textDecoration:'none'}} >
          
          <li className="aside-nav-item body-typo-md text-medium-weight"> <PlaylistAddCheck /><span style={{marginLeft:'1rem'}}> Playlists</span></li>
        </Link>
        <Link to="/history" style={{textDecoration:'none'}} >
          
          <li className="aside-nav-item body-typo-md text-medium-weight"> <History /><span style={{marginLeft:'1rem'}}> History</span></li>
        </Link>

      </ul>
    </div>
  )
}

export default AsideNav
