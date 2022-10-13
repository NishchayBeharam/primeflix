import React from 'react'
import { useEffect, useState } from "react";
import tmdbAPI from '../config/Axios';
import RowItem from './RowItem';

const TrendingRow = () => {

    const [Trending, setTrending] = useState([])
    const [Videos, setVideos] = useState([])

    const url = '/trending/all/week'

    const fetchmovie = async () => {
      const Tr = await tmdbAPI.get(url)
      setTrending(Tr.data.results)
    }
  
    useEffect(() => {
      
      fetchmovie()
    
    }, [0])

    const GetVideo = () => {

    }

  return (
    <div className="row">
        <div className="rowRotate">
          <div className="rowHeader">
              Trending Now
          </div>
          <div className="rowContent">
              {Trending.map((movie)=>{
                  return(
                  <RowItem title={movie.original_title || movie.original_name} language={movie.original_language}  poster_path={movie.poster_path} vote={movie.vote_average}/>
                  )
              })}
          </div>
        </div>
    </div>
  )
}

export default TrendingRow