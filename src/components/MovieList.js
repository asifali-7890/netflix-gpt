import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
    if (!movies) return;
    return (
        <div className='p-6 '>
            <div>
                <h1 className='text-3xl pb-4  text-white'>{title}</h1>
                <div className='flex overflow-x-scroll'>
                    <div className='flex'>
                        {movies.map(movie => (<MovieCard key={movie.id} posterPath={movie?.backdrop_path} />))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieList