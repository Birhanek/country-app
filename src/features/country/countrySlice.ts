import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import CountryInfo, {CountryState, FavoriteCountry} from "../../app/countryDataMaintainer/countryInterface"
import { getAllCountries, getCountriesByRegion, getCountryByName } from "../../app/dataService/countryAPI"


const initialState:CountryState = {
    countryState: [],
    isLoading:false,
    isError:false,
    message:'',
    favoriteCount:0,
    favoriteCountry:[]
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
        },
        /*searchByRegion:(state,action:PayloadAction<string>)=>{
            state.countryState = state.countryState.filter((country:CountryInfo)=>{
                return country.region.toLowerCase() === action.payload.toLowerCase()
            })
        }*/
        IncrementFavorite:(state,action:PayloadAction<FavoriteCountry>)=>{
            state.favoriteCountry.push(action.payload.country)
            state.favoriteCountry.map(country=>country.isFavorite = true)
            state.favoriteCount += action.payload.count
        },
        DecrementFavorite:(state,action:PayloadAction<FavoriteCountry>)=>{
            //const index:number = state.favoriteCountry.map((favorite)=>favorite.name.official).indexOf(action.payload.country.name.official)
            // Due to slow performance in large arrays 
            const index:number = state.favoriteCountry.findIndex(favorite=>favorite.name.official === action.payload.country.name.official)
            const removeFavorite = state.favoriteCountry.find((favorite)=>favorite.name.official === action.payload.country.name.official)
            if(removeFavorite) removeFavorite.isFavorite = false
            state.favoriteCountry.splice(index,1)
            state.favoriteCount -= action.payload.count
           // state.favoriteCountry.filter((favorite)=>)
          
        }

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
            state.countryState.map((country)=>country.isFavorite=false) // added to initially the favorite is false
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

export const {searchByName,DecrementFavorite,IncrementFavorite} = countrySlice.actions

export default countrySlice.reducer