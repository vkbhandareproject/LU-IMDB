import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [popular, setPopular] = useState([]);
  const [isCarouselReady, setIsCarouselReady] = useState(false);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
      .then((res) => res.json())
      .then((data) => setPopular(data.results))
      .catch((err) => console.log(err, "API FETCH ERROR"));
  }, []);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCarouselReady(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='home_slider_container'>
      {isCarouselReady && (
        <Carousel
          showThumbs={false}
          autoPlay={true}
          interval={3000}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
       
        >
          {popular.map((movieEle, index) => {
            return (
              
              <Link key={index} to={`/movie/${movieEle.id}`}>
                    <div className="sliderPoster" >
                        <img src={`https://image.tmdb.org/t/p/original${movieEle && movieEle.backdrop_path}`} alt="" />
                    </div>
                    <div className="sliderOverlay" >
                        <div className="movie_poster_title">
                            {movieEle ? movieEle.original_title : ""}
                        </div>
                        <div className="movie_poster_runtime">
                            {movieEle ? movieEle.release_date : ""}
                        </div>
                        <div className="movie_poster_rating">
                            {movieEle ? movieEle.vote_average : ""}
                        </div>
                    </div>
              </Link>
          
            );
          })}
        </Carousel>
      )}
    </div>
  );
};

export default Home;
