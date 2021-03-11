import React, { Component } from 'react';
import './UserInput.css';
import UserOutput from './UserOutput'

const userinput = (props) => {
    return(
        <div className='UserInput'>
            <p>User input :</p>
            <input onChange={props.changename} type='text' value={props.oldname}/>
        </div>
    )
}

export default userinput;