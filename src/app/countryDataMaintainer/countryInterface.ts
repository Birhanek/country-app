export interface Language {
    official:string,
    common:string
}
export interface NativeName {

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

export interface  CountryState {
    countryState: CountryInfo[],
    isLoading:boolean,
    isError:boolean,
    message?:string
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
   population:bigint,
   gini:{[key:string]:number},
   fifa:string,
   car:CarDirection,
   timezones:string[],
   continent:string[],
   flags:{[key:string]:string},
   coatOfArms:{[key:string]:string},
   startOfWeek:string,
   capitalInfo?:{[key:string]:number[]},
   postalCode:PostalCode
}

export default CountryInfo