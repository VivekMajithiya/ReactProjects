import React from 'react';
import "./CharComponent.css"

const charcomponent = (props) => {
    return (
        <div className="Charcomponent" onClick={props.clicked}>
            {props.char}
        </div>
    )
}

export default charcomponent;