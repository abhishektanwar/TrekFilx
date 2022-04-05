import React, { useRef } from 'react'
import VideoCard from '../VideoCard';
// import ProductCard from '../ProductCard';
import BadgeIconButton from '../Buttons/BadgeIconButton'
import './card-slider.css'

const CardSlider = (props) => {
  const {heading,videos} = props;
  // const featuredVideos = videos.filter(video=>video.featured)
  const ref=useRef(null);
  const slideLeft = () =>{
    ref.current.scrollLeft -= 200;
  }
  const slideRight = () =>{
    ref.current.scrollLeft += 200;
  }

  return (
    <section className="main-slider-container">
      <h3 style={{textAlign:'center'}}>{heading}</h3>
      <BadgeIconButton
        badgeIconButtonWrapper="left-arrow"
        icon={"fas fa-arrow-left"}
        onClick={slideLeft}
      />
      <BadgeIconButton
        badgeIconButtonWrapper="right-arrow"
        icon={"fas fa-arrow-right"}
        onClick={slideRight}
      />
      <div className="card-slider" ref={ref} >
        {videos.map((video)=>{
          return (
            <div className="slider-card">
            <VideoCard variant="vertical" video={video} key={video.id} /></div>
          )
        })}
      </div>
      <div className="margin-top-60"></div>
    </section>
  )
}

export default CardSlider
