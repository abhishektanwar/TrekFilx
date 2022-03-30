import React from 'react'
import VideoCard from '../VideoCard'
import './video-listing-grid.css'
const VideoListingGrid = () => {
  return (
    <section className="video-listing">
        {[1,2,3,4,5,6,7,8,9].map((item)=> {return (<VideoCard variant="vertical" />)})}
        {/* adcs */}
      </section>
  )
}

export default VideoListingGrid
