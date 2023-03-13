import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// program specific call ups 
import  CountryInfo  from "../countryDataMaintainer/countryInterface";

const BASE_URL = 'https://restcountries.com';

// get all country
export const getAllCountries = createAsyncThunk(
    'country/getAllCountries', async(_,thunkApi)=>{
        
        const response = await axios.get(`${BASE_URL}/v3.1/all`)

        const data:CountryInfo[] = await response.data
        return data
        
    }
)

// getting country by name
export const getCountryByName = createAsyncThunk(
    'country/getCountryByName',async(name:string|undefined,thunkApi) => {
        const response = await axios.get(`${BASE_URL}/v3.1/name/${name}`)
        const data:CountryInfo[] = await response.data
        return data
    }
)
// getting countries by region
export const getCountriesByRegion = createAsyncThunk(
    'countries/getCountriesByRegion',async(region:string,thunkApi) =>{
        const response = await axios.get(`${BASE_URL}/v3.1/region/${region}`)
        const data:CountryInfo[] = await response.data
        return data
    }
)