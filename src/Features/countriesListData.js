import { createSlice } from '@reduxjs/toolkit';


export const countriesListData = createSlice({
    name: "countriesListData",
    initialState: {
        countriesListObj: {data: []}
    },
    reducers: {
        getCountriesListData: (state, action) => {
            let countriesData = {data: action.payload.data};
            console.log(countriesData);
            return {
                ...state,
                countriesListObj: countriesData
            }
        }
    }
})

export const { getCountriesListData } = countriesListData.actions;

export default countriesListData.reducer;