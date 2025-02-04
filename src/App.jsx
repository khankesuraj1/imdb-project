import Navbar from "./components/navbar"
import Banner from "./components/Banner"
import Moviecards from "./components/Moviecards"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Watchlist from "./components/Watchlist"
import MovieRecommendations from "./components/MovieRecommendations"
import Movies from "./components/Movies"
function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <div className="space-y-10 flex flex-wrap">
    <Routes>

      <Route path="/" element={
        <>
        <Banner/>
        <Movies/>
        </>
      }
      />
      <Route path="/watchlist" element={<Watchlist/>}/>
    <Route path="/recommend" element={<MovieRecommendations/>}/>
    </Routes>  
   </div>
   </BrowserRouter>
    </>
  )
}

export default App
