import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import CountryInfo, {CountryState} from "../../app/countryDataMaintainer/countryInterface"
import { getAllCountries } from "../../app/dataService/countryAPI"


const initialState:CountryState = {
    countryState: [],
    isLoading:false,
    isError:false,
    message:''
}


export const countrySlice = createSlice({
    name:'country',
    initialState,
    reducers:{
        searchByName:(state,action:PayloadAction<string>)=>{
            state.countryState = state.countryState.filter((country:CountryInfo)=>{
                return (country.name.common.toLowerCase().includes(action.payload.toLowerCase())
                || country.name.official.toLowerCase().includes(action.payload.toLowerCase()))
            })
        }
    },
    extraReducers(builder) {
        builder.addCase(getAllCountries.pending,(state) => {
            state.isLoading = true
            state.isError = false
            state.message = 'Loading .....'
        })
        builder.addCase(getAllCountries.fulfilled,(state,action:PayloadAction<CountryInfo[]>) => {
            state.countryState = action.payload
            state.isLoading = false
            state.isError = false
            state.message = 'Data fetched successfully'
        })
        builder.addCase(getAllCountries.rejected,(state,action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.error.message?.toUpperCase()
        })
        
    },

})

export const {searchByName} = countrySlice.actions

export default countrySlice.reducer