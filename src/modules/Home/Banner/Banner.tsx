import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
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
     <div>
                <img className='banner object-cover' src="/src/assets/banner.jpg" />
                </div>
                <div>
                <img className='banner object-cover' src="/src/assets/banner2.jpg" />
                </div>
                <div>
                <img className='banner object-cover' src="/src/assets/banner3.jpg" />
                </div>
                <div>
                <img className='banner object-cover' src="/src/assets/banner4.jpg" />
                </div>
                <div>
                <img className='banner object-cover' src="/src/assets/banner5.jpg" />
                </div>
    </Carousel>
  )
}

export default Banner