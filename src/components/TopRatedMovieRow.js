import React from 'react'
import { useEffect, useState } from "react";
import tmdbAPI from '../config/Axios';
import RowItem from './RowItem';

const TopRatedMovieRow = () => {

    const [apiContent, setApiContent] = useState([])

    const url = '/movie/top_rated'

    const fetchContent = async () => {
      const Tr = await tmdbAPI.get(url)
      setApiContent(Tr.data.results)
    }
  
    useEffect(() => {
      
      fetchContent()
    
    }, [0])

  return (
    <div className="row">
        <div className="rowRotate">
          <div className="rowHeader">
              Top Rated Movies
          </div>
          <div className="rowContent">
              {apiContent.map((item)=>{
                  return(
                  <RowItem title={item.original_title || item.original_name} language={item.original_language}  poster_path={item.poster_path} vote={item.vote_average}/>
                  )
              })}
          </div>
        </div>
    </div>
  )
}

export default TopRatedMovieRow