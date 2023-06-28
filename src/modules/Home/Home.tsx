import React from 'react'
import Banner from './Banner'
import GameList from './GameList'

const Home = () => {
  return (
    <div className='min-h-full'>
    <Banner/>
    <GameList/>
    </div>
  )
}

export default Home