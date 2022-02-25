import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {openSinglePageDetails} from "./singlePageSlice";


export const getSingeCountryData = createAsyncThunk(
    "singleCountryApiMiddleware/getSingeCountryData",
    async ({countryCode}, { dispatch }) => {
        return fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
        .then((res) => res.json()).then(resData => dispatch(openSinglePageDetails({data: resData})))
    }
)


const singleCountryDetails = createSlice({
    name: "countryDataApiCall",
    initialState: {
        countryList: {},
        status: null
    },
    extraReducers: {
        [getSingeCountryData.pending]: (state) => {
            state.status = "loading"
        },
        [getSingeCountryData.fulfilled]: (state, {payload}) => {
            state.countryList = payload
            state.status = "success"
        },
        [getSingeCountryData.rejected]: (state) => {
            state.status = "failed"
        }
    }
})

export default singleCountryDetails.reducer;