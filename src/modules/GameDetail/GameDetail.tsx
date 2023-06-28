import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
interface Data {
  id:number;
  name:string;
  description:string;
  platform:string;
  price:string;
  image:string;
  avatar:string
}

const GameDetail = () => {
  const {gameId} = useParams<{gameId:string | undefined}>();
  const [gameDetail, setGameDetail] = useState<Data[]>([])
  
  useEffect(() => {
    (async () => {
      const res = await axios.get(`http://localhost:3000/games/${gameId}`)
      setGameDetail(p=>[...p,res.data])
      
    })()
  }, [])
  
  return (
    <>
    {gameDetail.map((game) => (
      <div key={game.id} style={{backgroundImage: `url(${game.image})`}} className='bg-cover py-28'>
        <div className='p-5 shadow-xl bg-primary-color max-w-screen-2xl mx-auto md:w-96 sm:w-60 w-full rounded-2xl'>
          <div className='text-center'>
          <img className=' w-full rounded-2xl' src={game.avatar} alt="" />
          <h1>{game.name}</h1>
          <p>{game.platform}</p>
          <p className='text-2xl py-4'>{game.price} $</p>
          <p>{game.description}</p>
          <button className='w-full my-4'>Add to Cart</button>
          </div>
        </div>
      </div>
    ))}
    </>
  )
}

export default GameDetail