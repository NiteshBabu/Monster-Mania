import React, {Component} from 'react'
import {CardList} from './components/cardlist/cardlist.component'
import { Search } from './components/search/search.component'
import './Monster.css'

class Monster extends Component {
  constructor(){
    super()
    this.state = {
      monsters : [],
      searchText : ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        this.setState({monsters : data})
      })
  }

  handleChange = e =>{
    this.setState({searchText : e.target.value})
  }
  render(){
    const {monsters, searchText} = this.state;
    const filteredMonster = monsters.filter( monster => monster.name.toLowerCase().includes(searchText.toLowerCase()));
    
    return(
      <main>
        <h1>Monster Mania</h1>
        <Search 
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonster}/>
      </main>
    )
  }
}

export default Monster
