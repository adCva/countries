import { createSlice } from '@reduxjs/toolkit';


export const viewModeSlice = createSlice({
    name: "viewMode",
    initialState: {
        darkMode: false,
        loading: false
    },

    reducers: {
        changeViewMode: (state) => {
            return {
                ...state,
                darkMode: !state.darkMode
            }
        }
    }
})


export const { changeViewMode } = viewModeSlice.actions;

export default viewModeSlice.reducer;