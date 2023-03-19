import { IconButton } from '@mui/material'
import React from 'react'
import { PaginationStates } from '../../app/countryDataMaintainer/countryInterface'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Pagination = ({dataPerPage,totalData,paginate,prevPage,nextPage}:PaginationStates) => {
    const pages  = []
    
    for(let page = 0;page < Math.ceil(totalData/dataPerPage);page++){
        pages.push(page)
    }
  return (
    <div className='paginate-container'>
      <ul className='paginate'>
            <li onClick={prevPage} className="page"><IconButton><ArrowBackIosNewIcon/></IconButton></li>
            {
                pages.map((page)=><li key={page} onClick={()=>paginate(page)} className="page"><IconButton>{page}</IconButton></li>)
            }
            <li onClick={nextPage} className="page"><IconButton><ArrowForwardIosIcon/></IconButton></li>
      </ul>
    </div>
  )
}

export default Pagination
