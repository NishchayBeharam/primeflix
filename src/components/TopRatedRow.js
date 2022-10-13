import React from 'react'
import { useEffect, useState } from "react";
import tmdbAPI from '../config/Axios';
import RowImg from './RowItem';

const TopRatedRow = () => {

    const [TopRated, setTopRated] = useState([])

    const url = '/tv/top_rated'

    const fetchContent = async () => {
      const Tr = await tmdbAPI.get(url)
      setTopRated(Tr.data.results)
    }
  
    useEffect(() => {
      
      fetchContent()
    
    }, [0])

  return (
    <div className="row">
        <div className="rowRotate">
          <div className="rowHeader">
              Top Rated
          </div>
          <div className="rowContent">
              {TopRated.map((movie)=>{
                  return(
                  <RowImg poster_path={movie.poster_path}/>
                  )
              })}
          </div>
        </div>
    </div>
  )
}

export default TopRatedRow