import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FavoriteCountry, FavoriteState } from "../../app/countryDataMaintainer/countryInterface";

const data = localStorage.getItem('favorite') !== null ? JSON.parse(String(localStorage.getItem('favorite'))): []
const initialState : FavoriteState = {
    favoriteCountry: data,
    favoriteCount:0
}

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState:initialState,
    reducers:{
        IncrementFavorite:(state,action:PayloadAction<FavoriteCountry>)=>{
            if(state.favoriteCountry.length > 1){
                let isExisted:boolean
                isExisted = state.favoriteCountry.every((country) =>country.name.official === action.payload.country.name.official)
                    
                state.favoriteCountry.forEach((country)=> console.log(country.name.common))
                /*if(country.name.official !== action.payload.country.name.official){
                        console.log(action.payload.country.name.official)
                        state.favoriteCountry.push(action.payload.country)
                        localStorage.setItem('favorite',JSON.stringify(state.favoriteCountry))
                        //state.favoriteCount += action.payload.count
                        return state.favoriteCountry
                    }
                    else{
                        /*state.favoriteCountry.push(action.payload.country)
                        localStorage.setItem('favorite',JSON.stringify(state.favoriteCountry))
                        state.favoriteCount += action.payload.count
                        return state.favoriteCountry
                    }*/
                    console.log(isExisted)
                    if(!isExisted){
                        state.favoriteCountry.push(action.payload.country)
                        localStorage.setItem('favorite',JSON.stringify(state.favoriteCountry))
                    }
                
            }
            else{
                state.favoriteCountry.push(action.payload.country)
                localStorage.setItem('favorite',JSON.stringify(state.favoriteCountry))
                //state.favoriteCount += action.payload.count
            }  
        },

        DecrementFavorite:(state,action:PayloadAction<FavoriteCountry>)=>{
           /* const index:number = state.favoriteCountry.findIndex(favorite=>favorite.name.official === action.payload.country.name.official)
            state.favoriteCountry.splice(index,1)
            state.favoriteCount -= action.payload.count  */
            state.favoriteCountry = state.favoriteCountry.filter((country) => country.name.official !== action.payload.country.name.official)

            localStorage.setItem('favorite',JSON.stringify(state.favoriteCountry))
            //state.favoriteCount -= action.payload.count
        }

    }
})

export const {IncrementFavorite, DecrementFavorite} = favoriteSlice.actions
export default favoriteSlice.reducer