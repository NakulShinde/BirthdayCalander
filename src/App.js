import React, { Component } from 'react';

import './App.css'
import CalendarWeek from "./components/CalendarWeek"
import PersonDataInput from "./components/PersonDataInput"

class App extends Component {
  render() {
    return (
     
        <div id="work-area">
          <CalendarWeek />
  
          <PersonDataInput></PersonDataInput>
  
        </div>
    );
  }
}

export default App;
