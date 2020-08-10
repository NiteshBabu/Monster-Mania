import React from 'react'
import './search.styles.css'

export const Search = props =>{
  return(
    <div className='searchbox'>
      <input type='search' placeholder='search monster name' onChange={props.handleChange}/>
    </div>
  )
}