import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import nowShowing from "../../../services/local/nowShowing.json"
const Banner = () => {
  return (
    <Carousel 
    autoPlay={true} 
    centerMode={true} 
    centerSlidePercentage={100} 
    infiniteLoop={true}
    showStatus={false}
    showThumbs={false} 
    >
     
      {nowShowing.map((movie) => (
        <div>
          <img className='banner object-cover ' src={movie.image} />
        </div>
      ))}
                
  
    </Carousel>
  )
}

export default Banner