import { createSlice } from '@reduxjs/toolkit';


export const viewModeSlice = createSlice({
    name: "viewMode",
    initialState: {
        darkMode: false,
        showRegion: "all",
        singlePageDetailsOpened: false,
        singleCountryArray: [],
        countriesListObj: {data: []} // Will be an array of objects.
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