import React from 'react'
import VideoCard from '../VideoCard'
import './video-listing-grid.css'
const VideoListingGrid = (props) => {
  const {videos} = props
  return (
    <section className="video-listing">
        {videos.map((video)=> {return (<VideoCard variant="vertical" video={video} key={video.id} />)})}
      </section>
  )
}

export default VideoListingGrid
