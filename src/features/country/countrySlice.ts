import { createSlice } from "@reduxjs/toolkit"

import {CountryState} from "../../app/countryDataMaintainer/countryInterface"


const initialState:CountryState = {
    countryState: [],
    isLoading:false,
    isError:false,
    message:''
}


export const countrySlice = createSlice({
    name:'country',
    initialState,
    reducers:{},
    extraReducers(builder) {
        
    },

})

export default countrySlice.reducer