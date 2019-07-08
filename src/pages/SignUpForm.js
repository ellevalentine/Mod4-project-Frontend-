//------------------------------------------------------------------------------------------------------------------
// IMPORTS
//------------------------------------------------------------------------------------------------------------------
 
import React from 'react'

// import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

// import { signin } from '../services/api'
// import { Link } from 'react-router-dom'
import { createUser } from '../services/api'
import TextField from '@material-ui/core/TextField'



//------------------------------------------------------------------------------------------------------------------
// SIGN IN FORM CLASS
//------------------------------------------------------------------------------------------------------------------
 
class SignUpForm extends React.Component {

// inital state
//------------------------------------------------------------------------------------------------------------------  
  state = {
    username: '',
    password: ''
  }

  handleSubmit = event => {
  event.preventDefault()
  
  alert("User added")
  // let name = event.target.username.value
  // let passord = event.target.password.value

  createUser(event.target.username.value, event.target.password.value)

  this.props.history.push('/signin')



    
  }


// render component
//------------------------------------------------------------------------------------------------------------------
  render () {
    // const { username, password } = this.state
    const { handleSubmit } = this

    return (
      <div className="sign-in-up-form" >
        <h3 className="form-headers">Sign Up:</h3> 
        <p className="form-subheaders">Please enter a Username:</p>
        <form onSubmit={handleSubmit}>
        <TextField
          name='username'
        />
        <p className="form-subheaders">Please enter a Password:</p>
        <TextField
          name='password'
          type='password'
        />
        <br />
        <br />
        <Button type="submit" variant='contained' color='secondary'>
          SUBMIT
        </Button>

        </form>
      
    
      </div>
    )
  }
}

//------------------------------------------------------------------------------------------------------------------
// EXPORT
//------------------------------------------------------------------------------------------------------------------
 

export default SignUpForm