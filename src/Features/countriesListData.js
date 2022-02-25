import { createSlice } from '@reduxjs/toolkit';


export const countriesListData = createSlice({
    name: "countriesListData",
    initialState: {
        regionDisplayed: "all",
        countriesListObj: {data: []},
        backupCountriesListObj: {data: []},
        loadingList: false
    },
    reducers: {
        getCountriesListData: (state, action) => {
            let countriesData = {data: action.payload.data};
            // ========= Sort them alphabeticaly.
            countriesData.data.sort((a,b) => (a.name.common > b.name.common) ? 1 : ((b.name.common > a.name.common) ? -1 : 0));

            return {
                ...state,
                countriesListObj: countriesData,
                backupCountriesListObj: countriesData,
                loadingList: false
            }
        },
        updateRegionDisplayed: (state, action) => {
            state.regionDisplayed = action.payload
        },
        displatSearchFilterResaults: (state, action) => {
            let filteredList = {data: action.payload.data};

            return {
                ...state,
                countriesListObj: filteredList,
            }
        },
        cancelSearchFilter: state => {
            return {
                ...state,
                countriesListObj: state.backupCountriesListObj
            }
        },
        startLoadingList: state => {
            state.loadingList = true
        }
    }
})

export const { getCountriesListData, updateRegionDisplayed, displatSearchFilterResaults, cancelSearchFilter, startLoadingList } = countriesListData.actions;

export default countriesListData.reducer;