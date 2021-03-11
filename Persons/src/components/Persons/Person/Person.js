import React, { Component } from 'react';
// import './Person.css';
import classes from './Person.css';
import Aux from '../../../hoc/Auxiliary';
import WithClass from '../../../hoc/WithClass';
import PropTypes from 'prop-types';

//Hard coded function  
//const person = () => {
//     //return <p>I am a person created in person.js</p>
//     return <p>I am a person created in person.js, I am {Math.floor(Math.random() * 30)} years old.</p>
// };

//Function with props
//const person = (props) => {

class Person extends Component {
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }
    componentDidMount(){
        //this.inputEl.focus(); used in old method 
        this.inputElementRef.current.focus();
    }
    render(){
        return (
            <WithClass classes={classes.Person}>
                <p onClick={this.props.click11}>I am {this.props.name}, and I am {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input 
                //ref={(inputEl) => {this.inputEl=inputEl}} - this is older technique
                ref={this.inputElementRef}    
                type='text' 
                onChange={this.props.changed} 
                value={this.props.name}/>
            </WithClass>
      )
    }
};

Person.propTypes = {
    changed: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    click11: PropTypes.func
}
export default Person;