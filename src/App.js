import React, { Component } from 'react';
import './App.css';
import './header.css'
import Cat from "./components/Cat"
import cats from './data/cats.json'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="header">
          <a href="/" className="logo">Cats</a>
          <div className="header-right">
            <a className="active" href="/">Home</a>
            <a href="/users">Sign Up</a>
            <a href="/logout">Sign Out</a>
          </div>
        </div>
        <Cat cats={cats} />
        <footer id="footer">
          <p id="footerText">Posted by Emma Jarvis</p>
        </footer>
      </div >
    )
  }
}

export default App;
