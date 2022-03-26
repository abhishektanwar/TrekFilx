import React from 'react'
import heroImage5 from '../../assets/images/hero-carousel/hero-image5.webp'
import Button from '../Buttons/Button'
import './hero-banner.css'

const HeroBanner = () => {
  return (
    <div className="hero-image-container">
      <img
        src={heroImage5}
        alt="hero-image"
        className="hero-image responsive-image image-container"
      />
      <Button buttonText="Explore" buttonStyle="hero-image-btn" />
    </div>
  )
}

export default HeroBanner
