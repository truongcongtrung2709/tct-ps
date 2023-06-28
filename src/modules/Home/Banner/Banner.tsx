import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import axios, {AxiosResponse} from 'axios';
// import gamesAPI from '../../../services/gamesAPI';
interface Data {
  id:number;
  name:string;
  description:string;
  image:string;
  avatar:string
}


const Banner = () => {
const [games, setGames] =  useState<Data[] >([])

// useEffect(()=>{
// (async () => {
//   const data= await gamesAPI.getGames()
//   setGames(data)
// })()
// },[])
// console.log(games);


useEffect(() => {
  (async () => {
    const res = await axios.get("http://localhost:3000/games")
    setGames(res.data)
    
  })()
}, [])

  return (
    <Carousel 
    autoPlay={true} 
    centerMode={true} 
    centerSlidePercentage={100} 
    infiniteLoop={true}
    showStatus={false}
    showThumbs={false} 
    >
     
       {games.map((game)=>(
        <div key={game.id}>
        <img className='banner object-cover ' src={game.image} />
      </div>
       ))}
        
      
  
    </Carousel>
  )
}

export default Banner