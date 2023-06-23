import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import axios from "axios"
const Banner = () => {
  const [movies, setMovies] = useState<any[]>([])
  
  useEffect(() => {
    const url = "http://localhost:3000/movies";
    axios.get(url).then(response => {
      setMovies(response.data)
      
    }
    )
  }, [])
  console.log(movies);
  
  
  return (
    <Carousel 
    autoPlay={true} 
    centerMode={true} 
    centerSlidePercentage={100} 
    infiniteLoop={true}
    showStatus={false}
    showThumbs={false} 
    >
     
       {movies.map((movie, index)=>(
        <div key={index}>
        <img className='banner object-cover ' src={movie.image} />
      </div>
       ))}
        
      
  
    </Carousel>
  )
}

export default Banner