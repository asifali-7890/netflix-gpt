import { useDispatch } from "react-redux";
import { fetchTopMovies } from "../utils/moviesSlice"; // Assuming fetchTopMovies is an action creator
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    const fetchTopRatedMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS);
        const json = await response.json();
        dispatch(fetchTopMovies(json.results)); // Assuming fetchTopMovies is an action creator
    }

    useEffect(() => {
        fetchTopRatedMovies();
    }, []); // Add dependencies here if needed

    // ... any other logic related to the hook ...
}

export default useTopRatedMovies;

