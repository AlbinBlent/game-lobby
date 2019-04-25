import React, { Component } from 'react'
import Lobby from './components/pages/Lobby'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">Game lobby</header>
        <div>
          <Lobby />
        </div>
      </div>
    )
  }
}

export default App
