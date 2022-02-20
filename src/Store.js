import { configureStore } from '@reduxjs/toolkit';
import viewModeReducer from "./Features/viewModeSlice";

export default configureStore({
  reducer: {
    viewMode: viewModeReducer
  }
});