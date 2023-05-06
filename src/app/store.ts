import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "../features/country/countrySlice";
import favoriteReducer from "../features/country/favoriteSlice";


export const store = configureStore({
    reducer:{
        country:countryReducer,
        favorite: favoriteReducer
    }
})


export type RootState = ReturnType<typeof  store.getState>
export type AppDispatch = typeof store.dispatch