import React from 'react'
import { useEffect, useState } from "react";
import tmdbAPI from '../config/Axios';
import RowItem from './RowItem';

const ActionMovieRow = () => {

    const [apiContent, setApiContent] = useState([])

    const url = `/discover/movie?with_genres=28&sort_by=vote_count.desc`

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
              Action Movies
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

export default ActionMovieRow