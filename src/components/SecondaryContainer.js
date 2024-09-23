import React from 'react'
import MovieList from './MovieList.js';
import Footer from './Footer.js';

import { useSelector } from 'react-redux';


const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  return (
    <div className='bg-black '>
      <div className='mt-0 md:-mt-58 z-5 pl-3 md:pl-6 relative'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.nowPopularMovies} />
        <MovieList title={"Top Rated"} movies={movies.nowTopRatedMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.nowUpcomingMovies} />
        <Footer />
      </div>
    </div>
  )
}

export default SecondaryContainer