//------------------------------------------------------------------------------------------------------------------
// IMPORTS
//------------------------------------------------------------------------------------------------------------------

import React, { Component } from 'react'
import { Route, Switch, withRouter} from 'react-router-dom'

import HomePage from './pages/HomePage'
import Header from './pages/Header'
import SignInForm from './pages/SignInForm'
import Inventory from './pages/Inventory'
import SignUpForm from './pages/SignUpForm'


//grab the validate function from the api.js to use 
import {validate} from './services/api'

import './App.css'

//------------------------------------------------------------------------------------------------------------------
// APP CLASS 
//------------------------------------------------------------------------------------------------------------------

class App extends Component {

// initial state
//------------------------------------------------------------------------------------------------------------------
  state = { // this is the initial state and when someone signsin this will be updated by the setState below
    username:''
  }
//------------------------------------------------------------------------------------------------------------------

// sign in
//------------------------------------------------------------------------------------------------------------------
  // only one user can be signed in at once so when they are the username will be replaced eachtime
  //update sign in since it was expecting a string now it will be getting a little object with username and id
  signin = (user) => { 
    this.setState({ username: user.username })
    localStorage.setItem('token', user.token) // add token
    this.props.history.push('/inventory')
  }
//------------------------------------------------------------------------------------------------------------------

// sign out
//------------------------------------------------------------------------------------------------------------------
// if we are signin we will also be want to be able to signout - here will again set the state of username back to nothing
// now in signout it will also remove the token from local storage, we only need to give the key and dont require a value when we are using removeItem()
// you could have also used  localStorage.clear('token') => but this would have removed everything and if we were also storing other stuff this would be a problem
signout = () => { 
   this.setState({username:''})
   this.props.history.push('/')
   localStorage.removeItem('token')
 }
//------------------------------------------------------------------------------------------------------------------

// component did mount - validate user token
//------------------------------------------------------------------------------------------------------------------
 //import validate function at top
 //check if we have a token - then -> if we dont show error - but if there is no error then we get our user - hench we can assume the id we had stored in local storage was valid
 componentDidMount(){
   if (localStorage.token){
     validate()
      .then(data => {
        if (data.error){
          alert(data.error)
        } else{
          this.signin(data)
        }
      })

   }
 }
 //------------------------------------------------------------------------------------------------------------------

// render component
//------------------------------------------------------------------------------------------------------------------
  render() {
    const {signin, signout} = this
    const {username} = this.state // so we can pass the username down to the header to welcome the user

    return (
      <div className="App">
        <Header username={username} signout={signout}/> 
        <Switch> 
          <Route exact path='/' component={HomePage} />
          <Route path='/signin' component={props => <SignInForm signin={signin} {...props}/>} />
          <Route path='/inventory' component={props => <Inventory username={username} {...props}/> } />
          <Route path='/signup' component={props => <SignUpForm signin={signin} {...props}/>} />
          <Route component={() => <h1>Page not found.</h1>} />
        </Switch>
      </div>
    )
  }
//------------------------------------------------------------------------------------------------------------------

}


//------------------------------------------------------------------------------------------------------------------
// EXPORT
//------------------------------------------------------------------------------------------------------------------


export default withRouter(App)


//  by adding withRouter in the import and at the export of App => we get match, location and history