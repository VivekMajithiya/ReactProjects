import React from 'react';

const lenval = (props) => {

    let lengthcomment = null;
    if(props.inputlength > 5){
        lengthcomment = (
            <p>text length is long enough</p>
        )
    }else{
        lengthcomment = (
            <p>text length is very short</p>
        )
    }



    return(
        <div>
            {lengthcomment}
        </div>
    )
}

export default lenval;