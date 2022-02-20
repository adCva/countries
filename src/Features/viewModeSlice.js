import { createSlice } from '@reduxjs/toolkit';


export const viewModeSlice = createSlice({
    name: "viewMode",
    initialState: {
        darkMode: false,
        singlePageDetailsOpened: false
    },

    reducers: {
        changeViewMode: (state) => {
            return {
                ...state,
                darkMode: !state.darkMode
            }
        },
        openSinglePageDetails: state => {
            state.singlePageDetailsOpened = true
        },
        closeSinglePageDetails: state => {
            state.singlePageDetailsOpened = false
        }
    }
})


export const { changeViewMode, openSinglePageDetails, closeSinglePageDetails } = viewModeSlice.actions;

export default viewModeSlice.reducer;