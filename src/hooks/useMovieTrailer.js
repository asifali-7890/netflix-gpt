import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux';
import { getTrailerVideos } from '../utils/moviesSlice';

const useMovieTrailer = ({ id }) => {
    const dispatch = useDispatch();
    const getMoviesVideo = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/' + id + '/videos?language=en-US', API_OPTIONS)
        const json = await data.json();
        const filterData = json.results.filter((video) => video.type === 'Trailer')
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(getTrailerVideos(trailer.key));
    }

    useEffect(() => {
        getMoviesVideo();
    }, []);

}
export default useMovieTrailer;