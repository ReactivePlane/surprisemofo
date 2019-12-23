import React,{Component} from 'react'
import classes from './Registration.module.css'
import Input from '../../Components/Input.js/Input'

class Registration extends Component {
    state = {
        form:{
            name: {
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder: 'Your Name'
                },
                value:'',
                validation:{
                    required:true,
                    validityError:''

                },
                validity: false,
                touched: false
            },
            password:{
                elementType:'input',
                elementConfig:{
                    type:'text',
                    placeholder: 'Your Password'
                },
                value:'',
                validation:{
                    required:true,
                    minLength:6,
                    maxLength:20,
                    validityError:'Password must be between 6-20 character'
                },
                validity: false,
                touched: false
            },
            email:{
                elementType:'input',
                elementConfig:{
                    type:'email',
                    placeholder: 'Your Email'
                },
                value:'',
                validation:{
                    required:true,
                    validityError:''

                },
                validity: false,
                touched: false
            },

        },
        formIsValid: false
    }

    checkValidity = (value,rules) => {
        let isValid = true

        if (!rules.required)
            return true
        if (rules.minLength)
            isValid = value.length >= rules.minLength && isValid
        if (rules.maxLength)
            isValid = value.length <= rules.maxLength && isValid
        return isValid
    }

    onChangeHandler = (event,inputIdentifier) => {
        const updatedForm = {
            ...this.state.form
        }
        const updatedElement = {
            ...updatedForm[inputIdentifier]
        }
        updatedElement.value = event.target.value
        updatedElement.validity = this.checkValidity(updatedElement.value,updatedElement.validation)
        updatedElement.touched = true
        updatedForm[inputIdentifier] = updatedElement
        let formIsValid = true
        for (let key in updatedForm)
            formIsValid = updatedForm[key].validity && formIsValid

        this.setState({form:updatedForm,formIsValid:formIsValid})
    }
    validityErrorHandler = (inputIdentifier) =>{
        const form = {
            ...this.state.form
        }
        const inputElement = {
            ...form[inputIdentifier]
        }
        let errArray = []
        for (let element in inputElement){
            if(!element.validity)
                errArray.push(element.validation.validityError)
        }
        return errArray
    }

    clickHandler = (event) => {
        event.preventDefault()
    }

    render(){
        const formElementsArray = []
        for (let key in this.state.form){
            formElementsArray.push({
                id: key,
                config: this.state.form[key]
            })
        }

        return (
            <form onSubmit={this.clickHandler} className={classes.Input} >
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        value={formElement.config.value}
                        elementType={formElement.config.elementType}
                        config = {formElement.config.elementConfig}
                        onChange = {(event)=>this.onChangeHandler(event,formElement.id)}
                        validity = {formElement.config.validity}
                        touched = {formElement.config.touched}
                        />
                ))}
                <button disabled={!this.state.formIsValid}> Sign Up</button>
                {/* {formElementsArray.map( formElement =>{
                    if(!formElement.validity){
                        console.log(formElement.config.validity)
                        return <p><strong>{formElement.config.validation.validityError}</strong></p>
                    }
                    return null
                })
                } */}
            </form>
        )
    }
}

export default Registration