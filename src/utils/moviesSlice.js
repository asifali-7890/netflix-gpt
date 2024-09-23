import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        nowPopularMovies: null,
        nowTopRatedMovies: null,
        nowUpcomingMovies: null,

    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addNowPopularMovies: (state, action) => {
            state.nowPopularMovies = action.payload;
        },
        fetchTopMovies: (state, action) => {
            state.nowTopRatedMovies = action.payload;
        },
        fetchUpcomingMovies: (state, action) => {
            state.nowUpcomingMovies = action.payload;
        },
        getTrailerVideos: (state, action) => {
            state.trailerVideo = action.payload;
        },

    }
});

export const { addNowPlayingMovies, getTrailerVideos, fetchTopMovies, fetchUpcomingMovies, addNowPopularMovies } = movieSlice.actions;
export default movieSlice.reducer;