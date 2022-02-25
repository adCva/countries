import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {getCountriesListData} from "./countriesListData";


// ========= The thunk.
export const makeCountriesListAPICall = createAsyncThunk(
    "countriesApiMiddleware/makeCountriesListAPICall",
    async ({region}, { dispatch }) => {
        if (region === "all") {
            return fetch(`https://restcountries.com/v3.1/all`)
                .then((res) => res.json()).then(resData => dispatch(getCountriesListData({data: resData})))
                .catch((err) => console.log(err))
        } else {
            return fetch(`https://restcountries.com/v3.1/region/${region}`)
                .then((res) => res.json()).then(resData => dispatch(getCountriesListData({data: resData})))
                .catch((err) => console.log(err))
        }
    }
);


const countriesSlice = createSlice({
    name: "countriesApiMiddleware",
    initialState: {
        countriesList: [],
        status: null
    },
    extraReducers: {
        [makeCountriesListAPICall.pending]: (state) => {
            state.status = "loading"
        },
        [makeCountriesListAPICall.fulfilled]: (state, {payload}) => {
            state.countriesList = payload
            state.status = "success"
        },
        [makeCountriesListAPICall.rejected]: (state) => {
            state.status = "failed"
        }
    }
})


export default countriesSlice.reducer;