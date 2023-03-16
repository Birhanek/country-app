import React from 'react'
import { useAppSelector } from '../app/countryDataMaintainer/hooks'

const Favorite = () => {
  const {favoriteCountry} = useAppSelector(state=>state.country)
  return (
    <div>
     {
      favoriteCountry.length>0?<p>No favorite country selected</p>:<p>{favoriteCountry.length}</p>
     }
    </div>
  )
}

export default Favorite
