import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import CountryInfo, {CountryState} from "../../app/countryDataMaintainer/countryInterface"
import { getAllCountries, getCountriesByRegion, getCountryByName } from "../../app/dataService/countryAPI"

const initialState:CountryState = {
    countryState: [],
    isLoading:false,
    isError:false,
    message:'',
    searchQuery:''
}


export const countrySlice = createSlice({
    name:'country',
    initialState,
    reducers:{
        
        searchByName:(state,action:PayloadAction<string>)=>{
        state.searchQuery = action.payload.toLocaleLowerCase()
        },

        sortByPopulation:(state,action:PayloadAction<boolean>) =>{
            if(action.payload === true){
                state.countryState.sort((prevCountry,nextCountry)=>(prevCountry.population > nextCountry.population) ? 1 : (prevCountry.population < nextCountry.population) ? -1 : 0)
            }
            else{
                state.countryState.sort((prevCountry,nextCountry)=>(prevCountry.population < nextCountry.population) ? 1 : (prevCountry.population > nextCountry.population) ? -1 : 0)
            }
        },

        sortByCountryName: (state, action: PayloadAction<boolean>) => {
            if(action.payload === true){
                state.countryState.sort(
                    (prevCountry,nextCountry)=>(prevCountry.name.common.toLowerCase() > nextCountry.name.common.toLowerCase()) ? 1:
                                                (prevCountry.name.common.toLowerCase() < nextCountry.name.common.toLowerCase()) ? -1 : 0
                    )
            }
            else {
                state.countryState.sort(
                    (prevCountry,nextCountry)=>(prevCountry.name.common.toLowerCase() < nextCountry.name.common.toLowerCase()) ? 1:
                                                (prevCountry.name.common.toLowerCase() > nextCountry.name.common.toLowerCase()) ? -1 : 0
                    )
            }
        },

    },
    extraReducers(builder) {
        // Get all countries 
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

        // Get a specific country by name 
        builder.addCase(getCountryByName.pending,(state)=>{
            state.isLoading = true
            state.isError = false
            state.message = 'Loading ......'
        })
        builder.addCase(getCountryByName.fulfilled,(state,action:PayloadAction<CountryInfo[]>)=>{
            state.countryState = action.payload
            state.isLoading = false
            state.isError = false
            state.message = 'Data fetched successfully'
        })
        builder.addCase(getCountryByName.rejected,(state,action)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.error.message?.toLowerCase()
        })

        // Get countries by a specific region
        builder.addCase(getCountriesByRegion.pending,(state)=>{
            state.isLoading = true
            state.isError = false
            state.message = ' Loading ...'
        })
        builder.addCase(getCountriesByRegion.fulfilled,(state,action:PayloadAction<CountryInfo[]>)=>{
            state.countryState = action.payload
            state.isLoading =  false
            state.isError = false
            state.message = "Data fetched by region"
        })
        builder.addCase(getCountriesByRegion.rejected,(state,action)=>{
            state.isError = false
            state.isLoading = false
            state.message = action.error.message?.toLowerCase()
        })

        
        
    },

})

export const {searchByName,sortByPopulation,sortByCountryName} = countrySlice.actions

export default countrySlice.reducer