import React from 'react';
import ReactDOM from 'react-dom';
import Monster from './Monster'
import './index.css'

// creates an element
// const e = React.createElement  
// e takes (Component, dataset_Dictionary)

ReactDOM.render(<Monster/>, document.querySelector('#root'))