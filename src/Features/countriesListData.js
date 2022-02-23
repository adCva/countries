import { createSlice } from '@reduxjs/toolkit';


export const countriesListData = createSlice({
    name: "countriesListData",
    initialState: {
        countriesListObj: {data: []},
        backupCountriesListObj: {data: []},
        searchMode: false
    },
    reducers: {
        getCountriesListData: (state, action) => {
            let countriesData = {data: action.payload.data};

            return {
                ...state,
                countriesListObj: countriesData,
                backupCountriesListObj: countriesData
            }
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
        }
    }
})

export const { getCountriesListData, displatSearchFilterResaults, cancelSearchFilter } = countriesListData.actions;

export default countriesListData.reducer;