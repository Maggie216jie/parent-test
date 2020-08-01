import './App.css';
import React, { Component } from 'react';
import Parent from './Parent';
import { AppContext } from './AppContext'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      items: ["blue", "red", "Orange","yellow", "green"],
      userName:"Mengjie"
      
    }
  }
  render() {
    return (
      <AppContext.Provider value={{
        state: this.state,
      
      }}>
      <div className="wholeContainer">
        <Parent />
        
      </div>
      </AppContext.Provider>
    );
  }
}

export default App;


