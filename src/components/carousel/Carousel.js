import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import './carousel.css'

function CarouselSlider(props) {
  const { Images } = props
  return (
    <Carousel>
      {Images.map((image, index) => (
        <div key={index}>
          <img alt="images" src={image} />
        </div>
      ))}
    </Carousel>
  )
}
export default CarouselSlider
