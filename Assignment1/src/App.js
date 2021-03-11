import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './User/UserInput'
import UserOutput from './User/UserOutput'

class App extends Component {

  state = {
    UserOutput: [
      {name: 'Vivek Majithiya'}
    ]
  }

  changeNameButtonHandler1 = () => {
    this.setState(
      {
        UserOutput: [
          {name: 'Jaimik Tanay Ruta Majithiya'}
        ]
      }
    )
  }

  changeNameButtonHandler2 = () => {
    this.setState(
      {
        UserOutput: [
          {name: 'Vivek Majithiya'}
        ]
      }
    )
  }
  nameChangeHandler = (event) => {
    this.setState(
      {
        UserOutput: [
          {name: event.target.value}
        ]
      }
    )
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Assignment 1</h1>
        </header>
        <UserInput
        oldname={this.state.UserOutput[0].name}
        changename={this.nameChangeHandler}/>
        <UserOutput name={this.state.UserOutput[0].name}/>
        <UserOutput name={this.state.UserOutput[0].name}/>
        <button onMouseDown={this.changeNameButtonHandler1} onMouseUp={this.changeNameButtonHandler2} className='App-button'>Change Name</button>
      </div>
    );
  }
}

export default App;
