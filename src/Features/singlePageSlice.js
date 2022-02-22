import { createSlice } from '@reduxjs/toolkit';

export const singlePageSlice = createSlice({
    name: "singlePageSlice",
    initialState: {
        singlePageDetailsOpened: false,
        countryCode: "",
        singleCountryArray: [],
        singleCountryData : {},
        translatedBorderingCountries : {"ROU": "Romania", "DEU": "Germany"...}
    },
    reducers: {
        openSinglePageDetails: (state, action) => {
            let countryData = action.payload.data;
            console.log(countryData);
            
            return {
                ...state,
                singlePageDetailsOpened: true,
                singleCountryData: countryData
            }
        },
        closeSinglePageDetails: state => {
            state.singlePageDetailsOpened = false
            state.singleCountryData = {data: {}}
        },
    }
})

export const { openSinglePageDetails, closeSinglePageDetails } = singlePageSlice.actions;

export default singlePageSlice.reducer;