import { IconButtonProps } from "@mui/material"

export interface Language {
    official:string,
    common:string
}

export interface Name {
    common:string,
    official:string,
    nativeName:{[key:string]:Language}
}
export interface Idd {
    root:string,
    suffix:string[]
}
export interface Currency{
    name:string,
    symbol:string
}
export interface Demonyms {
    f:string,
    m:string
}
export interface CarDirection {
    signs:string[],
    side:string
}

export interface PostalCode {
    format:string,
    regex:string
}

export interface CountryProps {
    country:CountryInfo,
    key:number
}

export interface  CountryState {
    countryState: CountryInfo[],
    isLoading:boolean,
    isError:boolean,
    message?:string,
    favoriteCountry:CountryInfo[],
    favoriteCount:number
}

export enum Continents {
    Africa = "Africa",
    Antarctica = "Antarctica",
    Asia = "Asia",
    Europe = "Europe",
    NorthAmerica = "North America",
    Oceania = "Oceania",
    SouthAmerica = "South America",
    All ="All",
}
export interface FavoriteCountry{
    count:number,
    country:CountryInfo
}

export interface ExpandMoreProps extends IconButtonProps {
    expand:boolean
}

export interface PaginationStates {
    dataPerPage:number,
    totalData:number,
    paginate:(selected:number)=> void,
    prevPage:()=> void,
    nextPage:()=> void
}
interface CountryInfo {
   name:Name,
   tld:string[],
   cca2:string,
   ccn3:string,
   cca3:string,
   cioc:string,
   independent:boolean,
   status:string,
   unMember:boolean,
   currencies:{[key:string]:Currency},
   idd:Idd,
   capital:string[],
   altSpellings:string[],
   region:string,
   subregion:string,
   languages:{[key:string]:string},
   translations:{[key:string]:Language},
   latlng:number[],
   landlocked:boolean,
   borders:string[],
   area:number,
   demonyms:{[key:string]:Demonyms},
   flag:string,
   maps:{[key:string]:string},
   population:number,
   gini:{[key:string]:number},
   fifa:string,
   car:CarDirection,
   timezones:string[],
   continents:string[],
   flags:{[key:string]:string},
   coatOfArms:{[key:string]:string},
   startOfWeek:string,
   capitalInfo?:{[key:string]:number[]},
   postalCode:PostalCode,
   isFavorite:boolean
}

export default CountryInfo