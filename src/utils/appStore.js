import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import moviesReducer from '../utils/moviesSlice.js'
import gptReducer from "./gptSlice.js";
import configSlice from "./configSlice.js";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpt: gptReducer,
        config: configSlice
    }
})


export default appStore;