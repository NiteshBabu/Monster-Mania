import React from 'react'
import './card.styles.css'

export const Card = props =>{
  return(
    <div className="card">
      <img src={`https://robohash.org/${props.monster.id}/?set=set2&size=200x200`} alt='monster.pic'/>
      <div className='detail'>
        <h5>{props.monster.name}</h5>
        <p>{props.monster.email}</p>
      </div>
    </div>
  )
}