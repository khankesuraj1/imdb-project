import React, { useEffect,useState } from 'react'
import Moviecards from './Moviecards'
import axios from 'axios'
import { use } from 'react';
import Pagination from './Pagination';
function Movies() {
    const[movies,setMovies]=useState([]);
    const[page,setPage]=useState(1);
    // console.log('this is my movies state '+movies)
    const handleNext=()=>{
       setPage(page+1);
    }
    const handlePrevious=()=>{
        if(page>1){       
             setPage(page-1);
        }
    }

    useEffect(() => {
        axios.get(
            `https://api.themoviedb.org/3/trending/movie/day?api_key=0c78a569adc2bd3c9e1158189a0a44fc&language=en-US&page=${page}`
            ).then((respone)=>{
               setMovies(respone.data.results)

            }).catch((err)=>{
                console.error(err+'cant fetch data')
            })
    } ,[page]);
    return (
    <div>
        <div className="flex justify-evenly flex-wrap gap-8"  >
        {
           movies.map((movieObj)=>(
               <Moviecards movieObject={movieObj}  />
           ))
        }
   
   
       </div>
       <Pagination pageNumber={page} previousFn={handlePrevious} nextFn={handleNext}/>
       </div>
    )
}

export default Movies