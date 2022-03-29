import React from 'react'
import { Link } from 'react-router-dom'
import {v4 as uuid } from 'uuid';
import {ReactComponent as Explore} from '../../assets/explore.svg'
import './aside-nav.css'
const AsideNav = () => {
  return (
    <div className="aside-nav-container">
      <ul>
        <Link to="/video" style={{textDecoration:'none'}} >
          
          <li className="aside-nav-item body-typo-md"> <Explore /><span style={{marginLeft:'1rem'}}> Video page</span></li>
        </Link>
        <Link to="/video" style={{textDecoration:'none'}} >
          
          <li className="aside-nav-item body-typo-md"> <Explore /><span style={{marginLeft:'1rem'}}> Video page</span></li>
        </Link>
        
          
        <Link to="/video" style={{textDecoration:'none'}} >
          
          <li className="aside-nav-item body-typo-md"> <Explore /><span style={{marginLeft:'1rem'}}> Video page</span></li>
        </Link>

      </ul>
    </div>
  )
}

export default AsideNav
