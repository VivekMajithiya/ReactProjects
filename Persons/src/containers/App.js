import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

class App extends Component {

  state = {
    persons: [
      {id: '1', name: 'Vivek', age: 35},
      {id: '2', name: 'Kishan', age: 47},
      {id: '3', name: 'Rohan', age: 34}
    ],
    showperson: false
  }


  nameChangeHandler = (event,Id) => {
    
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === Id;
    })

    const person = {
      ...this.state.persons[personIndex]};
    
    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex]=person;
    this.setState({persons:persons});

  }

  togglePersonHandler = () => {
    const mediateState = this.state.showperson
    this.setState({showperson: !mediateState})
  }

  deletePersonHandler = (personIndex) => {
    const tempperson = [...this.state.persons];
    tempperson.splice(personIndex,1)
    this.setState( {persons: tempperson})
  }

  render() {
   
    let persons = null;

    /* Passing the classes to a JSX component dynamically using array*/
    
    if (this.state.showperson) {
      persons = (
        <div>
           <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
           />
        </div>
        
      )
    
    }

    return (
      <WithClass classes={classes.App}>
        <Cockpit
           title={this.props.appTitle}
           showperson={this.state.showperson}
           personsLength={this.state.persons.length}
           clicked={this.togglePersonHandler}
        />
          {persons}
      </WithClass>
        // this is outside jsx and gives error if not commented <h1>This is outside jsx</h1>
    );

    // React.CreateElement is an option instead of using JSX (Above) - but it is lengthy and cumbersom approach as nesting of component
    //is difficult - JSX is easier and popular choice - but everything has to be wrapped around div tag
    //return React.createElement('div',null,'h1','Hi this is header inside the div')
    //return React.createElement('div',null,React.createElement('h1',null,'Hi this is now coming properly but without style as object is null'))
    //return React.createElement('div',{className: 'App'},React.createElement('h1',null,'Hi this is better now with css class applied at div level'))
  }
}

export default App;
