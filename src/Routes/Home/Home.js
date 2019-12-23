import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'
import  Registration from '../Registration/Registration'
import Login from '../Login/Login'

class Home extends Component {

    LoginContinueHandler = () =>{
        this.props.history.replace("/login")
    }
    RegistrationContinueHandler = () =>{
        this.props.history.replace("/registration")

    }

    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={this.LoginContinueHandler}>Login</button>
                <button onClick={this.RegistrationContinueHandler}>Registration</button>
                <Switch>
                    <Route path="/registration" component={Registration} />
                    <Route path="/login" component={Login}/>
                </Switch>
            </div>
        )
    }
}

export default Home
