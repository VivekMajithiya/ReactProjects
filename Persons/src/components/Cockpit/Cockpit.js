import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {

    let assignedClasses = [];
    let assignedClasses2 = [classes.Button];

    if(props.personsLength <= 2) {
      assignedClasses.push(classes.red);
    }
    if(props.personsLength < 2){
      assignedClasses.push(classes.bold);
    }

    if (props.showperson) {
      assignedClasses2.push(classes.Red);
   }

    return(
        <div className={classes.Cockpit}>
        <h1>{props.title}</h1>
        {/* <p className="red bold">WOW!! This is working!!!</p>   : this is the way to pass multiple classes with hardcoding*/}
        <p className={assignedClasses.join(' ')}>Wow the dynamic classes also work well!!!</p>
        
        <button 
            className={assignedClasses2.join(' ')}
            onClick={props.clicked}
        // onClick={() => this.switchNameHandler('Maxim on button!!')}
        // >Switch Name
        >TogglePersons</button>
      </div>
    );
};

export default React.memo(cockpit);