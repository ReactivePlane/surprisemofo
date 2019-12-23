import React from 'react'
import classes from './Input.module.css'

const input = (props) => {
    let inputElem = null
    const inputClasses = [classes.InputElement]
    if (!props.validity && props.touched)
        inputClasses.push(classes.Invalid)

    switch (props.elementType){
        case ('input'):
            inputElem = (
                <input  className = {inputClasses.join(' ')} onChange = {props.onChange}
                    type = {props.config.type} placeholder = {props.config.placeholder} value = {props.value}/>
            )
            break;
    }

    return (
        <div className={classes.Input}>
            {inputElem}
        </div>
    )
}

export default input;
