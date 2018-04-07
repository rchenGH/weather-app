import React, { Component } from 'react'

import Form from './components/Form'
import Title from './components/Title'
import Weather from './components/Weather'

import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        Hello World
        <Form />
        <Title />
        <Weather />
      </div>
    )
  }
}

export default App
