import { useDispatch } from "react-redux";
import { fetchUpcomingMovies } from "../utils/moviesSlice"; // Assuming fetchUpcomingMovies is an action creator
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useNowUpcomingMovies = () => {
    const dispatch = useDispatch();

    const getNowUpcomingMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
        const json = await response.json();
        dispatch(fetchUpcomingMovies(json.results)); // Assuming fetchUpcomingMovies is an action creator
    }

    useEffect(() => {
        getNowUpcomingMovies();
    }, []); // Add dependencies here if needed

    // ... any other logic related to the hook ...
}

export default useNowUpcomingMovies;

