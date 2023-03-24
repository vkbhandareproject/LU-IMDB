import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div className='header_container'>
        <div className="header_left">
            <Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="logo" className='logo' /></Link>
            <Link to="/movies/popular">Popular</Link>
            <Link to="/movies/top_rated">Top Rated</Link>
            <Link to="movies/upcoming">Upcoming</Link>
        </div>
    </div>
  )
}

export default Header