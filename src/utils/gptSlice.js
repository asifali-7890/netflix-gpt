import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        gptSlice: false,
    },
    reducers: {
        toggleGPTSearch: (state) => {
            state.gptSlice = !state.gptSlice;
        }
    }
})
export const { toggleGPTSearch } = gptSlice.actions;
export default gptSlice.reducer;
