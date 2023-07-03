import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import axios from 'axios';
// import gamesAPI from '../../../services/gamesAPI'
interface Games {
  id:number;
  name:string;
  description:string;
  image:string;
  avatar:string;
}
const GameList= () => {
  const [games, setGames] = useState<Games[]>([])
  const navigate = useNavigate();
  const handleItemClick = (gameId:number)=>{
    navigate(`/game/${gameId}`)

  }
  
  // useEffect(()=>{
  //   (async () => {
  //     const data= await gamesAPI.getGames()
  //     setGames(data)
      
  //   })()
  //   },[])

  useEffect(() => {
    (async () => {
      await axios.get("http://localhost:3000/games").then((res) => {
        setGames(res.data)
      }).catch((err)=>{
        console.log(err);
        
      })
      
    })()
  }, [])
  
  return (
    <div className=''>
      <h1 className='text-center'>Top Games 2023</h1>
      <div className="max-w-screen-2xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 pb-8 place-items-center">
        {games.map((game) =>(
          <div className='cursor-pointer hover:opacity-50 transition-all' key={game.id} onClick={()=> handleItemClick(game.id)}>
            <img className=' w-64 h-80 rounded-xl' src={game.avatar} alt="" />
          </div>
        ) )}
      </div>
    </div>
   
  )
}

export default GameList