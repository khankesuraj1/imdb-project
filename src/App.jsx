import Navbar from "./components/navbar"
import Banner from "./components/Banner"
import Moviecards from "./components/Moviecards"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Watchlist from "./components/Watchlist"
import MovieRecommendations from "./components/MovieRecommendations"
import Movies from "./components/Movies"
import React, { useEffect, useState } from 'react'
function App() {
  const[watchlist,setWatchlist]=useState([]);

  const handleAddToWatchList=(movieobj)=>{
    let updatedWatchList=[...watchlist,movieobj]
    setWatchlist(updatedWatchList)
    console.log(updatedWatchList)
localStorage.setItem('movies',JSON.stringify(updatedWatchList))

  }

  useEffect(()=>{
    let moviesFromLs=localStorage.getItem('movies')
    if(!moviesFromLs)
    {
      return
    }
    setWatchlist(JSON.parse(moviesFromLs));
  },[])

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <div className="space-y-10 flex flex-wrap">
    <Routes>

      <Route path="/" element={
        <>
        <Banner/>
        <Movies addToWatchList={handleAddToWatchList} watchList={watchlist}/>
        </>
      }
      />
      <Route path="/watchlist" element={<Watchlist watchlist={watchlist}/>}/>
    <Route path="/recommend" element={<MovieRecommendations/>}/>
    </Routes>  
   </div>
   </BrowserRouter>
    </>
  )
}

export default App
