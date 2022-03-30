import React, { useRef } from 'react'
import VideoCard from '../VideoCard';
// import ProductCard from '../ProductCard';
import BadgeIconButton from '../Buttons/BadgeIconButton'
import './card-slider.css'

const CardSlider = (props) => {
  const {heading} = props;
  // const featuredVideos = videos.filter(video=>video.featured)
  const ref=useRef(null);
  console.log("ref",ref);
  const slideLeft = () =>{
    console.log("slide",ref);
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
        {[1,2,3,4,5,6,7,8,9,10,11].map((item)=>{
          return (
            <div className="slider-card">
            <VideoCard variant="vertical" /></div>
          )
        })}
      </div>
    </section>
  )
}

export default CardSlider
