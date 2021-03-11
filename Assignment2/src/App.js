import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Lenval from './Lenva/Lenval';
import CharComponent from './CharComponent/CharComponent';
import charcomponent from './CharComponent/CharComponent';


class App extends Component {
  
  state = {
    charcomponent:''
  }

  inputChangeHandler = (event) => {
    let inputtext = event.target.value;
    this.setState({charcomponent:inputtext})
    
  }

  deleteCharHandler = (index) => {
    const text = this.state.charcomponent.split("");
    text.splice(index,1);
    const updatedText = text.join("");
    this.setState({charcomponent: updatedText});
  }
  
  render() {
    let charcomp = null;
    charcomp = (
      <div>
        {this.state.charcomponent.split("").map( (a,index) => {
         return (
           <CharComponent
           char={a} key={index}
           clicked={() => this.deleteCharHandler(index)}/>
         ) 
        }

        )

        }
      </div>
    )
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React-Assignment2</h1>
        </header>
        <p>Please input here : </p><input onChange={this.inputChangeHandler} className="Inputclass" type="text" value={this.state.charcomponent}/>
        <p>Number of characters : {this.state.charcomponent.length}</p>
        <Lenval inputlength={this.state.charcomponent.length}/>
        {charcomp}
      </div>
    );
  }
}

export default App;
