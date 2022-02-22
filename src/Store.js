import { configureStore } from '@reduxjs/toolkit';
import viewModeReducer from "./Features/viewModeSlice";
import countriesListData from "./Features/countriesListData";
import singlePageSlice from "./Features/singlePageSlice";
import getCountriesMiddleware from "./Features/getCountriesMiddleware";
import getSingleCountryMiddleware from "./Features/getSingleCountryMiddleware";


export default configureStore({
  reducer: {
    viewMode: viewModeReducer,
    countriesList: countriesListData,
    singlePage: singlePageSlice,
    countriesApiMiddleware: getCountriesMiddleware,
    singleCountryApiMiddleware: getSingleCountryMiddleware
  }
});