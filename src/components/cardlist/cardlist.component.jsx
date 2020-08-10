import React from 'react'
import {Card} from '../card/card.component'
import './cardlist.styles.css'

export const CardList = props =>{
const MonsterList = props.monsters.map( monster => <Card monster={monster} key={monster.id} />)
  return (
    <main>
      <div className="cardlist">
        {MonsterList}
      </div>
    </main>
    )
}