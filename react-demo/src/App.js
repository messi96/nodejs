import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EmpList from './employees/EmpList'

class App extends Component {
  render() {
    return (
      <div>
        <h1>React Demo</h1>
        <div>Text area!</div>

        <EmpList/>
      </div>          
      // <div className="App">                                             //jsx single html component.. if multiple then inside div or span
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export class Dummy {

}

export default App;           //default
// export App;
