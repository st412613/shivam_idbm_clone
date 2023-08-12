import React from "react"
import {Link} from "react-router-dom"
import "./Header.css"
export const Header=()=>{
    return(
            <div className="header">
                <div className="header-left">
              
                <Link to={"/"}><img className="logo"src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="logo"/></Link>
                <Link to={"/movies/popular"} style={{textDecoration:"none",margin:"10px"}}><span>Popular</span></Link>
                <Link to={"/movies/top_rated"} style={{textDecoration:"none",margin:"10px"}}><span>Top-Rated</span></Link>
                <Link to={"/movies/upcoming"} style={{textDecoration:"none",margin:"10px"}}><span>Upcoming</span></Link>             
                </div>
            </div>
    )
        
    }